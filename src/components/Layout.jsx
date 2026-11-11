import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Menu, X, MessageCircle, ArrowUp, ChevronRight } from 'lucide-react';
import { BUSINESS, NAV, SERVICES } from '../data.js';
import Logo from './Logo.jsx';

function Brand({ onClick }) {
  return (
    <Link to="/" className="brand" onClick={onClick} aria-label={BUSINESS.name}>
      <Logo />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); window.scrollTo({ top: 0 }); }, [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span className="live"><i className="dot" /> {BUSINESS.hours}</span>
          <span className="hide-sm"><MapPin size={15} /> Covering {BUSINESS.area}</span>
          <a href={`mailto:${BUSINESS.email}`} className="hide-sm"><Mail size={15} /> {BUSINESS.email}</a>
        </div>
      </div>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="wrap">
          <Brand />
          <nav className="nav" aria-label="Main">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>{n.label}</NavLink>
            ))}
          </nav>
          <div className="header-cta">
            <a className="btn btn-dark btn-sm" href={BUSINESS.phoneHref}><Phone size={17} /> {BUSINESS.phone}</a>
            <button className="burger" aria-label="Open menu" onClick={() => setOpen(true)}><Menu size={22} /></button>
          </div>
        </div>
      </header>
      <div className={`drawer ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
        <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
          <button className="burger" style={{ display: 'grid', alignSelf: 'flex-end' }} aria-label="Close menu" onClick={() => setOpen(false)}><X size={22} /></button>
          {NAV.map((n) => (<Link key={n.to} className="link" to={n.to}>{n.label}</Link>))}
          <a className="btn btn-primary" href={BUSINESS.phoneHref}><Phone size={18} /> Call {BUSINESS.phone}</a>
          <a className="btn btn-outline" href={BUSINESS.whatsappHref}><MessageCircle size={18} /> WhatsApp us</a>
        </div>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Brand />
            <p style={{ marginTop: 20, maxWidth: 320 }}>
              A dedicated home locksmith for Bradford families. Fast, tidy, fairly priced and available any hour of the day or night.
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}><Link to={`/services/${s.slug}`}><ChevronRight size={15} /> {s.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              {NAV.map((n) => (<li key={n.to}><Link to={n.to}><ChevronRight size={15} /> {n.label}</Link></li>))}
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li><a href={BUSINESS.phoneHref} className="ct"><Phone size={17} /> {BUSINESS.phone}</a></li>
              <li><a href={`mailto:${BUSINESS.email}`} className="ct"><Mail size={17} /> {BUSINESS.email}</a></li>
              <li><span className="ct"><MapPin size={17} /> {BUSINESS.area}</span></li>
              <li><span className="ct"><Clock size={17} /> {BUSINESS.hours}</span></li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</span>
          <span>Residential locksmith services only.</span>
        </div>
      </div>
    </footer>
  );
}

export function FloatingBits() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <>
      <div className="callbar">
        <a className="btn btn-primary btn-sm" href={BUSINESS.phoneHref}><Phone size={17} /> Call now</a>
        <a className="btn btn-ghost btn-sm" href={BUSINESS.whatsappHref}><MessageCircle size={17} /> WhatsApp</a>
      </div>
      <button className={`to-top ${show ? 'show' : ''}`} aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <ArrowUp size={20} />
      </button>
    </>
  );
}
