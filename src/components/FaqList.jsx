import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqList({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {items.map((f, i) => (
        <div key={f.q} className={`faq-item ${open === i ? 'open' : ''}`}>
          <button className="faq-q" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            {f.q}<ChevronDown size={22} />
          </button>
          <div className="faq-a"><div><p>{f.a}</p></div></div>
        </div>
      ))}
    </div>
  );
}
