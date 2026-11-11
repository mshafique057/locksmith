import React, { useId } from 'react';

// Shield + house roof + keyhole mark. Gradient ids are unique per instance.
export function LogoMark({ size = 52 }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg width={size} height={size * (56 / 48)} viewBox="0 0 48 56" role="img" aria-label="Bradford Locksmith Pro logo" className="logo-mark">
      <defs>
        <linearGradient id={`g${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f3d98b" />
          <stop offset="1" stopColor="#c9983a" />
        </linearGradient>
        <linearGradient id={`n${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2f63aa" />
          <stop offset="1" stopColor="#163a6b" />
        </linearGradient>
      </defs>
      <path d="M24 2 44 9v19c0 12-9 22-20 26C13 50 4 40 4 28V9z" fill={`url(#n${id})`} stroke={`url(#g${id})`} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M12.5 27 24 16.5 35.5 27" fill="none" stroke={`url(#g${id})`} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="29.5" r="4.4" fill={`url(#g${id})`} />
      <path d="M21.9 32.5h4.2l1.6 9h-7.4z" fill={`url(#g${id})`} />
    </svg>
  );
}

export default function Logo() {
  return (
    <span className="logo">
      <LogoMark />
      <span className="logo-text">
        <b>Bradford <i>Locksmith</i></b>
        <small><span className="logo-line" /> Pro · 24/7 Home Service</small>
      </span>
    </span>
  );
}
