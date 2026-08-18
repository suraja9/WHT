'use client'

import { useState } from 'react'

const team = [
  { name: 'Randall Putala', role: 'Founder & CEO', image: '/PUTALA.jfif' },
  { name: 'Robert Bitera', role: 'Ambassador / Uganda', image: null },
  { name: 'Angela Akin', role: 'Fundraising', image: null },
  { name: 'Anil Karakkattu', role: 'CSO', image: null },
  { name: 'Mukanga Kefa', role: 'Ambassador / Uganda', image: null },
]

const projectGroups: [string, string[]][] = [
  ['HOME GROWING UNITS', ['Indoor Grow Tent', '“She Shed” Backyard Garden']],
  ['RAINWATER HARVESTING', ['Home Harvester', 'Commercial Harvester']],
  ['DOMESTIC FOOD SYSTEMS', ['Indoor Community Garden', 'Walipini Underground Garden', 'Trellis Community Garden']],
  ['HUMANITARIAN SYSTEMS', ['Bag Gardening', 'Hydroponic Table Farming', 'Bamboo Chicken Coops', 'Homeless Housing Units']],
]

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function AboutPage() {
  const donate = () => window.location.href = '/#contribute'
  const links: [string, string][] = [['HOME', '/'], ['VISION', '/#vision'], ['MISSION', '/#mission'], ['CURRENT', '/#current'], ['FUTURE', '/#future'], ['HISTORY', '/#history'], ['ABOUT', '/about'], ['CONTACT', '/#contribute']]

  return (
    <main id="top">
      <div className="site-header-wrapper">
        <Header onDonate={donate} activePath="/about" />
      </div>

      {/* Hero Section */}
      <section className="section-wrap" style={{ borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <p className="eyebrow">OUR IMPACTFUL STORY</p>
            <h1 className="hero-title" style={{ marginTop: '0.8rem' }}>
              A Seed of Hope<br /><em>Planted in Barren Ground</em>
            </h1>
            <p style={{ marginTop: '2rem', fontSize: '1.15rem', lineHeight: '1.7', color: 'var(--foreground)' }}>
              Change doesn’t happen overnight — but it grows. Our work began with a single goal and has since evolved into a movement dedicated to empowering people through food, water, and knowledge.
            </p>
          </div>
          <div style={{ aspectRatio: '4/3', overflow: 'hidden', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <img src="/about_hero_seed.png" alt="A seed of hope" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Story & Method Section */}
      <section className="section-wrap" style={{ borderBottom: '1px solid var(--border)', background: 'var(--card)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
          <div>
            <p className="eyebrow">HOW IT ALL STARTED</p>
            <h2 className="section-title" style={{ marginTop: '0.8rem' }}>
              Real Stories,<br /><em>Real Impact</em>
            </h2>
            <div style={{ marginTop: '1.8rem', display: 'grid', gap: '1.2rem', fontSize: '1.05rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
              <p>
                What started with one simple goal — growing food in places where little to no food is currently grown — has become a global grassroots mission.
              </p>
              <p>
                We are growing food in spaces as small as a closet – to an entire room or gymnasium – to full-scale farms with up to 4,000 individual row crop plants. We are reinventing food security through scalable, low-cost systems, both domestic and international.
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow">OUR METHOD IN ACTION</p>
            <h2 className="section-title" style={{ marginTop: '0.8rem' }}>
              Simplicity That Grows<br /><em>Self-Reliance</em>
            </h2>
            <div style={{ marginTop: '1.8rem', display: 'grid', gap: '1.2rem', fontSize: '1.05rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
              <p>
                We’re NOT a food bank; we create SYSTEMS that allow individuals and food banks alike to grow their own organic food, indoors or outdoors, year-round.
              </p>
              <p>
                With proven equipment, education and systems that make hydroponic food growing SIMPLE, we help provide fresh food in dozens of different ways!
              </p>
              <ul style={{ display: 'grid', gap: '0.8rem', paddingLeft: '1.2rem', borderLeft: '3px solid var(--accent)', margin: '0.5rem 0 0', listStyle: 'none' }}>
                <li><strong>Indoor Grow Tent</strong> uses tiny indoor spaces to grow food – even in a dark basement!</li>
                <li><strong>Backyard Hydroponic Tent</strong> – grow 100s of plants in a small protected space.</li>
                <li><strong>Indoor Community Garden</strong> – grows up to 2,000 heads of greens in an abandoned high school gymnasium!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact / What We Build */}
      <section className="section-wrap" style={{ borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <p className="eyebrow">WHAT WE BUILD</p>
            <h2 className="section-title" style={{ marginTop: '0.8rem' }}>
              Tools That Nourish<br /><em>Communities</em>
            </h2>
            <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
              Our low-tech hydroponic gardens and rainwater systems are more than tools — they’re lifelines. They provide nutritious harvests, support clean water access, and help communities thrive with dignity.
            </p>

            <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
              {[
                {
                  title: '15-acre "Lost Crops of Africa"',
                  description: 'farm built in Ikanga, Uganda',
                },
                {
                  title: 'Outdoor hydroponic garden',
                  description: 'testing now in Mbale, Uganda',
                },
                {
                  title: '“Indoor Community Garden”',
                  description: 'operating in Tennessee. Thousands of meals since 2008.',
                },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>0{i + 1}</p>
                  <h3 style={{ font: "700 1.1rem 'Montserrat', sans-serif", color: 'var(--primary)', margin: 0 }}>{stat.title}</h3>
                  <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--foreground)', opacity: 0.85, lineHeight: '1.4' }}>{stat.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ aspectRatio: '4/3', overflow: 'hidden', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <img src="/about_story_garden.png" alt="Hydroponic garden community" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-wrap" style={{ borderBottom: '1px solid var(--border)', background: 'var(--card)' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="eyebrow">THE HEARTS BEHIND THE WORK</p>
          <h2 className="section-title" style={{ marginTop: '0.8rem' }}>
            Meet the Team Driving<br /><em>Global Impact</em>
          </h2>
          <p style={{ marginTop: '1.2rem', fontSize: '1.1rem', color: 'var(--foreground)', opacity: 0.85, maxWidth: '650px', margin: '1.2rem auto 0' }}>
            We’re a team fueled by impact—committed to transforming lives through practical solutions and shared vision.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '2rem', textAlign: 'center' }}>
          {team.map((member) => (
            <div key={member.name} className="contribute-card" style={{ padding: '1rem' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto 1.5rem', overflow: 'hidden', border: '2px solid var(--border)', background: 'var(--background)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {member.image ? (
                  <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <span style={{ font: "700 2.2rem 'Montserrat', sans-serif", color: 'var(--accent)' }}>
                    {member.name.charAt(0)}
                  </span>
                )}
              </div>
              <h3 style={{ font: "700 1.1rem 'Montserrat', sans-serif", color: 'var(--foreground)', margin: 0 }}>{member.name}</h3>
              <p style={{ marginTop: '0.4rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)' }}>
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
