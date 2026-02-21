import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function assetUrl(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return normalizedPath;
}

export function navigateTo(path: string) {
  if (typeof window !== 'undefined') {
    const targetHash = (path === '/' || path === '') ? '#home' : path;

    try {
      localStorage.setItem('ekreacje_last_path', targetHash);
    } catch (e) {}

    const currentHash = window.location.hash || '#home';
    const isSameHash = currentHash === targetHash;

    if (isSameHash) {
        if (targetHash === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (!targetHash.startsWith('#/')) {
            const id = targetHash.replace('#', '');
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'auto' });
        }
        return;
    }

    if (targetHash === '#home') {
        window.location.hash = 'home';
    } else {
        if (targetHash.startsWith('#/')) {
            window.scrollTo({ top: 0, behavior: 'auto' });
        }
        window.location.hash = targetHash.replace('#', '');
    }
  }
}