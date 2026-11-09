import { useEffect, useState } from 'react';

type Health = {
  status: string;
  services: {
    api: string;
    postgres: string;
    whisperlive_url: string | null;
    libretranslate_url: string | null;
  };
};

export default function App() {
  const [health, setHealth] = useState<Health | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/health')
      .then((response) => {
        if (!response.ok) throw new Error('API returned an error');
        return response.json() as Promise<Health>;
      })
      .then(setHealth)
      .catch(() => setError('API is starting or unavailable.'));
  }, []);

  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Conference Companion home">
          <span className="brand-mark">C</span>
          <span>confer<span className="brand-accent">ence</span></span>
        </a>
        <span className="topbar-note">A better way to learn together</span>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="live-dot" /> YOUR CONFERENCE, IN FOCUS</p>
          <h1>Take more<br />away from<br /><em>every session.</em></h1>
          <p className="hero-description">
            Your workshops are full of ideas worth keeping. We’re building a companion
            that helps you capture, understand, and revisit them.
          </p>
          <a className="primary-button" href="#services">Explore the starter <span>↘</span></a>
        </div>
        <div className="session-card">
          <div className="card-topline"><span className="recording"><span /> SESSION PREVIEW</span><span className="duration">12:48</span></div>
          <div className="waveform" aria-hidden="true">{Array.from({ length: 48 }, (_, i) => <i key={i} style={{ height: `${15 + ((i * 37 + 11) % 38)}px` }} />)}</div>
          <div className="transcript-label">A MOMENT FROM THE SESSION <span>01:32</span></div>
          <blockquote>“The best way to make a new idea stick is to connect it to something you already know.”</blockquote>
          <div className="session-footer"><span className="speaker-avatar">JM</span><span><strong>Jordan Miller</strong><small>Designing for better learning</small></span><span className="sparkle">✳</span></div>
        </div>
        <span className="hero-index">01 — 03</span>
      </section>

      <section className="services" id="services">
        <div className="section-heading"><div><p className="eyebrow">THE STARTER STACK</p><h2>Everything connected.</h2></div><p>Five services, one local command.<br />The foundation for a smarter conference experience.</p></div>
        <div className="service-grid">
          <Service icon="◈" title="React frontend" detail="The attendee experience" tone="blue" />
          <Service icon="⌘" title="FastAPI backend" detail="The application API" tone="violet" />
          <Service icon="▤" title="PostgreSQL" detail="Reliable data storage" tone="green" />
          <Service icon="〰" title="WhisperLive" detail="Live speech transcription" tone="orange" />
          <Service icon="文" title="LibreTranslate" detail="Self-hosted translations" tone="pink" />
        </div>
        <div className="stack-status">
          <div><span className="status-orb" /><span>{error || `API ${health?.services.api ?? 'connecting'} · Database ${health?.services.postgres ?? 'connecting'}`}</span></div>
          <span className="status-detail">Local development environment</span>
        </div>
      </section>

      <footer><span>CONFERENCE COMPANION</span><span>Built for the moments that matter.</span><a href="http://localhost:8000/docs">API docs ↗</a></footer>
    </main>
  );
}

function Service({ icon, title, detail, tone }: { icon: string; title: string; detail: string; tone: string }) {
  return <article className="service-card"><span className={`service-icon ${tone}`}>{icon}</span><h3>{title}</h3><p>{detail}</p><span className="arrow">↗</span></article>;
}
