import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Check } from 'lucide-react';
import { BUSINESS, SERVICES, IMG } from '../data.js';
import { PageBanner, useTitle } from '../components/ui.jsx';

export default function Contact() {
  useTitle('Contact | Bradford Locksmith Pro 24/7', 'Call, WhatsApp or request a callback from your local Bradford home locksmith.');
  const [done, setDone] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    // Demo only: connect to Formspree / EmailJS / your API before going live.
    setDone({ name: fd.get('name') });
    e.target.reset();
  };

  return (
    <>
      <PageBanner image={IMG.antisnap} title="Contact us" text="Call for emergencies. For anything else, send a message and we will get back to you." crumbs={[{ label: 'Contact' }]} />
      <section className="section">
        <div className="wrap contact">
          <div>
            <span className="eyebrow">Get in touch</span>
            <h2>We are on call, 24 hours a day</h2>
            <p>For lockouts and urgent lock failures, calling is always fastest. You will reach a local locksmith, not a call centre.</p>
            <div className="info-row"><span className="ic"><Phone size={22} /></span><div><b>Call</b><a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></div></div>
            <div className="info-row"><span className="ic"><MessageCircle size={22} /></span><div><b>WhatsApp</b><a href={BUSINESS.whatsappHref}>Message us</a></div></div>
            <div className="info-row"><span className="ic"><Mail size={22} /></span><div><b>Email</b><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></div></div>
            <div className="info-row"><span className="ic"><MapPin size={22} /></span><div><b>Coverage</b>{BUSINESS.area}</div></div>
            <div className="info-row"><span className="ic"><Clock size={22} /></span><div><b>Hours</b>{BUSINESS.hours}</div></div>
          </div>
          <div className="form">
            {done ? (
              <div className="success">
                <div className="ok"><Check size={34} /></div>
                <h3>Thanks{done.name ? `, ${done.name}` : ''}!</h3>
                <p>We have your request and will call you back shortly. If it is urgent, please phone us on {BUSINESS.phone}.</p>
                <button className="btn btn-outline" onClick={() => setDone(null)}>Send another request</button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <h3>Request a callback</h3>
                <div className="row2">
                  <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" required placeholder="Full name" /></div>
                  <div className="field"><label htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" required placeholder="07..." /></div>
                </div>
                <div className="row2">
                  <div className="field"><label htmlFor="postcode">Postcode</label><input id="postcode" name="postcode" placeholder="e.g. BD9 4AB" /></div>
                  <div className="field">
                    <label htmlFor="service">What do you need?</label>
                    <select id="service" name="service" defaultValue="">
                      <option value="" disabled>Select a service</option>
                      {SERVICES.map((s) => (<option key={s.slug}>{s.title}</option>))}
                      <option>Something else</option>
                    </select>
                  </div>
                </div>
                <div className="field"><label htmlFor="msg">Tell us a little more</label><textarea id="msg" name="msg" rows="4" placeholder="Type of door, what has happened..." /></div>
                <button className="btn btn-primary" type="submit" style={{ width: '100%' }}>Send request</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
