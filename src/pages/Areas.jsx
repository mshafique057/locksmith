import React, { useMemo, useState } from 'react';
import { MapPin, Phone, Search, CheckCircle2, HelpCircle, Clock, Truck, ShieldCheck } from 'lucide-react';
import { ZONES, BUSINESS } from '../data.js';
import { PageBanner, CtaBand, Reveal, Icon, SectionHead, useTitle } from '../components/ui.jsx';

function lookup(q) {
  const raw = q.trim();
  if (!raw) return null;
  const out = raw.toUpperCase().match(/^(BD|LS|HX|HD)\s?(\d{1,2})/);
  const code = out ? `${out[1]}${out[2]}` : null;
  const lower = raw.toLowerCase();
  for (const z of ZONES) {
    for (const a of z.areas) {
      if ((code && a.code === code) || a.name.toLowerCase() === lower || (lower.length > 2 && a.name.toLowerCase().includes(lower))) {
        return { zone: z, area: a };
      }
    }
  }
  return { none: true };
}

export default function Areas() {
  useTitle('Areas We Cover | Home Locksmith Bradford & West Yorkshire', 'Check your postcode. Home locksmith coverage across Bradford BD1 to BD22 and nearby West Yorkshire towns.');
  const [q, setQ] = useState('');
  const res = useMemo(() => lookup(q), [q]);
  const filter = q.trim().toLowerCase();

  return (
    <>
      <PageBanner tall title="Areas we cover" text="Local vans across Bradford and the surrounding West Yorkshire towns." crumbs={[{ label: 'Areas' }]} />

      <div className="wrap">
        <div className="checker">
          <span className="eyebrow">Postcode checker</span>
          <h2>Do we cover your street?</h2>
          <p style={{ margin: 0, maxWidth: 560 }}>Type your area or postcode, for example Heaton or BD9, to see typical arrival times.</p>
          <div className="checker-form">
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Area or postcode, e.g. BD9 4AB" aria-label="Area or postcode" />
          </div>
          <div className="quick">
            <span>Try:</span>
            {['BD8', 'Baildon', 'BD13', 'Ilkley'].map((x) => (<button key={x} onClick={() => setQ(x)}>{x}</button>))}
          </div>
          {res && !res.none && (
            <div className="result yes">
              <CheckCircle2 size={30} />
              <div><b>Yes, we cover {res.area.name} ({res.area.code})</b>Typical arrival: {res.zone.time}. Call for the fastest help.</div>
              <a className="btn btn-primary btn-sm" href={BUSINESS.phoneHref}><Phone size={17} /> {BUSINESS.phone}</a>
            </div>
          )}
          {res && res.none && (
            <div className="result maybe">
              <HelpCircle size={30} />
              <div><b>Not on our list yet</b>We may still be able to help. Give us a quick call to check.</div>
              <a className="btn btn-primary btn-sm" href={BUSINESS.phoneHref}><Phone size={17} /> {BUSINESS.phone}</a>
            </div>
          )}
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Coverage zones" title="Find your part of Bradford" lead="Arrival times are typical for emergencies and depend on traffic and demand." />
          <div className="grid g2">
            {ZONES.map((z, i) => (
              <Reveal key={z.id} delay={(i % 2) * 0.1} className="zone">
                <div className="zone-head">
                  <span className="zone-ic"><Icon name={z.icon} size={26} /></span>
                  <div>
                    <h3>{z.name}</h3>
                    <span className="eta"><Clock size={14} /> Typically {z.time}</span>
                  </div>
                </div>
                <p>{z.note}</p>
                <div className="area-tags">
                  {z.areas.map((a) => {
                    const hit = filter && (`${a.name} ${a.code}`.toLowerCase().includes(filter) || (res && res.area && res.area.name === a.name));
                    return (
                      <span key={a.name} className={`tag ${hit ? 'hit' : filter ? 'dim' : ''}`}>
                        <MapPin size={15} /> {a.name} <small>{a.code}</small>
                      </span>
                    );
                  })}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap split">
          <Reveal>
            <span className="eyebrow">Local by design</span>
            <h2>Vans based around Bradford, not a distant call centre</h2>
            <p>Keeping our vans close to the homes we serve is how we reach you quickly, with the right parts already on board.</p>
            <div className="mini">
              <div><span className="ic"><Truck size={22} /></span><span><b>Stocked vans</b>Cylinders, gearboxes, handles and window locks on board.</span></div>
              <div><span className="ic"><Clock size={22} /></span><span><b>Real arrival times</b>Honest estimates when you call, updated if traffic changes.</span></div>
              <div><span className="ic"><ShieldCheck size={22} /></span><span><b>Same service everywhere</b>Fixed price and guarantee, wherever you are in our area.</span></div>
            </div>
            <a className="btn btn-dark" href={BUSINESS.phoneHref}><Phone size={18} /> Check availability</a>
          </Reveal>
          <Reveal delay={0.1} className="mapbox">
            <iframe title="Map of Bradford" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Bradford,+West+Yorkshire&output=embed" />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
