import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Phone, Clock } from 'lucide-react';
import { Icon, Reveal } from './ui.jsx';
import { BUSINESS } from '../data.js';

export default function ServiceRow({ s, i = 0 }) {
  return (
    <Reveal delay={(i % 2) * 0.1} style={{ height: '100%' }}>
      <article className="srow">
        <Link to={`/services/${s.slug}`} className="srow-img" aria-label={s.title}>
          <img src={s.image} alt={s.title} loading="lazy" />
          <span className="srow-num">{String(i + 1).padStart(2, '0')}</span>
          <span className="srow-badge"><Clock size={13} /> Available 24/7</span>
        </Link>
        <div className="srow-body">
          <span className="srow-ic"><Icon name={s.icon} size={26} /></span>
          <h3><Link to={`/services/${s.slug}`}>{s.title}</Link></h3>
          <p>{s.short}</p>
          <ul className="srow-list">
            {s.signs.slice(0, 3).map((t) => (<li key={t}><Check size={16} /> {t}</li>))}
          </ul>
          <div className="srow-actions">
            <Link to={`/services/${s.slug}`} className="more">View details <ArrowRight size={17} /></Link>
            <a className="srow-call" href={BUSINESS.phoneHref}><Phone size={15} /> Call</a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
