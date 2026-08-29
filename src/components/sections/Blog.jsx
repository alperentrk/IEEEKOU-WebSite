import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../SectionHeading'
import { blogPosts } from '../../data/blogPosts.json'

const dateFormatter = new Intl.DateTimeFormat('tr-TR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export default function Blog({ limit, showAllLink = true }) {
  const posts = limit ? blogPosts.slice(0, limit) : blogPosts

  return (
    <section id="blog" className="border-t border-line bg-paper-soft">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Medium Yazılarımız"
          title="Blog / Medium Yazıları"
          subtitle="Üyelerimizin teknik ve sektörel deneyimlerini paylaştığı Medium yazılarımızdan seçkiler."
          index="05"
        />

        <div className="mt-4">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="group grid grid-cols-1 gap-3 border-t border-line py-8 first:border-t-0 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8"
            >
              <div>
                <span className="kicker text-primary">{post.tag}</span>
                <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-ink sm:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-dim">
                  {post.excerpt}
                </p>
                <p className="mt-3 text-xs font-semibold text-ink-dim">
                  {post.author} — {dateFormatter.format(new Date(post.date))}
                </p>
              </div>
              <ArrowUpRight
                size={22}
                className="hidden text-ink-dim transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary sm:block"
              />
            </a>
          ))}
        </div>

        {showAllLink && (
          <div className="mt-10">
            <Link
              to="/blog"
              className="kicker text-ink underline decoration-primary decoration-2 underline-offset-4 hover:text-primary"
            >
              Tüm Yazıları Gör →
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
