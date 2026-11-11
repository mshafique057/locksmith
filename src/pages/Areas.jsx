import React, { useState } from 'react';
import { MapPin, Phone } from 'lucide-react';
import { AREAS, BUSINESS } from '../data.js';
import { PageBanner, CtaBand, Reveal, useTitle } from '../components/ui.jsx';

export default function Areas() {
  useTitle('Areas We Cover | Home Locksmith Bradford & West Yorkshire', 'Home locksmith coverage across Bradford postcodes BD1 to BD22 and nearby West Yorkshire towns.');
  const [q, setQ] = useState('');
  const list = AREAS.filter((a) => `${a.name} ${a.code}`.toLowerCase().includes(q.toLowerCase()));
  return (
    <>
      <PageBanner title="Areas we cover" text="Local vans across Bradford and the surrounding West Yorkshire towns." crumbs={[{ label: 'Areas' }]} />
      <section className="section">
        <div className="wrap">
          <Reveal className="center" style={{ marginBottom: 40 }}>
            <input className="search" placeholder="Search your area or postcode, e.g. BD9" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search areas" />
          </Reveal>
          <div className="area-tags" style={{ justifyContent: 'center' }}>
            {list.map((a) => (<span key={a.name} className="tag"><MapPin size={15} /> {a.name} <small>{a.code}</small></span>))}
            {list.length === 0 && (
              <div className="box center" style={{ maxWidth: 520 }}>
                <h3>Not on the list?</h3>
                <p>We may still cover you. Give us a quick call to check.</p>
                <a className="btn btn-primary" href={BUSINESS.phoneHref}><Phone size={18} /> {BUSINESS.phone}</a>
              </div>
            )}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
