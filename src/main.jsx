import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Brain,
  ShieldCheck,
  BookOpen,
  Cpu,
  Star,
  Trophy,
  Target,
  Globe2,
  Users,
  Mail,
  Send,
  PlayCircle,
} from 'lucide-react';
import logo from './assets/ust-logo.png';
import './style.css';

const metrics = [
  ['Overall PNL', '+$308.82', 'green'],
  ['Win Rate', '76.24%', 'gold'],
  ['Best Market', 'Gold', 'gold'],
  ['Total Trades', '42', 'white'],
  ['Profit Factor', '2.31', 'white'],
  ['Risk Status', 'Controlled', 'green'],
];

const ecosystem = [
  { icon: Cpu, title: 'UST EA', text: 'Automated execution built around structure, discipline, and controlled risk.' },
  { icon: BookOpen, title: 'UST Journal', text: 'Trading control center for tracking performance, behaviour, and account growth.' },
  { icon: BarChart3, title: 'Battle Board', text: 'Market comparison dashboard that identifies the best performing markets.' },
  { icon: ShieldCheck, title: 'Risk Engine', text: 'Advanced risk management to protect capital and encourage consistency.' },
  { icon: Brain, title: 'AI Coach', text: 'AI-powered insights that guide decisions, improve execution, and sharpen discipline.' },
  { icon: Globe2, title: 'Market Intel', text: 'High quality market intelligence for better context, timing, and decision making.' },
];

const rows = [
  ['XAUUSD (Gold)', '+$186.24', '+$308.82', '78.41%', '19', 'Top Performer'],
  ['US30 (Dow)', '+$72.11', '+$121.43', '71.23%', '13', 'Strong'],
  ['NAS100', '+$31.08', '+$54.19', '66.67%', '12', 'Good'],
  ['GBPUSD', '-$12.45', '-$21.34', '42.86%', '7', 'Weak'],
  ['EURUSD', '-$18.77', '-$33.12', '38.46%', '10', 'Weak'],
];

const products = [
  { icon: Trophy, name: 'UST Education', description: 'Structured learning for traders at every level.' },
  { icon: ShieldCheck, name: 'UST Automated Accounts', description: 'Professionally managed accounts built on the UST way.' },
  { icon: BookOpen, name: 'UST Journal Access', description: 'Web-based journal access with advanced analytics.' },
  { icon: Users, name: 'UST Community', description: 'A community of disciplined traders growing together.' },
  { icon: Star, name: 'UST Certification', description: 'Prove your discipline. Earn your badge.' },
];

function App() {
  return (
    <div className="page">
      <div className="ambientGlow" />
      <div className="marketLines" />

      <header className="header">
        <div className="container navWrap">
          <a href="#top" className="brand">
            <img src={logo} alt="UST Ultimate Scalper Tool logo" className="brandLogo" />
            <div>
              <p className="brandTitle">UST Ecosystem</p>
              <p className="brandSub">Disciplined Trading Infrastructure</p>
            </div>
          </a>

          <nav className="navLinks">
            <a href="#about">About</a>
            <a href="#ecosystem">Ecosystem</a>
            <a href="#battle-board">Battle Board</a>
            <a href="#products">Products</a>
            <a href="#join">Join</a>
          </nav>

          <a href="#join" className="topButton">Join Waiting List <ArrowRight size={16} /></a>
        </div>
      </header>

      <main id="top">
        <section className="container hero">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="heroCopy"
          >
            <div className="pill"><Star size={14} /> Built for structured trading growth</div>

            <h1>Trading Is Not Entries. <span>It Is An Ecosystem.</span></h1>

            <p className="heroText">
              UST Ecosystem is building structured trading infrastructure focused on discipline,
              risk intelligence, automation, and transparency.
            </p>

            <div className="buttonRow">
              <a className="btnLink" href="#battle-board">View Battle Board <ArrowRight size={16} /></a>
              <a className="btnLink outline" href="#ecosystem">Explore Ecosystem</a>
            </div>

            <div className="trustRow">
              <div><Star size={20} /><span><strong>Discipline</strong><small>At the Core</small></span></div>
              <div><ShieldCheck size={20} /><span><strong>Risk</strong><small>Controlled</small></span></div>
              <div><BarChart3 size={20} /><span><strong>Data</strong><small>Driven</small></span></div>
              <div><Target size={20} /><span><strong>Results</strong><small>Focused</small></span></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="dashboardCard"
          >
            <div className="dashTop">
              <div>
                <p className="dashLabel">UST Battle Board</p>
                <h3>Live Performance Intelligence</h3>
              </div>
              <span className="liveDot">Live Tracking</span>
            </div>

            <div className="metricsGrid">
              {metrics.map(([label, value, tone]) => (
                <div className="metric" key={label}>
                  <p>{label}</p>
                  <strong className={tone}>{value}</strong>
                </div>
              ))}
            </div>

            <div className="chartBox">
              <div className="chartHeader"><strong>Equity Curve</strong><span>+16.47%</span></div>
              <svg viewBox="0 0 520 150" className="chart" aria-label="Equity curve">
                <defs>
                  <linearGradient id="areaGold" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#facc15" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#facc15" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 118 L20 109 L38 116 L57 92 L76 83 L95 62 L114 76 L133 72 L152 88 L171 84 L190 57 L209 47 L228 60 L247 55 L266 77 L285 52 L304 48 L323 34 L342 38 L361 26 L380 30 L399 22 L418 28 L437 26 L456 36 L475 32 L494 19 L520 8 L520 150 L0 150 Z" fill="url(#areaGold)" />
                <path d="M0 118 L20 109 L38 116 L57 92 L76 83 L95 62 L114 76 L133 72 L152 88 L171 84 L190 57 L209 47 L228 60 L247 55 L266 77 L285 52 L304 48 L323 34 L342 38 L361 26 L380 30 L399 22 L418 28 L437 26 L456 36 L475 32 L494 19 L520 8" fill="none" stroke="#facc15" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="dashFooter">
              <small>Last Updated: May 24, 2025 - 10:45 AM</small>
              <a href="#battle-board">View Full Battle Board <ArrowRight size={14} /></a>
            </div>
          </motion.div>
        </section>

        <section id="about" className="container introSection">
          <p className="label">About UST</p>
          <h2>Built to remove emotion from trading.</h2>
          <p>
            UST was created from a simple realisation: trading is not only about knowing where to enter.
            Real trading requires structure, discipline, risk control, tracking, and continuous improvement.
          </p>
        </section>

        <section id="ecosystem" className="container section">
          <div className="sectionIntro">
            <p className="label">The Ecosystem</p>
            <h2>One System. Multiple Layers Of Control.</h2>
            <p>Each UST component has a clear role. Together, they create a disciplined trading operating system.</p>
          </div>

          <div className="ecosystemGrid">
            {ecosystem.map((item) => {
              const Icon = item.icon;
              return (
                <div className="ecoCard" key={item.title}>
                  <div className="iconRing"><Icon size={26} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="battle-board" className="container battleSection">
          <div className="battleCopy">
            <p className="label">Battle Board</p>
            <h2>Transparency Builds Trust. Data Drives Decisions.</h2>
            <div className="shortLine" />
            <p>
              Our Battle Board brings full transparency to performance. Track, compare and analyze markets to focus only on what works.
            </p>
            <a href="#join" className="btnLink outline wide">View Full Battle Board <ArrowRight size={16} /></a>
          </div>

          <div className="tableCard">
            <h3>UST Battle Board - Market Performance</h3>
            <div className="marketTable">
              <div className="tableHead"><span>Market</span><span>Daily PNL</span><span>Weekly PNL</span><span>Win Rate</span><span>Trades</span><span>Status</span></div>
              {rows.map((row) => (
                <div className="tableRow" key={row[0]}>
                  {row.map((cell, index) => (
                    <span key={index} className={cell.includes('+') ? 'positive' : cell.includes('-') ? 'negative' : cell === 'Top Performer' || cell === 'Strong' || cell === 'Good' ? 'status' : cell === 'Weak' ? 'status weak' : ''}>{cell}</span>
                  ))}
                </div>
              ))}
            </div>
            <a href="#join" className="miniBtn">View Full Battle Board <ArrowRight size={14} /></a>
          </div>
        </section>

        <section id="products" className="container section productsSection">
          <div className="sectionIntro">
            <p className="label">The Future</p>
            <h2>Built Today. Expanding Tomorrow.</h2>
            <p>UST Ecosystem is continuously evolving to give traders the tools, education and infrastructure they need to grow with discipline.</p>
          </div>

          <div className="productGrid">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div className="productCard" key={product.name}>
                  <div className="smallIcon"><Icon size={20} /></div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <strong>Coming Soon</strong>
                </div>
              );
            })}
          </div>
        </section>

        <section id="join" className="container joinPanel">
          <img src={logo} alt="UST logo" />
          <div>
            <h2>Be Part Of The UST Ecosystem</h2>
            <p>Join the waiting list and be the first to know about updates, launches and early access opportunities.</p>
          </div>
          <form className="joinForm" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" />
            <button>Join Waiting List <ArrowRight size={16} /></button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerWrap">
          <div>
            <strong>UST Ecosystem</strong>
            <p>Trading Is Not Entries. It Is An Ecosystem.</p>
          </div>
          <p>© 2026 UST Ecosystem. All rights reserved.</p>
          <div className="socials">
            <span>Connect With Us</span>
            <a href="#join"><Send size={17} /></a>
            <a href="#join"><Mail size={17} /></a>
            <a href="#join"><PlayCircle size={17} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
