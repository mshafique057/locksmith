import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Check, Phone, MessageCircle, ChevronRight } from 'lucide-react';
import { SERVICES, BUSINESS } from '../data.js';
import { PageBanner, CtaBand, Reveal, useTitle } from '../components/ui.jsx';
import NotFound from './NotFound.jsx';

export default function ServiceDetail() {
  const { slug } = useParams();
  const s = SERVICES.find((x) => x.slug === slug);
  useTitle(s ? `${s.title} in Bradford | Bradford Locksmith Pro` : 'Service not found', s?.short);
  if (!s) return <NotFound />;

  return (
    <>
      <PageBanner image={s.image} title={s.title} text={s.short} crumbs={[{ label: 'Services', to: '/services' }, { label: s.title }]} />
      <section className="section">
        <div className="wrap detail">
          <div>
            <Reveal className="detail-img"><img src={s.image} alt={s.title} /></Reveal>
            <Reveal>
              <h2>About this service</h2>
              <p>{s.intro}</p>
              <h3 style={{ marginTop: 34 }}>Common signs you need this</h3>
              <ul className="ticks" style={{ marginTop: 14 }}>
                {s.signs.map((t) => (<li key={t}><Check size={20} /> {t}</li>))}
              </ul>
              <h3 style={{ marginTop: 34 }}>How we handle it</h3>
              <ol className="num-steps">
                {s.steps.map((t) => (<li key={t}><span>{t}</span></li>))}
              </ol>
              <div className="note">{s.note}</div>
            </Reveal>
          </div>
          <aside className="side">
            <div className="box dark">
              <h3>Need this today?</h3>
              <p>Speak to a local locksmith and get a fixed price before we set off.</p>
              <a className="btn btn-primary" style={{ width: '100%' }} href={BUSINESS.phoneHref}><Phone size={18} /> {BUSINESS.phone}</a>
              <a className="btn btn-ghost" style={{ width: '100%', marginTop: 10 }} href={BUSINESS.whatsappHref}><MessageCircle size={18} /> WhatsApp</a>
            </div>
            <div className="box">
              <h3>Other services</h3>
              <ul className="list-lines">
                {SERVICES.filter((x) => x.slug !== s.slug).slice(0, 6).map((x) => (
                  <li key={x.slug}><ChevronRight size={16} /><Link to={`/services/${x.slug}`}>{x.title}</Link></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
