import React from 'react';
import { BadgeCheck, Clock, PoundSterling, ShieldCheck } from 'lucide-react';
import { SERVICES, IMG } from '../data.js';
import { PageBanner, CtaBand, useTitle } from '../components/ui.jsx';
import ServiceRow from '../components/ServiceRow.jsx';

export default function Services() {
  useTitle('Home Locksmith Services in Bradford | Bradford Locksmith Pro', 'Lockout entry, lost keys, snapped key removal, uPVC door and window lock repair, anti-snap upgrades and break-in repairs for Bradford homes.');
  return (
    <>
      <PageBanner image={IMG.key} title="Home locksmith services" text="Residential door and window lock help for houses, bungalows, flats and cottages across Bradford." crumbs={[{ label: 'Services' }]} />
      <section className="section">
        <div className="wrap">
          <div className="svc-intro">
            <span><Clock size={19} /> 30–60 min emergency response</span>
            <span><PoundSterling size={19} /> Fixed price before we travel</span>
            <span><BadgeCheck size={19} /> DBS checked &amp; insured</span>
            <span><ShieldCheck size={19} /> 12-month guarantee</span>
          </div>
          <div className="grid g2">
            {SERVICES.map((s, i) => <ServiceRow key={s.slug} s={s} i={i} />)}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
