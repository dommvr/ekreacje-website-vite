import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const HOME_HASH_ALIASES: Record<string, string> = {
  '#portfolio': '#wybrane-realizacje',
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function assetUrl(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return normalizedPath;
}

export function normalizeHash(path: string) {
  if (!path || path === '#' || path === '') {
    return '#home';
  }

  const hashPath = path.startsWith('#') ? path : `#${path}`;
  const [baseHash, ...rest] = hashPath.split('=');
  const normalizedBaseHash = HOME_HASH_ALIASES[baseHash] ?? baseHash;

  return rest.length > 0
    ? `${normalizedBaseHash}=${rest.join('=')}`
    : normalizedBaseHash;
}

export function getSectionIdFromHash(path: string) {
  const normalizedHash = normalizeHash(path);

  if (
    normalizedHash === '#home' ||
    normalizedHash === '#' ||
    normalizedHash === '' ||
    normalizedHash.startsWith('#/')
  ) {
    return null;
  }

  return normalizedHash.split('=')[0].replace('#', '');
}

export function scrollToHashTarget(path: string, behavior: ScrollBehavior = 'smooth') {
  if (typeof window === 'undefined') {
    return false;
  }

  const targetId = getSectionIdFromHash(path);
  if (!targetId) {
    return false;
  }

  const element = document.getElementById(targetId);
  if (!element) {
    return false;
  }

  element.scrollIntoView({ behavior });
  return true;
}

export function navigateTo(path: string) {
  if (typeof window !== 'undefined') {
    const targetHash = normalizeHash((path === '/' || path === '') ? '#home' : path);

    try {
      localStorage.setItem('ekreacje_last_path', targetHash);
    } catch (e) {}

    const currentHash = normalizeHash(window.location.hash || '#home');
    const isSameHash = currentHash === targetHash;

    if (isSameHash) {
        if (targetHash === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (!targetHash.startsWith('#/')) {
            scrollToHashTarget(targetHash, 'smooth');
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
