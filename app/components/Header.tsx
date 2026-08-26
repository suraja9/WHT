'use client'

import { useState } from 'react'

const projectGroups: [string, string[]][] = [
  ['HOME GROWING UNITS', ['Indoor Grow Tent', '“She Shed” Backyard Garden']],
  ['RAINWATER HARVESTING', ['Home Harvester', 'Commercial Harvester']],
  ['DOMESTIC FOOD SYSTEMS', ['Indoor Community Garden', 'Walipini Underground Garden', 'Trellis Community Garden']],
  ['HUMANITARIAN SYSTEMS', ['Bag Gardening', 'Hydroponic Table Farming', 'Bamboo Chicken Coops', 'Homeless Housing Units']],
]

export function Header({ onDonate, activePath = '/' }: { onDonate?: () => void; activePath?: string }) {
  const [menu, setMenu] = useState(false)
  const [current, setCurrent] = useState(false)

  const handleDonate = () => {
    if (onDonate) {
      onDonate()
    } else {
      window.open('https://givebutter.com/jWjys8', '_blank', 'noopener,noreferrer')
    }
  }

  const links = [
    ['HOME', '/'],
    ['CURRENT', '/#current'],
    ['FUTURE', '/#future'],
    ['HISTORY', '/#history'],
    ['ABOUT', '/about'],
    ['BLOG 1', '/blog1'],
    ['BLOG 2', '/blog2'],
    ['CONTACT', '/#contribute'],
  ]

  return (
    <header className="site-header" onMouseLeave={() => setCurrent(false)}>
      <a className="brand" href="/" aria-label="World Hunger Team home">
        <img src="/logo.png" alt="World Hunger Team Logo" style={{ height: '48px', width: 'auto' }} />
      </a>
      <p className="header-tagline">FOOD &amp; FRESH WATER FOR ALL</p>
      
      <nav className="desktop-nav" aria-label="Primary navigation">
        <button className="donate-button" onClick={handleDonate}>
          Donate today <span>↗</span>
        </button>
        
        {links.map(([label, href]) => {
          const isActive = activePath === href
          if (label === 'CURRENT') {
            return (
              <button
                key={label}
                onMouseEnter={() => setCurrent(true)}
                onClick={() => setCurrent(!current)}
                aria-expanded={current}
                className={current ? 'is-active' : undefined}
              >
                {label} <span style={{ fontSize: '0.65rem', marginLeft: '0.15rem' }}>▾</span>
              </button>
            )
          }
          return (
            <a
              key={label}
              href={href}
              className={isActive ? 'is-active' : undefined}
            >
              {label}
            </a>
          )
        })}
      </nav>

      <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label="Toggle menu">
        <span /><span />
      </button>

      {current && (
        <div
          className="current-menu"
          onMouseEnter={() => setCurrent(true)}
          onMouseLeave={() => setCurrent(false)}
        >
          <p className="eyebrow">CURRENT PROJECTS</p>
          <div className="current-grid">
            {projectGroups.map(([group, items]) => (
              <div key={group as string}>
                <strong>{group as string}</strong>
                {(items as string[]).map((item) => (
                  <a href="/#current" key={item} onClick={() => setCurrent(false)}>
                    {item}<small>↗</small>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {menu && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenu(false)}>
              {label}
            </a>
          ))}
          <button onClick={() => { setMenu(false); handleDonate() }}>Donate today ↗</button>
        </nav>
      )}
    </header>
  )
}
