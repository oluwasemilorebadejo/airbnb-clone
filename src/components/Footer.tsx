import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-title">Support</h3>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  AirCover
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Anti-discrimination
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Disability support
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Cancellation options
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Report neighborhood concern
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Hosting</h3>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  Airbnb your home
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Airbnb your experience
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Airbnb your service
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  AirCover for Hosts
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Hosting resources
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Community forum
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Hosting responsibly
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Join a free Hosting class
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Airbnb</h3>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  2025 Summer Release
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Investors
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Gift cards
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Airbnb.org emergency stays
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>© 2025 Airbnb, Inc.</span>
            <span className="separator">·</span>
            <a href="#" className="footer-link">
              Terms
            </a>
            <span className="separator">·</span>
            <a href="#" className="footer-link">
              Sitemap
            </a>
            <span className="separator">·</span>
            <a href="#" className="footer-link">
              Privacy
            </a>
            <span className="separator">·</span>
            <a href="#" className="footer-link">
              Your Privacy Choices
            </a>
          </div>

          <div className="footer-bottom-right">
            <div className="language-currency">
              <button className="language-button">🌐 English (US)</button>
              <button className="currency-button">$ USD</button>
            </div>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <svg
                  viewBox="0 0 32 32"
                  style={{
                    display: "block",
                    height: "18px",
                    width: "18px",
                    fill: "currentColor",
                  }}
                >
                  <path d="M30 0H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h15V20h-4v-5h4v-4c0-4.1 2.6-6.2 6.3-6.2 1.8 0 3.3.1 3.7.2v4.3h-2.6c-2 0-2.5 1-2.5 2.4V15h5l-1 5h-4v12h7c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"></path>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <svg
                  viewBox="0 0 32 32"
                  style={{
                    display: "block",
                    height: "18px",
                    width: "18px",
                    fill: "currentColor",
                  }}
                >
                  <path d="M32 6.1c-1.2.5-2.4.9-3.8 1 1.4-.8 2.4-2.1 2.9-3.6-1.3.8-2.7 1.3-4.2 1.6C25.7 3.8 24 3 22.2 3c-3.6 0-6.6 2.9-6.6 6.6 0 .5.1 1 .2 1.5-5.5-.3-10.3-2.9-13.6-6.9-.6 1-.9 2.1-.9 3.3 0 2.3 1.2 4.3 2.9 5.5-1.1 0-2.1-.3-3-.8v.1c0 3.2 2.3 5.8 5.3 6.4-.6.1-1.1.2-1.7.2-.4 0-.8 0-1.2-.1.8 2.6 3.3 4.5 6.1 4.6-2.2 1.8-5.1 2.8-8.2 2.8-.5 0-1.1 0-1.6-.1 3 1.8 6.5 2.9 10.2 2.9 12.1 0 18.7-10 18.7-18.7v-.8c1.2-1 2.3-2.2 3.2-3.5z"></path>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg
                  viewBox="0 0 32 32"
                  style={{
                    display: "block",
                    height: "18px",
                    width: "18px",
                    fill: "currentColor",
                  }}
                >
                  <path d="M16 2.9c4.3 0 4.8 0 6.5.1 1.6.1 2.4.3 3 .5.7.3 1.3.6 1.8 1.1.5.5.8 1.1 1.1 1.8.2.6.4 1.4.5 3 .1 1.7.1 2.2.1 6.5s0 4.8-.1 6.5c-.1 1.6-.3 2.4-.5 3-.3.7-.6 1.3-1.1 1.8-.5.5-1.1.8-1.8 1.1-.6.2-1.4.4-3 .5-1.7.1-2.2.1-6.5.1s-4.8 0-6.5-.1c-1.6-.1-2.4-.3-3-.5-.7-.3-1.3-.6-1.8-1.1-.5-.5-.8-1.1-1.1-1.8-.2-.6-.4-1.4-.5-3-.1-1.7-.1-2.2-.1-6.5s0-4.8.1-6.5c.1-1.6.3-2.4.5-3 .3-.7.6-1.3 1.1-1.8.5-.5 1.1-.8 1.8-1.1.6-.2 1.4-.4 3-.5 1.7-.1 2.2-.1 6.5-.1zm0-2.9C11.6 0 11.1 0 9.3.1 7.5.2 6.3.4 5.2.8c-1.1.4-2.1 1-3 1.9S.8 4.1.4 5.2C.1 6.3-.1 7.5 0 9.3.1 11.1.1 11.6.1 16s0 4.9.1 6.7c.1 1.8.3 3 .7 4.1.4 1.1 1 2.1 1.9 3s1.9 1.5 3 1.9c1.1.4 2.3.6 4.1.7 1.8.1 2.3.1 6.7.1s4.9 0 6.7-.1c1.8-.1 3-.3 4.1-.7 1.1-.4 2.1-1 3-1.9s1.5-1.9 1.9-3c.4-1.1.6-2.3.7-4.1.1-1.8.1-2.3.1-6.7s0-4.9-.1-6.7c-.1-1.8-.3-3-.7-4.1-.4-1.1-1-2.1-1.9-3S27.9.8 26.8.4C25.7.1 24.5-.1 22.7 0 20.9.1 20.4.1 16 .1zm0 7.8c-4.5 0-8.1 3.6-8.1 8.1s3.6 8.1 8.1 8.1 8.1-3.6 8.1-8.1-3.6-8.1-8.1-8.1zm0 13.4c-2.9 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3-2.4 5.3-5.3 5.3zM26.4 7.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
