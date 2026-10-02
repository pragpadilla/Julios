import { type ChangeEvent, type FormEvent, type ReactNode, useEffect, useState } from 'react';
import { ErrorBoundary } from '@/components/error-boundary';
import NotFound from '@/pages/not-found';
import { ArrowDown, ArrowRight, ArrowUpRight, Flame, Leaf, Mail, MapPin, Menu, Phone, Search, Sparkles, X } from 'lucide-react';
import {
  Link,
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

function PoweredBy() {
  return (
    <p className="footer-credit">
      Powered by{' '}
      <a href="https://www.cowboynerds.com" target="_blank" rel="noreferrer">
        Cowboys Nerds
      </a>
    </p>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="site-shell">
      <div className="topline"><span className="dot" /> Family-made in Del Rio, Texas <span className="dot" /> A little crunch goes a long way</div>
      <div className="nav-wrap">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Julio's Corn Chips home">
            <img className="brand-wordmark" src={img('julios-wordmark.png')} alt="Julio’s Corn Tortilla Chips" />
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#favorites" onClick={closeMenu}>The good stuff</a>
            <a href="#story" onClick={closeMenu}>Our story</a>
            <a href="#ways" onClick={closeMenu}>Ways to enjoy</a>
            <Link href="/where-to-buy" onClick={closeMenu}>Where to buy</Link>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-recipes" href="#ways" onClick={closeMenu}>Recipes</a>
            <a className="nav-cta" href="https://julioscornchips.com/shop/ols/products" target="_blank" rel="noreferrer">Visit the shop</a>
          </div>
        </nav>
      </div>

      <main>
        <section className="hero" id="home">
          <div className="hero-inner">
            <div className="reveal">
              <div className="eyebrow">Julio’s Corn Chips · A Del Rio family favorite</div>
              <h1>Good times.<br />Great <em>crunch.</em></h1>
              <p className="hero-copy">A little Tex-Mex magic, a lot of family heart. Meet Julio’s, the Del Rio family behind the yellow bag, and the corn chips that bring everyone back to the table.</p>
              <div className="hero-actions">
                <a className="button button-dark" href="#favorites">Meet the favorites <ArrowDown size={15} /></a>
                <a className="text-link" href="#story">Get to know us <ArrowRight size={15} /></a>
              </div>
            </div>
            <div className="hero-art">
              <span className="art-tag">Del Rio<br />made with<br />family heart</span>
              <span className="art-scribble">Pass the salsa.</span>
              <img className="hero-food-photo" src={img('hero-chips-salsa.jpg')} alt="Julio’s corn tortilla chips served with red salsa" />
              <figure className="hero-photo"><img src={img('founders.jpg')} alt="Julio and Lilia Garcia cooking together" /><figcaption>Julio &amp; Lilia, where it began</figcaption></figure>
            </div>
          </div>
          <div className="hero-bottom" />
        </section>

        <div className="ticker" aria-label="Garlic, paprika, cumin and lime">
          <div className="ticker-track">
            {Array.from({ length: 4 }, (_, i) => <span key={i}>Garlic <b>✳</b> Paprika <b>✳</b> Cumin <b>✳</b> Lime <b>✳</b> Made for sharing <b>✳</b></span>)}
          </div>
        </div>

        <section className="section products" id="favorites">
          <div className="section-inner">
            <div className="products-heading">
              <div><div className="section-kicker">A little something for the table</div><h2 className="section-heading">The Julio’s trio.</h2><p className="section-lead">Three ways to bring a little more sabor to snack time, supper, and everything in between.</p></div>
              <a className="text-link" href="https://julioscornchips.com/shop/ols/products" target="_blank" rel="noreferrer">Visit the shop</a>
            </div>
            <div className="product-grid">
              <a className="product-card chips has-photo" href="https://julioscornchips.com/shop/ols/products" target="_blank" rel="noreferrer" aria-label="Explore Julio's Tex-Mex seasoned corn chips">
                <img className="product-photo" src={img('tex-mex-chips.jpg')} alt="" />
                <span className="product-number">01 / The original</span>
                <span className="product-words">The one that started it all</span>
                <div className="copy"><h3>Tex-Mex<br />corn chips</h3><p>Garlic, paprika, cumin &amp; lime. A bold little crunch with roots in Del Rio.</p></div>
                <span className="round-arrow"><ArrowUpRight /></span>
              </a>
              <a className="product-card salsa has-photo" href="https://julioscornchips.com/shop/ols/products" target="_blank" rel="noreferrer" aria-label="Explore Julio's hot and mild salsa">
                <img className="product-photo" src={img('salsa-jars.jpg')} alt="" />
                <span className="product-number">02 / The dip</span>
                <div className="copy"><h3>Salsa, hot<br />or mild</h3><p>Find your pace. Keep the chips close.</p></div>
                <span className="round-arrow"><ArrowUpRight /></span>
              </a>
              <a className="product-card seasoning has-photo" href="https://julioscornchips.com/shop/ols/products" target="_blank" rel="noreferrer" aria-label="Explore Julio's seasoning">
                <img className="product-photo" src={img('seasoning-jar.jpg')} alt="" />
                <span className="product-number">03 / The finishing touch</span>
                <div className="copy"><h3>Julio’s<br />seasoning</h3><p>That familiar flavor, ready for another round.</p></div>
                <span className="round-arrow"><ArrowUpRight /></span>
              </a>
            </div>
          </div>
        </section>

        <section className="section story" id="story">
          <div className="section-inner story-grid">
            <div className="story-art">
              <span className="story-stamp">From our family garage · Del Rio</span>
              <GarageIllustration />
            </div>
            <div>
              <div className="section-kicker">A story with a little color</div>
              <h2 className="section-heading">It started with a chef, a family &amp; a very yellow garage.</h2>
              <p className="story-copy">Julio T. Garcia was a chef known for his seasoning. At home in Del Rio, Julio and his wife Lilia turned their love of cooking and catering into something they could share: seasoned corn chips and salsa, made with the whole family pitching in.</p>
              <p className="story-copy">Their son Miguel painted the family garage bright yellow, with red and green trim. Those colors stuck. So did the idea that good food is always better when there’s enough to pass around.</p>
              <a className="text-link" href="https://julioscornchips.com/about-us/" target="_blank" rel="noreferrer">Read more of our story <ArrowUpRight /></a>
              <div className="story-footnote"><strong>Del Rio, TX</strong><span>A family recipe first shared around the kitchen table.</span></div>
            </div>
          </div>
        </section>

        <section className="section family" id="family">
          <div className="section-inner family-grid">
            <div className="family-photos">
              <figure className="family-main"><img src={img('family-tribute.jpg')} alt="The Julio’s family holding a tribute blanket honoring Julio and Lilia" /><figcaption>The family honoring their parents</figcaption></figure>
              <figure className="family-small"><img src={img('founders.jpg')} alt="Julio and Lilia cooking together" /><figcaption>Julio &amp; Lilia</figcaption></figure>
              <figure className="family-hist"><img src={img('family-history.jpg')} alt="Historical collage of the Julio’s founders" width="160" /></figure>
            </div>
            <div>
              <img className="family-wordmark" src={img('julios-wordmark.png')} alt="Julio’s Corn Tortilla Chips" />
              <div className="section-kicker">Family supports family</div>
              <h2 className="section-heading">Proud of Julio and Lilia. Every bag.</h2>
              <p className="story-copy">At the heart of Julio’s is a family that supports one another, takes pride in their parents, and carries the Julio’s name forward together.</p>
              <p className="story-copy">Every yellow bag is a thank-you to Julio and Lilia for the seasoning, the kitchen, and the example they set.</p>
            </div>
          </div>
          <div className="section-inner family-band"><img src={img('products.jpg')} alt="Julio’s yellow bags of corn tortilla chips with salsa and a festive food spread" /></div>
        </section>

        <section className="section ritual" id="ways">
          <div className="section-inner">
            <div className="ritual-head"><div className="section-kicker">Make a moment of it</div><h2 className="section-heading">One bag. Many good ideas.</h2><p className="section-lead">A few easy ways to bring the crunch to your kind of gathering.</p></div>
            <div className="ritual-grid">
              <article className="ritual-item"><span className="ritual-index">01 — The easy one</span><span className="ritual-mark"><Sparkles /></span><h3>Open. Pour. Gather.</h3><p>Tip a bowl onto the table, set out salsa, and let the conversation take it from there.</p></article>
              <article className="ritual-item"><span className="ritual-index">02 — The share plate</span><span className="ritual-mark"><Leaf /></span><h3>Give nachos a twist.</h3><p>Layer chips with your favorite toppings for a casual plate built for passing around.</p></article>
              <article className="ritual-item"><span className="ritual-index">03 — The little kick</span><span className="ritual-mark"><Flame /></span><h3>Pick your heat.</h3><p>Hot or mild salsa? Put both on the table and let everyone find their own happy place.</p></article>
            </div>
          </div>
        </section>

        <section className="section order">
          <div className="section-inner order-inner">
            <div><div className="section-kicker">Have a question? We’re family.</div><h2 className="section-heading">Let’s make your next snack a good one.</h2><p className="section-lead">Looking for a special order or wondering where to find Julio’s? Reach out and we’ll help you figure out the next step.</p></div>
            <aside className="order-aside"><div className="mini-label">A note about online orders</div><h3>Bulky bags can mean bigger shipping costs.</h3><p>Shipping is calculated by carriers using dimensional weight. For special orders, contact us directly and we’ll be glad to talk it through.</p><a className="button button-dark" href="mailto:sqfpractitioner@julioscornchips.com?subject=Julio%27s%20special%20order">Ask about an order <ArrowRight /></a></aside>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="section-inner contact-layout">
            <div><div className="section-kicker">We’d love to hear from you</div><h2 className="contact-heading">Questions?<br />Let’s talk.</h2><p className="contact-note">Special requests, where-to-buy questions, or just want to say hello? Get in touch with the Julio’s family.</p>
              <div className="location-card">
                <img className="location-photo" src={img('del-rio-river.jpg')} alt="A tree-lined river with a footbridge and small waterfalls" loading="lazy" width="1800" height="1011" />
                <div className="location-note"><MapPin size={20} /><p><strong>Rooted in Del Rio, Texas</strong>Our story begins here. <Link href="/where-to-buy">See how to ask about Julio’s near you.</Link></p></div>
              </div>
            </div>
            <div>
              <a className="contact-detail" href="tel:18443518805"><span>Give us a call<strong>1-844-351-8805</strong></span><Phone /></a>
              <a className="contact-detail" href="mailto:sqfpractitioner@julioscornchips.com"><span>Send us a note<strong>sqfpractitioner@julioscornchips.com</strong></span><Mail /></a>
              <Link className="contact-detail" href="/contact"><span>Need another way?<strong>Visit our contact page</strong></span><ArrowRight /></Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-inner">
          <a className="brand" href="#home"><img className="brand-wordmark" src={img('julios-wordmark.png')} alt="Julio’s Corn Tortilla Chips" /></a>
          <span className="footer-note">Family flavor since the very beginning.</span>
          <div className="footer-links"><a href="#favorites">The good stuff</a><a href="#story">Our story</a><Link href="/where-to-buy">Where to buy</Link><a href="#contact">Contact</a><a href="https://julioscornchips.com/shop/ols/products" target="_blank" rel="noreferrer">Shop <ArrowUpRight size={12} /></a></div>
        </div>
        <PoweredBy />
      </footer>
    </div>
  );
}

function WhereToBuy() {
  const [location, setLocation] = useState('');
  const [preparedLocation, setPreparedLocation] = useState('');
  const email = 'sqfpractitioner@julioscornchips.com';
  const subject = encodeURIComponent('Where can I find Julio’s Corn Chips?');
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = 'Where to Buy | Julio’s Corn Chips';
    if (description) {
      description.content = 'Ask the Julio’s family where to find corn chips near you. Contact details and the official online shop are here.';
    }

    return () => {
      document.title = previousTitle;
      if (description && previousDescription !== undefined) {
        description.content = previousDescription;
      }
    };
  }, []);
  const bodyFor = (place: string) => encodeURIComponent(
    `Hello Julio’s family,\n\nCould you please let me know if Julio’s Corn Chips are available near ${place}?\n\nThank you!`,
  );

  function prepareInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleaned = location.trim();
    if (cleaned) setPreparedLocation(cleaned);
  }

  const inquiryHref = preparedLocation
    ? `mailto:${email}?subject=${subject}&body=${bodyFor(preparedLocation)}`
    : `mailto:${email}?subject=${subject}`;

  return (
    <div className="site-shell">
      <div className="topline"><span className="dot" /> Family-made in Del Rio, Texas <span className="dot" /> A little crunch goes a long way</div>
      <div className="nav-wrap">
        <nav className="nav" aria-label="Main navigation">
          <Link className="brand" href="/" aria-label="Julio's Corn Chips home">
            <img className="brand-mark" src={img('bag-mark.png')} alt="" />
            <span className="brand-name">Julio’s<small>Corn Chips · Del Rio, TX</small></span>
          </Link>
          <Link className="back-home" href="/">Back to the table <ArrowRight size={15} /></Link>
        </nav>
      </div>
      <main className="where-page">
        <section className="where-hero">
          <img className="where-shelf" src={img('where-shelf.jpg')} alt="Julio’s Original corn tortilla chips lined up on a shop shelf" />
          <div className="where-hero-inner">
            <div className="where-copy">
              <div className="eyebrow">A little closer to home</div>
              <h1>Find your<br /><em>crunch.</em></h1>
              <p>Wondering where Julio’s is sold? Tell us your city or ZIP and we’ll help you ask the right question.</p>
            </div>
          </div>
        </section>
        <section className="where-content" aria-labelledby="availability-heading">
          <div className="where-content-inner">
            <div className="availability-card">
              <div className="availability-label"><span className="availability-dot" /> Current availability</div>
              <h2 id="availability-heading">No verified retailer locations are published right now.</h2>
              <p>We don’t have a confirmed store list to search. We’d rather be straight with you than send you somewhere on a guess.</p>
              <div className="availability-rule"><span>Here’s how we can help</span></div>
              <form className="location-form" onSubmit={prepareInquiry}>
                <label htmlFor="shop-location">Your city or ZIP code</label>
                <div className="location-input-row">
                  <div className="location-input-wrap"><MapPin size={18} aria-hidden="true" /><input id="shop-location" name="location" type="text" autoComplete="postal-code" maxLength={100} required placeholder="For example, Del Rio or 78840" value={location} onChange={(event) => { setLocation(event.target.value); setPreparedLocation(''); }} /></div>
                  <button className="button button-dark" type="submit"><Search size={16} /> Prepare an inquiry</button>
                </div>
                <p className="form-note">Your location is used only to prepare an email inquiry. It does not search a retailer database.</p>
                {preparedLocation && (
                  <div className="prepared-inquiry" role="status">
                    <div><strong>Ready to ask about {preparedLocation}</strong><span>Your email will include this location so our family can point you in the right direction.</span></div>
                    <a className="button button-dark" href={inquiryHref}>Email the Julio’s family <ArrowUpRight size={15} /></a>
                  </div>
                )}
              </form>
            </div>
            <aside className="where-aside">
              <span className="aside-index">01 / Go straight to the source</span>
              <h3>Want Julio’s today?</h3>
              <p>Shop directly from the official Julio’s online store.</p>
              <a className="button button-red" href="https://julioscornchips.com/shop/ols/products" target="_blank" rel="noreferrer">Visit the official shop <ArrowUpRight size={16} /></a>
              <div className="aside-contact">
                <span>Rather talk it through?</span>
                <a href="tel:18443518805"><Phone size={17} /> 1-844-351-8805</a>
                <a href={inquiryHref}><Mail size={17} /> Email Julio’s</a>
              </div>
            </aside>
          </div>
        </section>
        <section className="where-footnote">
          <div><span className="section-kicker">A note from our family</span><p>Retail availability can change. We’ll share confirmed locations here when we have them.</p></div>
          <Link className="text-link" href="/">Back to Julio’s <ArrowRight size={15} /></Link>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-inner">
          <Link className="brand" href="/"><img className="brand-mark" src={img('bag-mark.png')} alt="" /><span className="brand-name">Julio’s<small>Corn Chips · Del Rio, TX</small></span></Link>
          <span className="footer-note">Family flavor since the very beginning.</span>
          <div className="footer-links"><Link href="/">Home</Link><a href="tel:18443518805">Call us</a><a href="mailto:sqfpractitioner@julioscornchips.com">Email</a><a href="https://julioscornchips.com/shop/ols/products" target="_blank" rel="noreferrer">Shop <ArrowUpRight size={12} /></a></div>
        </div>
        <PoweredBy />
      </footer>
    </div>
  );
}

function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    phone: '',
    email: '',
    contactBy: '',
    reason: '',
  });
  const [ready, setReady] = useState(false);

  function update(field: keyof typeof form) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
      setReady(false);
    };
  }

  function sendNote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = `${form.firstName.trim()} ${form.lastName.trim()}`;
    const body = [
      `Name: ${name}`,
      `Address: ${form.address.trim()}`,
      `City: ${form.city.trim()}`,
      `State: ${form.state.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Email: ${form.email.trim()}`,
      `Form of contact: ${form.contactBy}`,
      '',
      'Reason for contact:',
      form.reason.trim(),
    ].join('\n');
    const subject = encodeURIComponent(`Julio’s note from ${name}`);
    window.location.href = `mailto:sqfpractitioner@julioscornchips.com?subject=${subject}&body=${encodeURIComponent(body)}`;
    setReady(true);
  }

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = 'Contact Us | Julio’s Corn Chips';
    if (description) {
      description.content = 'Get in touch with Julio’s Corn Chips. Call 1-844-351-8805 or email sqfpractitioner@julioscornchips.com with questions or special requests.';
    }

    return () => {
      document.title = previousTitle;
      if (description && previousDescription !== undefined) {
        description.content = previousDescription;
      }
    };
  }, []);

  return (
    <div className="site-shell">
      <div className="topline"><span className="dot" /> Family-made in Del Rio, Texas <span className="dot" /> A little crunch goes a long way</div>
      <div className="nav-wrap">
        <nav className="nav" aria-label="Main navigation">
          <Link className="brand" href="/" aria-label="Julio's Corn Chips home">
            <img className="brand-mark" src={img('bag-mark.png')} alt="" />
            <span className="brand-name">Julio’s<small>Corn Chips · Del Rio, TX</small></span>
          </Link>
          <Link className="back-home" href="/">Back to the table <ArrowRight size={15} /></Link>
        </nav>
      </div>
      <main className="where-page">
        <section className="where-hero">
          <img className="where-shelf" src={img('del-rio-river.jpg')} alt="A tree-lined river with a footbridge and small waterfalls in Del Rio" />
          <div className="where-hero-inner">
            <div className="where-copy">
              <div className="eyebrow">Contact us</div>
              <h1>Get in<br /><em>touch.</em></h1>
              <p>We love to hear from our customers. Feel free to contact us with any questions or special requests.</p>
            </div>
          </div>
        </section>
        <section className="where-content" aria-labelledby="contact-heading">
          <div className="where-content-inner">
            <div className="availability-card">
              <div className="availability-label"><span className="availability-dot" /> The Julio’s family</div>
              <h2 id="contact-heading">Questions, special requests, or a hello are all welcome.</h2>
              <p>Tell us a little about yourself and why you’re writing. Sending opens an email to the Julio’s family with your note ready to go.</p>
              <div className="availability-rule"><span>Your note</span></div>
              <form className="contact-form" onSubmit={sendNote}>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="first-name">First name</label>
                    <input id="first-name" name="firstName" autoComplete="given-name" required maxLength={80} value={form.firstName} onChange={update('firstName')} />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="last-name">Last name</label>
                    <input id="last-name" name="lastName" autoComplete="family-name" required maxLength={80} value={form.lastName} onChange={update('lastName')} />
                  </div>
                </div>
                <div className="contact-field">
                  <label htmlFor="address">Address</label>
                  <input id="address" name="address" autoComplete="street-address" required maxLength={160} value={form.address} onChange={update('address')} />
                </div>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="city">City</label>
                    <input id="city" name="city" autoComplete="address-level2" required maxLength={80} value={form.city} onChange={update('city')} />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="state">State</label>
                    <input id="state" name="state" autoComplete="address-level1" required maxLength={40} value={form.state} onChange={update('state')} />
                  </div>
                </div>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" required maxLength={30} value={form.phone} onChange={update('phone')} />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" autoComplete="email" required maxLength={120} value={form.email} onChange={update('email')} />
                  </div>
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-by">Form of contact</label>
                  <select id="contact-by" name="contactBy" required value={form.contactBy} onChange={update('contactBy')}>
                    <option value="" disabled>Choose one</option>
                    <option>Phone</option>
                    <option>Email</option>
                  </select>
                </div>
                <div className="contact-field">
                  <label htmlFor="reason">Reason for contact</label>
                  <textarea id="reason" name="reason" required maxLength={2000} rows={5} value={form.reason} onChange={update('reason')} />
                </div>
                <button className="button button-dark" type="submit">Send</button>
                {ready && (
                  <p className="form-note" role="status">Your email app should open with this note addressed to the Julio’s family. Send it from there and they’ll get it.</p>
                )}
              </form>
              <div className="availability-rule"><span>Or reach us directly</span></div>
              <a className="contact-detail" href="tel:18443518805"><span>Give us a call<strong>1-844-351-8805</strong></span><Phone /></a>
              <a className="contact-detail" href="mailto:sqfpractitioner@julioscornchips.com"><span>Send us a note<strong>sqfpractitioner@julioscornchips.com</strong></span><Mail /></a>
            </div>
            <aside className="where-aside">
              <span className="aside-index">Also on the official site</span>
              <h3>Looking for a bag nearby?</h3>
              <p>Ask where Julio’s is sold, or go straight to the online shop.</p>
              <Link className="button button-red" href="/where-to-buy">Where to buy <ArrowRight size={16} /></Link>
              <div className="aside-contact">
                <span>A little more</span>
                <a href="https://julioscornchips.com/shop/ols/products" target="_blank" rel="noreferrer">Visit the shop</a>
                <a href="https://julioscornchips.com/privacy-policy" target="_blank" rel="noreferrer"><ArrowUpRight size={17} /> Privacy policy</a>
              </div>
            </aside>
          </div>
        </section>
        <section className="where-footnote">
          <div><span className="section-kicker">Julio’s Corn Chips</span><p>Copyright © 2025 Julios Corn Chips — All Rights Reserved.</p></div>
          <Link className="text-link" href="/">Back to Julio’s <ArrowRight size={15} /></Link>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-inner">
          <Link className="brand" href="/"><img className="brand-mark" src={img('bag-mark.png')} alt="" /><span className="brand-name">Julio’s<small>Corn Chips · Del Rio, TX</small></span></Link>
          <span className="footer-note">Family flavor since the very beginning.</span>
          <div className="footer-links"><Link href="/">Home</Link><Link href="/where-to-buy">Where to buy</Link><a href="tel:18443518805">Call us</a><a href="mailto:sqfpractitioner@julioscornchips.com">Email</a><a href="https://julioscornchips.com/shop/ols/products" target="_blank" rel="noreferrer">Shop <ArrowUpRight size={12} /></a></div>
        </div>
        <PoweredBy />
      </footer>
    </div>
  );
}

function GarageIllustration() {
  return <svg className="garage-illustration" viewBox="0 0 440 350" fill="none" aria-hidden="true">
    <path d="M41 283h357" stroke="#38231c" strokeWidth="3"/>
    <path d="m82 165 135-91 139 91v116H82V165Z" fill="#fff0bc" stroke="#38231c" strokeWidth="4"/>
    <path d="m56 168 161-111 164 111-14 18L217 80 69 185l-13-17Z" fill="#a6402d" stroke="#38231c" strokeWidth="4" strokeLinejoin="round"/>
    <path d="M116 183h82v106h-82z" fill="#edc948" stroke="#38231c" strokeWidth="3"/>
    <path d="M129 199h56v66h-56z" fill="#f5f0d8" stroke="#38231c" strokeWidth="2"/>
    <path d="M157 200v65m-27-33h55" stroke="#48623a" strokeWidth="2"/>
    <path d="M225 193h82v96h-82z" fill="#e6b94a" stroke="#38231c" strokeWidth="3"/>
    <path d="M238 208h55v81h-55z" fill="#48623a" stroke="#38231c" strokeWidth="2"/>
    <path d="M265 209v78m-25-40h51" stroke="#f5f0d8" strokeWidth="2"/>
    <path d="M322 193h27v96h-27z" fill="#edc948" stroke="#38231c" strokeWidth="3"/>
    <path d="M337 240h3" stroke="#38231c" strokeWidth="4" strokeLinecap="round"/>
    <path d="M91 290v-12m16 12v-12m224 12v-12m16 12v-12" stroke="#48623a" strokeWidth="4" strokeLinecap="round"/>
    <path d="M89 152h252" stroke="#48623a" strokeWidth="7"/>
    <path d="M157 107h120" stroke="#38231c" strokeWidth="2" strokeDasharray="3 6"/>
    <path d="M153 124c20-12 55-12 76 0" stroke="#a6402d" strokeWidth="3" strokeLinecap="round"/>
    <path d="M98 77V46m0 0-11 13m11-13 11 13M338 91V60m0 0-11 13m11-13 11 13" stroke="#48623a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M54 310c26-13 55-13 82 0m165 0c23-11 51-11 74 0" stroke="#38231c" strokeWidth="2" strokeLinecap="round"/>
  </svg>;
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/where-to-buy" component={WhereToBuy} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Router />
    </WouterRouter>
  );
}

export default App;
