import React from 'react';
import { SERVICES } from '../data.js';
import { PageBanner, CtaBand, useTitle } from '../components/ui.jsx';
import ServiceCard from '../components/ServiceCard.jsx';

export default function Services() {
  useTitle('Home Locksmith Services in Bradford | Bradford Locksmith Pro', 'Lockout entry, lost keys, snapped key removal, uPVC door and window lock repair, anti-snap upgrades and break-in repairs for Bradford homes.');
  return (
    <>
      <PageBanner title="Home locksmith services" text="Residential door and window lock help for houses, bungalows, flats and cottages across Bradford." crumbs={[{ label: 'Services' }]} />
      <section className="section">
        <div className="wrap">
          <div className="grid g3">
            {SERVICES.map((s, i) => <ServiceCard key={s.slug} s={s} i={i} />)}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
