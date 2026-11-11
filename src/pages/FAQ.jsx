import React from 'react';
import { FAQS, IMG } from '../data.js';
import { PageBanner, CtaBand, useTitle } from '../components/ui.jsx';
import FaqList from '../components/FaqList.jsx';

export default function FAQ() {
  useTitle('Locksmith FAQs | Bradford Locksmith Pro', 'Answers to common questions about home lockouts, pricing, arrival times and lock upgrades in Bradford.');
  return (
    <>
      <PageBanner image={IMG.cylinder} title="Frequently asked questions" text="Straight answers about prices, arrival times and how we work." crumbs={[{ label: 'FAQ' }]} />
      <section className="section"><div className="wrap"><FaqList items={FAQS} /></div></section>
      <CtaBand />
    </>
  );
}
