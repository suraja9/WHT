'use client'

import { useMemo, useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const articles = [
  { slug: '1', category: 'SYSTEM', date: 'August 26, 2026', title: 'Indoor Grow Tent', excerpt: 'A compact, efficient solution for families to grow their own food year-round, regardless of weather conditions.', image: 'https://lightpink-jellyfish-915487.hostingersite.com/wp-content/uploads/2026/08/CURRENT.jpeg', featured: true },
  { slug: '2', category: 'SYSTEM', date: 'August 20, 2026', title: '"She Shed" Backyard Garden', excerpt: 'Transforming small backyard spaces into highly productive, easy-to-maintain personal gardens.', image: 'https://lightpink-jellyfish-915487.hostingersite.com/wp-content/uploads/2026/08/VISION.jpg' },
  { slug: '3', category: 'SYSTEM', date: 'August 15, 2026', title: 'Home Harvester', excerpt: 'Simple, effective rainwater catchment systems for residential use, turning rain into a reliable resource.', image: 'https://worldhungerteam.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-30-at-1.02.12-AM.jpeg' },
  { slug: '4', category: 'SYSTEM', date: 'August 10, 2026', title: 'Commercial Harvester', excerpt: 'Large-scale water catchment solutions designed for community gardens and agricultural cooperatives.', image: 'https://worldhungerteam.com/wp-content/uploads/2025/12/klfqBYr7nGziwZTjQJMGzuYOzv4.png' },
  { slug: '5', category: 'PEOPLE', date: 'April 09, 2025', title: 'Dignity is part of the design', excerpt: 'Why every WHT project begins with listening to the people it is meant to serve.', image: 'https://lightpink-jellyfish-915487.hostingersite.com/wp-content/uploads/2026/08/MISSION.jpg' },
  { slug: '6', category: 'PERSPECTIVES', date: 'February 14, 2025', title: 'Sustainability starts with what people can maintain', excerpt: 'The best solution is the one that fits a community\'s resources, rhythm, and future.', image: 'https://lightpink-jellyfish-915487.hostingersite.com/wp-content/uploads/2026/08/PUTALA.jpg' }
]

const topics = ['SYSTEM', 'PEOPLE', 'PERSPECTIVES']



export default function BlogPage() {
  const [topic, setTopic] = useState('SYSTEM')
  const filtered = useMemo(() => topic === 'SYSTEM' ? articles : articles.filter((article) => article.category === topic), [topic])
  const featured = filtered.find((article) => article.featured) ?? filtered[0]
  const rest = filtered.filter((article) => article !== featured)

  return <main className="blog-page">
    <div className="site-header-wrapper">
      <Header activePath="/blog2" />
    </div>
    <section className="blog-hero"><div><p className="eyebrow">WORLD HUNGER TEAM </p><h1>Combating<br /><em>world hunger.</em></h1></div><p>Explore our latest initiatives, simplified hydroponic growing systems, and the people bringing immediate relief to communities worldwide.</p></section>
    <nav className="topic-nav" aria-label="Filter stories">{topics.map((item) => <button className={topic === item ? 'active' : ''} key={item} onClick={() => setTopic(item)}>{item}</button>)}</nav>
    {featured && <article className="featured-story"><div className="story-image"><img src={featured.image} alt="" /></div><div className="featured-copy"><p className="eyebrow">{featured.category} / {featured.date}</p><h2>{featured.title}</h2><p>{featured.excerpt}</p><a className="text-link" href={`/blog2/${featured.slug}`}>Read story <span>↗</span></a></div></article>}
    <section className="story-section"><div className="story-section-head"><p className="eyebrow">THE JOURNAL</p><p>{filtered.length} stories</p></div><div className="story-grid">{rest.map((article) => <article className="story-card" key={article.title}><div className="card-image"><img src={article.image} alt="" /></div><div className="card-copy"><p className="eyebrow">{article.category} / {article.date}</p><h3>{article.title}</h3><p>{article.excerpt}</p><a href={`/blog2/${article.slug}`} aria-label={`Read ${article.title}`}>Read story <span>↗</span></a></div></article>)}</div></section>

    <Footer />
  </main>
}
