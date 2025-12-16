<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="/images/logo.webp" alt="VEIN Logo" class="logo-image">
            <span class="logo-text">VEIN Game</span>
          </div>
          <p class="footer-text">
            Comprehensive VEIN game resources including guides, wiki, items database, and interactive maps to help you survive and thrive.
          </p>
          <div class="social-links">
            <a href="https://x.com/0tZ3wS5T6e13110/status/1996416343588114806" target="_blank" rel="noopener noreferrer nofollow" class="social-link" aria-label="Follow us on X">
              <svg viewBox="0 0 24 24" fill="currentColor" class="social-icon">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61584615331727" target="_blank" rel="noopener noreferrer nofollow" class="social-link" aria-label="Follow us on Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" class="social-icon">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
          </div>
        </div>
        <div class="link-column">
          <h2>Navigate</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/vein-guides">Guides</a></li>
            <li><a href="/vein-wiki">Wiki</a></li>
            <li><a href="/vein-items">Items</a></li>
            <li><a href="/vein-maps">Maps</a></li>
          </ul>
        </div>
        <div class="link-column">
          <h2>Legal</h2>
          <ul>
            <li>
              <a href="/privacy-policy" rel="nofollow">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service" rel="nofollow">Terms of Service</a>
            </li>
            <li>
              <a href="/copyright" rel="nofollow">Copyright</a>
            </li>
            <li>
              <a href="/about-us" rel="nofollow">About Us</a>
            </li>
            <li>
              <a href="/contact-us" rel="nofollow">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 veingame.net. All rights reserved.</p>
        <p>veingame.net is not affiliated with, endorsed by, or connected to the original or its publishers. This is an independent fan site created for informational purposes only. All trademarks and copyrights belong to their respective owners.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding: 30px 0 20px 0;
  background: rgba(2, 4, 6, 0.9);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 10px;
  text-decoration: none;
}

.logo-image {
  width: 50px;
  height: 50px;
} 

.logo-text {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: var(--accent);
  text-transform: uppercase;
  text-shadow: 0 0 20px rgba(255, 54, 54, 0.7);
}
.footer-text {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 16px;
}

.social-links {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 16px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
}

.social-link:hover {
  color: var(--accent);
  border-color: var(--accent);
  background: rgba(255, 54, 54, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 54, 54, 0.3);
}

.social-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.social-link:hover .social-icon {
  transform: scale(1.1);
}

.footer-brand{
  width: 30%;
}

.link-column h2 {
  color: #ffdede;
  font-size: 1.3rem;
  margin-bottom: 16px;
  font-weight: 600;
}

.link-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.link-column a {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  transition: color 0.2s ease;
}

.link-column a:hover {
  color: #ffffff;
}

.footer-bottom {
  margin-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 20px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: center;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  .link-column h2 {
    font-size: 1.2rem;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .site-footer {
    padding: 20px 0;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .footer-logo {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .footer-text {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .social-links {
    gap: 10px;
    margin-top: 12px;
  }

  .social-link {
    width: 36px;
    height: 36px;
  }

  .social-icon {
    width: 18px;
    height: 18px;
  }

  .link-column h2 {
    font-size: 16px;
    margin-bottom: 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .link-column ul {
    gap: 10px;
  }

  .link-column a {
    font-size: 12px;
  }

  .footer-bottom {
    margin-top: 20px;
    padding-top: 20px;
    gap: 10px;
    font-size: 12px;
  }

  .footer-bottom p {
    font-size: 12px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .footer-text,
  .link-column a {
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
}
</style>

