import Link from 'next/link';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const dummyBlogs = [
  {
    id: '1',
    title: 'Indoor Grow Tent',
    excerpt: 'A compact, efficient solution for families to grow their own food year-round, regardless of weather conditions.',
    date: 'August 26, 2026',
    author: 'WHT Team',
    imageUrl: 'https://lightpink-jellyfish-915487.hostingersite.com/wp-content/uploads/2026/08/CURRENT.jpeg',
    category: 'HOME GROWING UNITS'
  },
  {
    id: '2',
    title: '"She Shed" Backyard Garden',
    excerpt: 'Transforming small backyard spaces into highly productive, easy-to-maintain personal gardens.',
    date: 'August 20, 2026',
    author: 'WHT Team',
    imageUrl: 'https://lightpink-jellyfish-915487.hostingersite.com/wp-content/uploads/2026/08/VISION.jpg',
    category: 'HOME GROWING UNITS'
  },
  {
    id: '3',
    title: 'Home Harvester',
    excerpt: 'Simple, effective rainwater catchment systems for residential use, turning rain into a reliable resource.',
    date: 'August 15, 2026',
    author: 'WHT Team',
    imageUrl: 'https://worldhungerteam.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-30-at-1.02.12-AM.jpeg',
    category: 'RAINWATER HARVESTING'
  },
  {
    id: '4',
    title: 'Commercial Harvester',
    excerpt: 'Large-scale water catchment solutions designed for community gardens and agricultural cooperatives.',
    date: 'August 10, 2026',
    author: 'WHT Team',
    imageUrl: 'https://worldhungerteam.com/wp-content/uploads/2025/12/klfqBYr7nGziwZTjQJMGzuYOzv4.png',
    category: 'RAINWATER HARVESTING'
  },
  {
    id: '5',
    title: 'Indoor Community Garden',
    excerpt: 'Bringing communities together to grow food collaboratively in repurposed indoor spaces.',
    date: 'August 5, 2026',
    author: 'WHT Team',
    imageUrl: 'https://worldhungerteam.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-30-at-1.03.08-AM.jpeg',
    category: 'DOMESTIC FOOD SYSTEMS'
  },
  {
    id: '6',
    title: 'Walipini Underground Garden',
    excerpt: 'An innovative, climate-resilient approach to year-round farming using subterranean greenhouses.',
    date: 'August 1, 2026',
    author: 'WHT Team',
    imageUrl: 'https://lightpink-jellyfish-915487.hostingersite.com/wp-content/uploads/2026/08/MISSION.jpg',
    category: 'DOMESTIC FOOD SYSTEMS'
  }
];

export default function BlogList() {
  return (
    <main id="top">
      <div className="site-header-wrapper">
        <Header activePath="/blog" />
      </div>

      <section className="section-wrap" style={{ borderBottom: '1px solid var(--border)' }}>
        <div>
          <p className="eyebrow">LATEST INSIGHTS</p>
          <h1 className="hero-title" style={{ marginTop: '0.8rem' }}>
            Our Stories,<br /><em>Your Inspiration</em>
          </h1>
          <p style={{ marginTop: '2rem', fontSize: '1.15rem', lineHeight: '1.7', color: 'var(--foreground)', maxWidth: '600px' }}>
            Explore updates from our team, learn about our sustainable systems, and see how you can make a difference in the world.
          </p>
        </div>

        <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '3rem' }}>
          {dummyBlogs.map((post) => (
            <article key={post.id} className="blog-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <Link href={`/blog1/${post.id}`} className="blog-card-img-wrapper" style={{ display: 'block', overflow: 'hidden', borderRadius: '8px', border: '1px solid var(--border)', aspectRatio: '4/3', marginBottom: '1.5rem' }}>
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="blog-card-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
              </Link>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                   <p className="eyebrow" style={{ color: 'var(--primary)' }}>{post.category}</p>
                   <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--muted-foreground)', letterSpacing: '0.05em' }}>{post.date}</span>
                </div>
                <h3 className="blog-card-title" style={{ font: "800 1.4rem 'Montserrat', sans-serif", color: 'var(--foreground)', margin: '0 0 1rem', letterSpacing: '-0.02em', lineHeight: '1.3', transition: 'color 0.3s' }}>
                  <Link href={`/blog1/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>
                <p style={{ color: 'var(--foreground)', opacity: 0.85, fontSize: '1rem', lineHeight: '1.5', margin: '0 0 1.5rem', flex: 1 }}>
                  {post.excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '1rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', font: "700 0.9rem 'Montserrat', sans-serif", color: 'var(--primary)' }}>
                    {post.author.charAt(0)}
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--foreground)' }}>
                    {post.author}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .blog-card:hover .blog-card-img { transform: scale(1.05) !important; }
          .blog-card:hover .blog-card-title { color: var(--accent) !important; }
        `}} />
      </section>

      <Footer />
    </main>
  );
}
