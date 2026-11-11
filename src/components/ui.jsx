import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DoorOpen, KeyRound, Wrench, ShieldCheck, AppWindow, LockKeyhole, KeySquare, ShieldAlert,
  Clock, PoundSterling, BadgeCheck, Lock, Star, Phone, Building2, Trees, Home, MapPinned
} from 'lucide-react';
import { BUSINESS } from '../data.js';

const ICONS = { DoorOpen, KeyRound, Wrench, ShieldCheck, AppWindow, LockKeyhole, KeySquare, ShieldAlert, Clock, PoundSterling, BadgeCheck, Lock, Building2, Trees, Home, MapPinned };

export function Icon({ name, size = 24, ...rest }) {
  const C = ICONS[name] || Lock;
  return <C size={size} strokeWidth={1.8} {...rest} />;
}

export function useTitle(title, desc) {
  useEffect(() => {
    document.title = title;
    if (desc) {
      let m = document.querySelector('meta[name="description"]');
      if (m) m.setAttribute('content', desc);
    }
  }, [title, desc]);
}

export function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { setOn(true); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOn(true); io.disconnect(); }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${on ? 'in' : ''} ${className}`} style={{ '--d': `${delay}s` }} {...rest}>
      {children}
    </Tag>
  );
}

export function Counter({ to, suffix = '', decimals = 0 }) {
  const ref = useRef(null);
  const [v, setV] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / 1400, 1);
        setV(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{v.toFixed(decimals)}{suffix}</span>;
}

export function Stars({ n = 5 }) {
  return (
    <div className="stars" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => <Star key={i} size={17} fill="currentColor" strokeWidth={0} />)}
    </div>
  );
}

export function SectionHead({ eyebrow, title, lead, center = true, children }) {
  return (
    <Reveal className={`head ${center ? 'center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
      {children}
    </Reveal>
  );
}

export function PageBanner({ title, text, crumbs = [], tall = false, image }) {
  return (
    <section className="banner" style={tall ? { paddingBottom: 'clamp(110px, 12vw, 150px)' } : undefined}>
      {image && <div className="banner-img" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />}
      <div className="wrap hero-up">
        <div className="crumbs">
          <Link to="/">Home</Link>
          {crumbs.map((c) => (<span key={c.label}> / {c.to ? <Link to={c.to}>{c.label}</Link> : c.label}</span>))}
        </div>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}

export function CtaBand({ title = 'Locked out or worried about a lock? Talk to a real local locksmith.', text = 'Call any time, day or night. We will agree a fixed price before we set off.' }) {
  return (
    <section className="cta">
      <div className="wrap">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a className="btn btn-primary" href={BUSINESS.phoneHref}><Phone size={18} /> {BUSINESS.phone}</a>
          <Link className="btn btn-ghost" to="/contact">Request a callback</Link>
        </div>
      </div>
    </section>
  );
}
