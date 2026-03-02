'use client';

import React, { useRef, useState } from 'react';
import Section from '../ui/Section';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    honeypot: '' // Hidden field for antispam
  });

  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const target = e.currentTarget;
    target.style.height = 'auto';
    target.style.height = `${target.scrollHeight}px`;
    setFormData(prev => ({ ...prev, message: target.value }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Honeypot check (Antispam)
    if (formData.honeypot) {
      console.log('Spam detected');
      setStatus('success'); // Fake success for bots
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ email: '', message: '', honeypot: '' });
        if (textareaRef.current) textareaRef.current.style.height = 'auto';
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <Section id="kontakt">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left: Info */}
        <div className="space-y-6 text-secondary">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">{t.contact.title}</h2>
          <p className="text-lg">
            {t.contact.desc}
          </p>
          
          <div className="bg-white border border-border p-6 my-6">
            <h3 className="font-bold text-xl mb-2 font-serif text-primary">{t.contact.boxTitle}</h3>
            <p className="text-sm leading-relaxed">
              {t.contact.boxDesc}
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <h4 className="font-bold uppercase tracking-widest text-accent">{t.contact.prepTitle}</h4>
            <ul className="list-disc list-inside space-y-2 text-secondary">
              {t.contact.prepList.map((item, idx) => (
                <li key={idx}>
                  <strong className="text-primary">{item.label}</strong> {item.value}
                </li>
              ))}
            </ul>
            <p className="italic text-xs mt-2 text-muted">{t.contact.noData}</p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white border border-border p-8 md:p-10 shadow-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Honeypot Field (Hidden) */}
            <div className="hidden" aria-hidden="true">
              <input 
                type="text" 
                id="honeypot" 
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex={-1} 
                autoComplete="off" 
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest mb-2 text-primary">{t.contact.form.email}</label>
              <input 
                type="email" 
                id="email" 
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-background border border-border p-3 focus:outline-none focus:border-accent transition-colors text-primary"
                placeholder="twoj@email.com"
                disabled={status === 'loading'}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest mb-2 text-primary">{t.contact.form.msg}</label>
              <textarea 
                ref={textareaRef}
                id="message" 
                rows={8}
                onInput={handleInput}
                required
                value={formData.message}
                className="w-full bg-background border border-border p-3 focus:outline-none focus:border-accent transition-colors resize-none text-primary overflow-hidden min-h-[120px]"
                placeholder={t.contact.form.placeholder}
                disabled={status === 'loading'}
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full bg-primary text-white py-4 uppercase tracking-widest font-bold hover:bg-accent transition-colors flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Wysyłanie...</span>
                </>
              ) : (
                <>
                  {t.contact.form.send}
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 p-4 rounded-sm border border-emerald-100 animate-in fade-in slide-in-from-top-2 duration-300">
                <CheckCircle2 size={20} />
                <p className="text-sm font-medium">{t.contact.form.success}</p>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-2 text-rose-600 bg-rose-50 p-4 rounded-sm border border-rose-100 animate-in fade-in slide-in-from-top-2 duration-300">
                <AlertCircle size={20} />
                <p className="text-sm font-medium">Wystąpił błąd. Spróbuj ponownie później lub napisz bezpośrednio na e-mail.</p>
              </div>
            )}
          </form>
        </div>

      </div>
    </Section>
  );
};

export default Contact;