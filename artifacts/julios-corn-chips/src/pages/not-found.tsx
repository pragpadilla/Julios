import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="status-page">
      <div className="status-card">
        <div className="section-kicker">404</div>
        <h1>That page isn’t here.</h1>
        <p>The link may be old, or the page was never added.</p>
        <Link className="button button-dark" href="/">
          Back to Julio’s
        </Link>
      </div>
    </div>
  );
}
