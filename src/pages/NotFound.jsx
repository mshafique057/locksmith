import React from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from '../components/ui.jsx';

export default function NotFound() {
  useTitle('Page not found | Bradford Locksmith Pro');
  return (
    <section className="section">
      <div className="wrap center">
        <span className="eyebrow">Error 404</span>
        <h1>This page has gone missing</h1>
        <p className="lead">Like a lost key, it is not where we expected. Let us point you back.</p>
        <Link className="btn btn-primary" to="/">Back to home</Link>
      </div>
    </section>
  );
}
