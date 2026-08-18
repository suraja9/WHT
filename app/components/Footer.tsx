'use client'

export function Footer() {
  const linksCol1 = [
    ['HOME', '/'],
    ['VISION', '/#vision'],
    ['MISSION', '/#mission'],
  ]

  const linksCol2 = [
    ['CURRENT', '/#current'],
    ['FUTURE', '/#future'],
    ['HISTORY', '/#history'],
  ]

  const linksCol3 = [
    ['ABOUT', '/about'],
    ['CONTACT', '/#contribute'],
  ]

  return (
    <div className="site-footer-wrapper">
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand" style={{ maxWidth: '360px' }}>
            <img src="/logo.png" alt="World Hunger Team Logo" style={{ height: '64px', width: 'auto' }} />
            <p className="footer-tagline">FOOD &amp; FRESH WATER FOR ALL</p>
            <p className="footer-desc" style={{ fontSize: '0.9rem', color: 'var(--foreground)', opacity: 0.8, lineHeight: 1.5, margin: '0.4rem 0 0' }}>
              Designing &amp; deploying practical, scalable hydroponic food-growing and rainwater harvesting systems worldwide.
            </p>
          </div>

          <div className="footer-nav">
            <div>
              {linksCol1.map(([label, href]) => (
                <a key={label} href={href}>{label}</a>
              ))}
            </div>
            <div>
              {linksCol2.map(([label, href]) => (
                <a key={label} href={href}>{label}</a>
              ))}
            </div>
            <div>
              {linksCol3.map(([label, href]) => (
                <a key={label} href={href}>{label}</a>
              ))}
              <a href="/#contribute" className="donate-link">DONATE TODAY ↗</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 World Hunger Team. All rights reserved.</p>
          <span>FOOD. WATER. DIGNITY.</span>
        </div>
      </footer>
    </div>
  )
}
