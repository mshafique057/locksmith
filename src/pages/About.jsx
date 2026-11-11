import React from 'react';
import { Check } from 'lucide-react';
import { IMG, PROMISES } from '../data.js';
import { PageBanner, CtaBand, Reveal, Icon, SectionHead, useTitle } from '../components/ui.jsx';

export default function About() {
  useTitle('About Us | Bradford Locksmith Pro', 'Meet Bradford Locksmith Pro: a dedicated residential locksmith for Bradford homes, with honest prices and tidy, guaranteed work.');
  return (
    <>
      <PageBanner image={IMG.window} title="About Bradford Locksmith Pro" text="A local locksmith focused entirely on the doors and windows of people's homes." crumbs={[{ label: 'About' }]} />
      <section className="section">
        <div className="wrap split">
          <Reveal className="split-img"><img src={IMG.window} alt="Locksmith repairing a window lock" loading="lazy" /></Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Our story</span>
            <h2>Built for homeowners, not for everyone</h2>
            <p>We chose to work only on residential locks. That focus means our vans are stocked for the doors and windows found in Bradford homes: uPVC and composite doors, timber doors with mortice locks and double-glazed windows.</p>
            <p>Every job begins with a clear conversation and ends with a tested lock, a tidy doorstep and a receipt you can keep for your insurer.</p>
            <ul className="ticks">
              <li><Check size={20} /> Residential only: houses, bungalows, flats and cottages</li>
              <li><Check size={20} /> Fixed price agreed before we travel</li>
              <li><Check size={20} /> Non-destructive entry wherever possible</li>
              <li><Check size={20} /> 12-month guarantee on parts and workmanship</li>
            </ul>
          </Reveal>
        </div>
      </section>
      <section className="section tint">
        <div className="wrap">
          <SectionHead eyebrow="What we stand for" title="Our commitments" />
          <div className="grid g4">
            {PROMISES.map((x, i) => (
              <Reveal key={x.title} delay={i * 0.08} className="promise">
                <div className="ic"><Icon name={x.icon} size={26} /></div>
                <h3>{x.title}</h3><p>{x.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
