'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Dictionary } from '@/locales/data';

// Internal state just needs to track user selection
interface OptionState {
  id: string;
  enabled: boolean;
  quantity: number;
}

// Configuration derived from dictionary
interface OptionConfig {
  id: string;
  label: string;
  description: string;
  price: number;
  type: 'fixed' | 'per_sheet' | 'quantity';
  unitLabel?: string;
  startingPriceLabel?: string;
}

// Helper to map dictionary keys to config
const getOptionsConfig = (t: Dictionary): OptionConfig[] => [
  {
    id: 'layout',
    label: t.calculator.options.layout.label,
    description: t.calculator.options.layout.desc,
    price: 450,
    type: 'fixed',
  },
  {
    id: 'typesetting',
    label: t.calculator.options.typesetting.label,
    description: t.calculator.options.typesetting.desc,
    price: 120,
    type: 'per_sheet',
  },
  {
    id: 'cover',
    label: t.calculator.options.cover.label,
    description: t.calculator.options.cover.desc,
    startingPriceLabel: t.calculator.options.cover.startingPrice,
    price: 600,
    type: 'fixed',
  },
  {
    id: 'cover_pdf',
    label: t.calculator.options.cover_pdf.label,
    description: t.calculator.options.cover_pdf.desc,
    price: 350,
    type: 'fixed',
  },
  {
    id: 'epub',
    label: t.calculator.options.epub.label,
    description: t.calculator.options.epub.desc,
    startingPriceLabel: t.calculator.options.epub.startingPrice,
    price: 350,
    type: 'fixed',
  },
  {
    id: 'tables',
    label: t.calculator.options.tables.label,
    description: t.calculator.options.tables.desc,
    price: 10,
    type: 'quantity',
    unitLabel: t.calculator.options.tables.unit,
  },
  {
    id: 'illustrations',
    label: t.calculator.options.illustrations.label,
    description: t.calculator.options.illustrations.desc,
    price: 10,
    type: 'quantity',
    unitLabel: t.calculator.options.illustrations.unit,
  },
  {
    id: 'pdf_access',
    label: t.calculator.options.pdf_access.label,
    description: t.calculator.options.pdf_access.desc,
    price: 200,
    type: 'fixed',
  },
];

const Calculator = () => {
  const { t } = useLanguage();
  const [charCount, setCharCount] = useState<number | ''>('');
  const [sheets, setSheets] = useState(0);
  const [total, setTotal] = useState(0);

  // Initialize state only once (or keep it sync if IDs don't change)
  const [optionStates, setOptionStates] = useState<OptionState[]>([
    { id: 'layout', enabled: false, quantity: 0 },
    { id: 'typesetting', enabled: false, quantity: 0 },
    { id: 'cover', enabled: false, quantity: 0 },
    { id: 'cover_pdf', enabled: false, quantity: 0 },
    { id: 'epub', enabled: false, quantity: 0 },
    { id: 'tables', enabled: false, quantity: 0 },
    { id: 'illustrations', enabled: false, quantity: 0 },
    { id: 'pdf_access', enabled: false, quantity: 0 },
  ]);

  // Derived configuration based on current language
  const config = useMemo(() => getOptionsConfig(t), [t]);

  // Calculate sheets when chars change
  useEffect(() => {
    const chars = Number(charCount) || 0;
    // Rule: 1 sheet per started 40,000 chars
    const calculatedSheets = Math.ceil(chars / 40000);
    setSheets(calculatedSheets);
  }, [charCount]);

  // Calculate total price
  useEffect(() => {
    let newTotal = 0;
    
    optionStates.forEach(state => {
      const optConfig = config.find(c => c.id === state.id);
      if (state.enabled && optConfig) {
        if (optConfig.type === 'fixed') {
          newTotal += optConfig.price;
        } else if (optConfig.type === 'per_sheet') {
          newTotal += optConfig.price * sheets;
        } else if (optConfig.type === 'quantity') {
          newTotal += optConfig.price * (state.quantity || 0);
        }
      }
    });

    setTotal(newTotal);
  }, [optionStates, sheets, config]);

  const toggleOption = (id: string) => {
    setOptionStates(prev => prev.map(opt => 
      opt.id === id ? { ...opt, enabled: !opt.enabled } : opt
    ));
  };

  const updateQuantity = (id: string, val: string) => {
    const num = parseInt(val) || 0;
    setOptionStates(prev => prev.map(opt => 
      opt.id === id ? { ...opt, quantity: num >= 0 ? num : 0 } : opt
    ));
  };

  const handleCharChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '') {
      setCharCount('');
      return;
    }
    const num = parseInt(val);
    if (!isNaN(num) && num >= 0) {
      setCharCount(num);
    }
  };

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' }).format(amount);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 text-primary">
      
      {/* 1. Character Input Section */}
      <div className="bg-white border border-border p-6 rounded-sm shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-2">
            <label htmlFor="charCount" className="block font-bold uppercase tracking-widest text-sm">
              {t.calculator.fields.chars}
            </label>
            <p className="text-xs text-muted">{t.calculator.fields.charsHint}</p>
          </div>
          <div>
            <input
              type="number"
              id="charCount"
              value={charCount}
              onChange={handleCharChange}
              placeholder="0"
              className="w-full p-3 bg-background border border-border focus:border-accent outline-none text-right font-serif text-xl no-spinner"
            />
          </div>
        </div>
      </div>

      {/* 2. Calculated Sheets Display */}
      <div className="bg-primary text-background p-6 rounded-sm shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="space-y-1">
          <h3 className="font-bold uppercase tracking-widest text-sm">{t.calculator.fields.sheets}</h3>
          <p className="text-xs opacity-70">{t.calculator.fields.sheetsHint}</p>
        </div>
        <div className="text-3xl font-serif font-bold">
          {sheets.toFixed(2)}
        </div>
      </div>

      {/* 3. Options List */}
      <div className="space-y-4">
        {config.map((opt) => {
          const state = optionStates.find(s => s.id === opt.id) || { enabled: false, quantity: 0, id: opt.id };
          
          return (
            <motion.div 
              key={opt.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "bg-white border p-6 rounded-sm transition-all duration-300",
                state.enabled ? "border-accent shadow-md" : "border-border shadow-sm"
              )}
            >
              <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                
                {/* Label & Description */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <h4 className="font-bold text-lg">{opt.label}</h4>
                    {opt.startingPriceLabel && (
                      <span className="text-xs bg-background px-2 py-1 rounded text-muted font-medium border border-border">
                        {opt.startingPriceLabel}
                      </span>
                    )}
                  </div>
                  {opt.description && (
                    <p className="text-sm text-secondary leading-relaxed max-w-2xl">
                      {opt.description}
                    </p>
                  )}
                </div>

                {/* Controls */}
                <div className="flex flex-col items-end gap-4 min-w-[140px]">
                  
                  {/* Toggle & Price/Input */}
                  <div className="flex items-center gap-4">
                     {/* Quantity Input (only if enabled and type is quantity) */}
                     {opt.type === 'quantity' && (
                      <div className={cn("transition-opacity duration-300", state.enabled ? "opacity-100" : "opacity-0 pointer-events-none")}>
                         <input 
                            type="number"
                            min="0"
                            value={state.quantity}
                            onChange={(e) => updateQuantity(opt.id, e.target.value)}
                            className="w-20 p-2 text-right border border-border focus:border-accent outline-none bg-background text-sm no-spinner"
                         />
                      </div>
                     )}

                     {/* Custom Toggle Switch */}
                     <button
                      onClick={() => toggleOption(opt.id)}
                      className={cn(
                        "w-14 h-8 rounded-full flex items-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent",
                        state.enabled ? "bg-accent" : "bg-border"
                      )}
                      aria-pressed={state.enabled}
                     >
                        <span 
                          className={cn(
                            "w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center",
                            state.enabled ? "translate-x-7" : "translate-x-1"
                          )}
                        >
                          {state.enabled && <Check size={14} className="text-accent" />}
                        </span>
                     </button>
                  </div>

                  {/* Calculated Line Item Cost */}
                  <div className="font-serif text-lg font-medium text-right">
                    {state.enabled ? (
                      opt.type === 'fixed' ? formatPrice(opt.price) :
                      opt.type === 'per_sheet' ? formatPrice(opt.price * sheets) :
                      opt.type === 'quantity' ? formatPrice(opt.price * (state.quantity || 0)) :
                      '0,00 zł'
                    ) : (
                      <span className="text-muted/40">0,00 zł</span>
                    )}
                  </div>

                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 4. Total Summary */}
      <div className="border-t-2 border-primary pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-lg uppercase tracking-widest font-bold text-secondary">
          {t.calculator.total}
        </div>
        <div className="text-4xl md:text-5xl font-serif font-bold text-accent">
          {formatPrice(total)}
        </div>
      </div>
      
      <div className="text-center text-xs text-muted mt-4">
        {t.calculator.disclaimer}
      </div>

    </div>
  );
};

export default Calculator;