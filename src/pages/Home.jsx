import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Check, ShieldCheck, Clock, PoundSterling, BadgeCheck, ArrowRight, MapPin } from 'lucide-react';
import { BUSINESS, IMG, SERVICES, PROBLEMS, PROMISES, REVIEWS, AREAS, FAQS } from '../data.js';
import { Icon, Reveal, Counter, Stars, SectionHead, CtaBand, useTitle } from '../components/ui.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import FaqList from '../components/FaqList.jsx';
import HeroSlider from '../components/HeroSlider.jsx';

export default function Home() {
  useTitle('Bradford Locksmith Pro 24/7 | Home Locksmith in Bradford', 'Local residential locksmith in Bradford. Lockouts, lost and snapped keys, uPVC door and window lock repair and anti-snap upgrades. 24/7, fixed prices.');
  const [tab, setTab] = useState(PROBLEMS[0].id);
  const p = PROBLEMS.find((x) => x.id === tab);

  return (
    <>
      <HeroSlider />

      <section className="stats">
        <div className="wrap">
          <div className="stats-grid">
            <div className="stat"><b><Counter to={24} suffix="/7" /></b><span>Emergency cover</span></div>
            <div className="stat"><b><Counter to={30} suffix="–60" /></b><span>Minutes typical arrival</span></div>
            <div className="stat"><b><Counter to={1200} suffix="+" /></b><span>Homes helped locally</span></div>
            <div className="stat"><b><Counter to={5} decimals={1} suffix="★" /></b><span>Average customer rating</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Home locksmith services" title="Everything your doors and windows need" lead="From a midnight lockout to a planned security upgrade, we look after the locks on Bradford homes." />
          <div className="grid g3">
            {SERVICES.slice(0, 6).map((s, i) => <ServiceCard key={s.slug} s={s} i={i} />)}
          </div>
          <Reveal className="center" style={{ marginTop: 44 }}>
            <Link to="/services" className="btn btn-outline">View all services <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap split">
          <Reveal className="split-img">
            <img src={IMG.key} alt="Locksmith carefully working on a house door lock" loading="lazy" />
            <div className="badge"><b>30–60</b><span>minute typical arrival across Bradford</span></div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Why homeowners choose us</span>
            <h2>A calm, careful locksmith when you need one most</h2>
            <p>Being shut out or finding a broken lock is stressful. We keep it simple: a clear price, a straight answer on what is wrong, and tidy work that leaves your door working properly.</p>
            <ul className="ticks">
              <li><Check size={20} /> Careful, non-destructive entry wherever possible</li>
              <li><Check size={20} /> Vans stocked with cylinders, gearboxes and handles</li>
              <li><Check size={20} /> Honest advice, including when a repair beats a replacement</li>
              <li><Check size={20} /> Locks that meet insurer-recognised British Standards</li>
            </ul>
            <Link to="/about" className="btn btn-dark">About us <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Quick help" title="What is going wrong at your door?" lead="Pick the closest match for sensible first steps while you wait for us." />
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <div className="tabs" role="tablist" style={{ justifyContent: 'center' }}>
              {PROBLEMS.map((x) => (
                <button key={x.id} role="tab" aria-selected={tab === x.id} className={`tab ${tab === x.id ? 'on' : ''}`} onClick={() => setTab(x.id)}>{x.label}</button>
              ))}
            </div>
            <div className="panel" key={p.id}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <ul>{p.tips.map((t) => (<li key={t}><Check size={18} /> {t}</li>))}</ul>
              <a className="btn btn-primary" href={BUSINESS.phoneHref}><Phone size={18} /> Call us now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SectionHead eyebrow="Our promise" title="Straightforward, trustworthy, local" lead="Four things you can expect every time we come to your home." />
          <div className="grid g4">
            {PROMISES.map((x, i) => (
              <Reveal key={x.title} delay={i * 0.08} className="promise">
                <div className="ic"><Icon name={x.icon} size={26} /></div>
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="How it works" title="Three simple steps" />
          <div className="steps">
            {[
              ['Call or message', 'Tell us your postcode, the door type and what has happened. We will quote a fixed price.'],
              ['We come to you', 'A vetted local locksmith heads over with the parts to fix most problems first time.'],
              ['Fixed, tested, paid', 'We fix the issue, test every lock and key, and you pay by card or cash. Receipt included.']
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.1} className="step">
                <div className="n">0{i + 1}</div>
                <h3>{t}</h3>
                <p style={{ margin: 0 }}>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap split">
          <Reveal>
            <span className="eyebrow">Stronger locks</span>
            <h2>Upgrade your doors to insurer-friendly security</h2>
            <p>Basic cylinders on uPVC and composite doors can be snapped open. We fit TS007 3-star rated cylinders and BS3621 5-lever mortice locks, the standards most home insurers look for.</p>
            <ul className="ticks">
              <li><Check size={20} /> Anti-snap euro cylinders fitted flush</li>
              <li><Check size={20} /> 5-lever deadlocks for timber doors</li>
              <li><Check size={20} /> Reinforced keeps and hinge bolts</li>
              <li><Check size={20} /> Window locks and child restrictors</li>
            </ul>
            <Link className="btn btn-primary" to="/services/anti-snap-lock-upgrades">Anti-snap upgrades <ArrowRight size={18} /></Link>
          </Reveal>
          <Reveal className="split-img" delay={0.1}>
            <img src={IMG.cylinder} alt="Fitting a new cylinder lock on a uPVC door" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Local reviews" title="Neighbours who called us first" />
          <div className="grid g2">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={(i % 2) * 0.1} className="review">
                <Stars />
                <p>“{r.text}”</p>
                <div className="who"><span className="avatar">{r.name[0]}</span><div><b>{r.name}</b><small>{r.place}, Bradford</small></div></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead eyebrow="Where we work" title="Covering Bradford and nearby towns" lead="Local vans mean quick arrivals across the city and surrounding West Yorkshire." />
          <Reveal className="area-tags" style={{ justifyContent: 'center' }}>
            {AREAS.slice(0, 16).map((a) => (<span key={a.name} className="tag"><MapPin size={15} /> {a.name} <small>{a.code}</small></span>))}
          </Reveal>
          <Reveal className="center" style={{ marginTop: 36 }}>
            <Link to="/areas" className="btn btn-outline">See all areas <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Quick answers" title="Frequently asked questions" />
          <FaqList items={FAQS.slice(0, 5)} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
