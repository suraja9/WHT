import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

const dummyBlogs = [
  {
    id: '1',
    title: 'Indoor Grow Tent',
    content: `
      <p>Our Indoor Grow Tent initiative empowers families to cultivate fresh produce right in their homes.</p>
      <h2>Efficient Use of Space</h2>
      <p>These tents are equipped with LED grow lights, ventilation systems, and hydroponic setups, maximizing yield in minimal space. They are perfect for urban environments or areas with harsh climates.</p>
      <h2>Food Security</h2>
      <p>By reducing reliance on external food sources, families achieve greater food security and access to organic nutrition year-round.</p>
    `,
    date: 'August 26, 2026',
    author: 'WHT Team',
    imageUrl: 'https://lightpink-jellyfish-915487.hostingersite.com/wp-content/uploads/2026/08/CURRENT.jpeg',
    category: 'HOME GROWING UNITS'
  },
  {
    id: '2',
    title: '"She Shed" Backyard Garden',
    content: `
      <p>The "She Shed" Backyard Garden is designed to make outdoor growing accessible and manageable.</p>
      <h2>Raised Beds and Companion Planting</h2>
      <p>Using raised beds and strategic companion planting, these gardens yield a surprising amount of fresh vegetables and herbs, even in small spaces.</p>
      <h2>A Peaceful Retreat</h2>
      <p>It's not just about food; it's about creating a peaceful retreat that connects individuals with nature right in their backyard.</p>
    `,
    date: 'August 20, 2026',
    author: 'WHT Team',
    imageUrl: 'https://lightpink-jellyfish-915487.hostingersite.com/wp-content/uploads/2026/08/VISION.jpg',
    category: 'HOME GROWING UNITS'
  },
  {
    id: '3',
    title: 'Home Harvester',
    content: `
      <p>Water is the foundation of any food system. The Home Harvester allows families to capture and store rainwater directly from their roofs.</p>
      <h2>A Crucial Backup</h2>
      <p>This simple intervention provides a crucial backup water supply for domestic gardens during dry spells, ensuring crops survive without relying on municipal water.</p>
      <h2>Building Resilience</h2>
      <p>By utilizing this free resource, communities become more resilient to changing weather patterns and droughts.</p>
    `,
    date: 'August 15, 2026',
    author: 'WHT Team',
    imageUrl: 'https://worldhungerteam.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-30-at-1.02.12-AM.jpeg',
    category: 'RAINWATER HARVESTING'
  },
  {
    id: '4',
    title: 'Commercial Harvester',
    content: `
      <p>For larger agricultural projects, a consistent water supply is critical. Our Commercial Harvester systems are built to meet this demand.</p>
      <h2>High-Capacity Catchment</h2>
      <p>These high-capacity systems capture thousands of gallons of rainwater, filtering and storing it safely for irrigation during dry seasons.</p>
      <h2>Scaling Operations</h2>
      <p>This reliable infrastructure allows community gardens to scale their operations and feed more people without draining local groundwater reserves.</p>
    `,
    date: 'August 10, 2026',
    author: 'WHT Team',
    imageUrl: 'https://worldhungerteam.com/wp-content/uploads/2025/12/klfqBYr7nGziwZTjQJMGzuYOzv4.png',
    category: 'RAINWATER HARVESTING'
  },
  {
    id: '5',
    title: 'Indoor Community Garden',
    content: `
      <p>When outdoor space is limited, we move indoors. The Indoor Community Garden transforms unused buildings into vibrant hubs of agriculture.</p>
      <h2>Vertical Farming</h2>
      <p>Using vertical farming and hydroponics, these gardens produce food year-round while serving as educational centers for the community.</p>
      <h2>Strengthening Bonds</h2>
      <p>It's a shared space where neighbors can learn, grow, and harvest together, strengthening both food security and community bonds.</p>
    `,
    date: 'August 5, 2026',
    author: 'WHT Team',
    imageUrl: 'https://worldhungerteam.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-30-at-1.03.08-AM.jpeg',
    category: 'DOMESTIC FOOD SYSTEMS'
  },
  {
    id: '6',
    title: 'Walipini Underground Garden',
    content: `
      <p>The Walipini, or underground greenhouse, is a remarkable solution for growing food in harsh climates.</p>
      <h2>Subterranean Agriculture</h2>
      <p>By digging down into the earth and covering the space with transparent material, the Walipini captures solar heat and utilizes the earth's constant temperature.</p>
      <h2>Year-Round Harvesting</h2>
      <p>This creates a stable, warm environment where crops can thrive even during freezing winters, providing a continuous food supply when it's needed most.</p>
    `,
    date: 'August 1, 2026',
    author: 'WHT Team',
    imageUrl: 'https://lightpink-jellyfish-915487.hostingersite.com/wp-content/uploads/2026/08/MISSION.jpg',
    category: 'DOMESTIC FOOD SYSTEMS'
  }
];

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const post = dummyBlogs.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  // A small trick to format the title nicely if it's multiple words
  const titleWords = post.title.split(' ');
  const lastWord = titleWords.length > 1 ? titleWords.pop() : '';
  const firstPart = titleWords.join(' ');

  return (
    <main id="top">
      <div className="site-header-wrapper">
        <Header activePath="/blog" />
      </div>

      <section className="section-wrap" style={{ borderBottom: '1px solid var(--border)', maxWidth: '900px', margin: '0 auto', padding: '5rem 4vw' }}>
        <Link 
          href="/blog1"
          className="back-link"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '3rem', transition: 'opacity 0.3s' }}
        >
          <span>←</span> BACK TO ALL BLOGS
        </Link>

        <header style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
             <p className="eyebrow" style={{ color: 'var(--primary)' }}>{post.category}</p>
             <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--muted-foreground)', letterSpacing: '0.05em' }}>{post.date}</span>
          </div>
          <h1 className="section-title" style={{ marginTop: '0' }}>
            {firstPart} {lastWord && <br/>}<em>{lastWord}</em>
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2.5rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
            <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'var(--card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', font: "700 1.2rem 'Montserrat', sans-serif", color: 'var(--primary)' }}>
              {post.author.charAt(0)}
            </div>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--foreground)' }}>
                {post.author}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>Content Writer</div>
            </div>
          </div>
        </header>

        <figure style={{ margin: '0 0 4rem 0', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)' }}>
          <img
            src={post.imageUrl}
            alt={post.title}
            style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: '16/9', objectFit: 'cover' }}
          />
        </figure>

        <div 
          className="blog-content"
          style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--foreground)' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <style dangerouslySetInnerHTML={{__html: `
          .back-link:hover { opacity: 0.7 !important; }
          .blog-content h2 { font: 700 2rem 'Montserrat', sans-serif; letter-spacing: -0.03em; margin: 3.5rem 0 1.5rem; color: var(--primary); }
          .blog-content p { margin-bottom: 1.5rem; }
          .blog-content blockquote { border-left: 4px solid var(--accent); padding-left: 1.5rem; margin: 2.5rem 0; font-style: italic; font-size: 1.3rem; color: var(--primary); background: var(--card); padding: 1.5rem 1.5rem 1.5rem 2rem; border-radius: 0 8px 8px 0; }
        `}} />
      </section>

      <Footer />
    </main>
  );
}
