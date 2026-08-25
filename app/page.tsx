'use client'

import { useState } from 'react'

const images = {
  vision: '/VISION.jpg',
  mission: '/MISSION.jpg',
  current: '/CURRENT.jpeg',
  future: '/FUTURE.gif',
}

const projectGroups: [string, string[]][] = [
  ['HOME GROWING UNITS', ['Indoor Grow Tent', '“She Shed” Backyard Garden']],
  ['RAINWATER HARVESTING', ['Home Harvester', 'Commercial Harvester']],
  ['DOMESTIC FOOD SYSTEMS', ['Indoor Community Garden', 'Walipini Underground Garden', 'Trellis Community Garden']],
  ['HUMANITARIAN SYSTEMS', ['Bag Gardening', 'Hydroponic Table Farming', 'Bamboo Chicken Coops', 'Homeless Housing Units']],
]

import { Header } from './components/Header'
import { Footer } from './components/Footer'



export default function Page() {
  const [open, setOpen] = useState<string | null>(null)
  return <main id="top"><div className="site-header-wrapper"><Header /></div>
    <section className="doors-wrapper section-wrap" style={{ paddingTop: '2.5rem', paddingBottom: '3rem' }} aria-label="World Hunger Team overview">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
        <p className="eyebrow">FOUR DOORS INTO THE ORGANIZATION</p>
        <p style={{ fontSize: '.78rem', color: 'var(--muted-foreground)', margin: 0 }}>Hover or tap a panel to open it</p>
      </div>
      <div className="hero-container">
        <div className="hero-panel">
          <img src={images.vision} alt="VISION" className="hero-panel-bg" />
          <div className="panel-label-bar">
            <h2>VISION</h2>
          </div>
          <div className="panel-modal">
            <div style={{ maxWidth: '400px', textAlign: 'center' }}>
              <p className="eyebrow" style={{ color: '#b9cdbb', marginBottom: '0.8rem' }}>01 / VISION</p>
              <h3 style={{ font: "700 1.8rem 'Montserrat', sans-serif", color: '#ffffff', marginBottom: '1.2rem' }}>OUR VISION</h3>
              <p style={{ color: '#f2f1ec', fontSize: '1.05rem', lineHeight: '1.6' }}>
                World Hunger Team believes that our simplified hydroponic food-growing and solar water purification systems can provide immediate hunger and water relief to impoverished people in remote locations around the world.
              </p>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <img src={images.mission} alt="MISSION" className="hero-panel-bg" />
          <div className="panel-label-bar">
            <h2>MISSION</h2>
          </div>
          <div className="panel-modal">
            <div style={{ maxWidth: '400px', textAlign: 'center' }}>
              <p className="eyebrow" style={{ color: '#b9cdbb', marginBottom: '0.8rem' }}>02 / MISSION</p>
              <h3 style={{ font: "700 1.8rem 'Montserrat', sans-serif", color: '#ffffff', marginBottom: '1.2rem' }}>OUR MISSION</h3>
              <p style={{ color: '#f2f1ec', fontSize: '1.05rem', lineHeight: '1.6' }}>
                World Hunger Team seeks to improve the health and well-being of people in poverty by enabling access to organic and sustainable nutrition and safe, clean drinking water.
              </p>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <img src={images.current} alt="CURRENT" className="hero-panel-bg" />
          <div className="panel-label-bar">
            <h2>CURRENT</h2>
          </div>
          <div className="panel-modal">
            <div style={{ width: '100%', maxWidth: '480px' }}>
              <p className="eyebrow" style={{ color: '#b9cdbb', marginBottom: '0.5rem' }}>03 / CURRENT</p>
              <h3 style={{ font: "700 1.4rem 'Montserrat', sans-serif", color: '#ffffff', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem' }}>ACTIVE INITIATIVES</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                {projectGroups.map(([group, items], i) => (
                  <div key={group as string}>
                    <p style={{ fontSize: '.6rem', color: '#b9cdbb', fontWeight: 700, margin: 0 }}>0{i + 1}</p>
                    <h4 style={{ fontSize: '.75rem', color: '#ffffff', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '.3rem', margin: '.2rem 0 .4rem' }}>{group as string}</h4>
                    <ul style={{ display: 'grid', gap: '.25rem' }}>
                      {(items as string[]).map(it => (
                        <li key={it} style={{ color: '#d8e4d6', fontSize: '.8rem' }}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <img src={images.future} alt="FUTURE" className="hero-panel-bg" />
          <div className="panel-label-bar">
            <h2>FUTURE</h2>
          </div>
          <div className="panel-modal">
            <div style={{ width: '100%', maxWidth: '400px' }}>
              <p className="eyebrow" style={{ color: '#b9cdbb', marginBottom: '0.5rem' }}>04 / FUTURE</p>
              <h3 style={{ font: "700 1.4rem 'Montserrat', sans-serif", color: '#ffffff', marginBottom: '1.2rem', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem' }}>DEVELOPMENT PIPELINE</h3>
              <ul style={{ display: 'grid', gap: '1rem' }}>
                {['FARM IN A BOX', 'FIELD DESALINATION UNIT'].map((item, i) => (
                  <li key={item} style={{ borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '0.6rem' }}>
                    <span style={{ display: 'block', fontSize: '.65rem', color: '#b9cdbb', fontWeight: 700 }}>0{i + 1}</span>
                    <span style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 700 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="intro section-wrap" id="intro">
      <div>
        <p className="eyebrow">WORLD HUNGER TEAM</p>
        <h1 className="hero-title">YOU CAN BE A<br /><em>PART OF</em><br />THAT TEAM.</h1>
      </div>
      <div className="intro-copy">
        <p>“Access to fresh organic food and potable water should not be a privilege, it should be a basic human right enjoyed by every man, woman and child on this planet. At WHT we are literally creating a true TEAM of caring, concerned individuals and organizations.”</p>
        <p className="eyebrow" style={{ marginTop: '1.5rem' }}>— Randall Putala, Founder + CEO of World Hunger Team</p>
        <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://form.jotform.com/252455365996169" target="_blank" rel="noopener noreferrer" className="donate-button" style={{ background: 'transparent', color: 'var(--primary)' }}>FOLLOW</a>
          <a href="https://givebutter.com/jWjys8" target="_blank" rel="noopener noreferrer" className="donate-button">DONATE</a>
        </div>
      </div>
    </section>

    <section className="foundation section-wrap" id="foundation"><div className="section-index">01 / 02</div><div className="foundation-grid"><div className="foundation-left"><div className="foundation-photo"><img src={images.mission} alt="Children and a community member together outdoors" /></div><blockquote className="foundation-quote">World Hunger Team seeks to improve the health and well-being of people in poverty by enabling access to organic and sustainable nutrition and safe, clean drinking water.</blockquote></div><div className="foundation-text"><div className="section-heading" style={{ margin: '0 0 2.5rem' }}><p className="eyebrow">OUR FOUNDATION</p><h2 className="section-title">Restoring<br /><em>Nutrition, Health<br />and Dignity</em><br />across America and the World</h2></div><p>WHT is not a food pantry or a farm, although we work with many people who operate them. We create affordable and simple SYSTEMS in 3 categories:</p><div className="system-list"><div><span>01</span><div><strong>GROW ORGANIC FOOD</strong><p className="system-note">Simple, affordable systems for growing organic food.</p></div><i>↗</i><div className="system-popup"><p>We use non-circulating hydroponics (Kratky System) to grow food in water.</p><p>We use all-natural mineral nutrients, just as nature intended.</p><p>We automate the nutrient distribution so the plants grow "on auto-pilot."</p></div></div><div><span>02</span><div><strong>CAPTURE &amp; STORE RAINWATER</strong><p className="system-note">Systems that capture and store rainwater where it falls.</p></div><i>↗</i><div className="system-popup"><p>We offer a small HOA-friendly rainwater collection tower.</p><p>We also offer a large 25-foot tower for large-volume rainwater collection.</p><p>Our water storage tanks 'snap together' on site to hold water – choice of 73-gallon or 200-gallon capacity, easy to daisy-chain for massive storage needs.</p></div></div><div><span>03</span><div><strong>PROCESS RAINWATER</strong><p className="system-note">Processing rainwater for agriculture and personal use (WASH).</p></div><i>↗</i><div className="system-popup"><p>Our 'solar still' provides distilled water using only the sun's energy.</p><p>Black water storage tanks heat water for showers and WASH use.</p><p>Gravity-fed rainwater distribution system automatically feeds drip lines for row crop irrigation.</p></div></div></div></div></div></section>

    <Footer />
  </main>
}

const links: [string, string][] = [['HOME', '#top'], ['CURRENT', '#current'], ['FUTURE', '#future'], ['HISTORY', '#history'], ['ABOUT', '#foundation']]
