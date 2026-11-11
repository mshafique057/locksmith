import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ChevronLeft, ChevronRight, Clock, PoundSterling, BadgeCheck, ShieldCheck } from 'lucide-react';
import { BUSINESS, IMG } from '../data.js';

const INTERVAL = 6500;

const SLIDES = [
  {
    image: IMG.door,
    pos: '40% center',
    pill: 'Available now across Bradford',
    title: <>Back inside, <em>safely.</em> Your local home locksmith, day or night.</>,
    text: 'Locked out, lost a key or a door that will not lock? We repair and secure the doors and windows of Bradford homes, with a fixed price agreed before we arrive.',
    to: '/services/emergency-home-lockout',
    cta: 'Emergency lockouts'
  },
  {
    image: IMG.key,
    pos: '55% center',
    pill: 'Snapped & jammed keys',
    title: <>Key snapped in the lock? <em>Do not force it.</em></>,
    text: 'Stop turning and call us. We extract the broken piece cleanly and, in most cases, save the lock and cut you a working key on the spot.',
    to: '/services/snapped-key-removal',
    cta: 'Snapped key removal'
  },
  {
    image: IMG.cylinder,
    pos: '60% center',
    pill: 'uPVC & composite doors',
    title: <>Handle limp or door stiff? <em>Fixed in one visit.</em></>,
    text: 'Multipoint locks, gearboxes and cylinders repaired or replaced with parts carried in the van, so you avoid the cost of a whole new door.',
    to: '/services/upvc-composite-door-repair',
    cta: 'uPVC door repair'
  },
  {
    image: IMG.window,
    pos: '50% center',
    pill: 'Windows & home security',
    title: <>Every window and door <em>locked tight.</em></>,
    text: 'From stuck window handles to TS007 anti-snap cylinders, we make sure every entry point in your home is secure and works smoothly.',
    to: '/services/window-lock-repair',
    cta: 'Window lock repair'
  }
];

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const touch = useRef(null);
  const n = SLIDES.length;

  const go = useCallback((k) => setI(((k % n) + n) % n), [n]);

  useEffect(() => {
    if (paused) return undefined;
    const t = setTimeout(() => setI((v) => (v + 1) % n), INTERVAL);
    return () => clearTimeout(t);
  }, [i, paused, n]);

  const onKey = (e) => {
    if (e.key === 'ArrowRight') go(i + 1);
    if (e.key === 'ArrowLeft') go(i - 1);
  };

  return (
    <section
      className={`hero hs ${paused ? 'paused' : ''}`}
      aria-roledescription="carousel"
      aria-label="Featured services"
      tabIndex={0}
      onKeyDown={onKey}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => { touch.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touch.current == null) return;
        const dx = e.changedTouches[0].clientX - touch.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? i + 1 : i - 1);
        touch.current = null;
      }}
    >
      {SLIDES.map((s, k) => (
        <div
          key={k}
          className={`hero-bg hs-bg ${k === i ? 'on' : ''}`}
          style={{ backgroundImage: `url(${s.image})`, backgroundPosition: s.pos }}
          aria-hidden="true"
        />
      ))}

      <div className="wrap hs-wrap">
        <div className="hs-stack" aria-live={paused ? 'polite' : 'off'}>
          {SLIDES.map((s, k) => (
            <div key={k} className={`hs-text ${k === i ? 'on' : ''}`} aria-hidden={k !== i} role="group" aria-roledescription="slide" aria-label={`${k + 1} of ${n}`}>
              <span className="pill"><i className="dot" /> {s.pill}</span>
              <h1 as="h2">{s.title}</h1>
              <p className="lead">{s.text}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href={BUSINESS.phoneHref} tabIndex={k === i ? 0 : -1}><Phone size={19} /> Call {BUSINESS.phone}</a>
                <Link className="btn btn-ghost" to={s.to} tabIndex={k === i ? 0 : -1}>{s.cta} <ArrowRight size={18} /></Link>
              </div>
            </div>
          ))}
        </div>

        <div className="chips">
          <span className="chip"><Clock size={18} /> {BUSINESS.response} response</span>
          <span className="chip"><PoundSterling size={18} /> Fixed upfront price</span>
          <span className="chip"><BadgeCheck size={18} /> DBS checked &amp; insured</span>
          <span className="chip"><ShieldCheck size={18} /> 12-month guarantee</span>
        </div>

        <div className="hs-controls">
          <div className="hs-dots" role="tablist" aria-label="Choose slide">
            {SLIDES.map((s, k) => (
              <button key={k} role="tab" aria-selected={k === i} aria-label={`Slide ${k + 1}`} className={`hs-dot ${k === i ? 'on' : ''}`} onClick={() => go(k)}>
                {k === i && <span key={`${i}-${paused}`} className="hs-fill" style={{ animationDuration: `${INTERVAL}ms` }} />}
              </button>
            ))}
          </div>
          <span className="hs-count">0{i + 1} <i>/ 0{n}</i></span>
          <div className="hs-arrows">
            <button aria-label="Previous slide" onClick={() => go(i - 1)}><ChevronLeft size={22} /></button>
            <button aria-label="Next slide" onClick={() => go(i + 1)}><ChevronRight size={22} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
