import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Icon, Reveal } from './ui.jsx';

export default function ServiceCard({ s, i = 0 }) {
  return (
    <Reveal delay={(i % 3) * 0.08}>
      <Link to={`/services/${s.slug}`} className="svc" style={{ height: '100%' }}>
        <div className="svc-img">
          <img src={s.image} alt={s.title} loading="lazy" />
          <span className="svc-icon"><Icon name={s.icon} size={24} /></span>
        </div>
        <div className="svc-body">
          <h3>{s.title}</h3>
          <p>{s.short}</p>
          <span className="more">Learn more <ArrowRight size={17} /></span>
        </div>
      </Link>
    </Reveal>
  );
}
