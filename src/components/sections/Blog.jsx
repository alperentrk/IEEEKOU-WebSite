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
          title="Yayınlar"
          subtitle="Üyelerimizin teknik ve sektörel deneyimlerini paylaştığı Medium yazılarımızdan seçkiler."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-4 border border-line bg-paper p-7 transition-colors hover:border-accent"
            >
              <div className="flex items-center justify-between">
                <span className="kicker text-accent">{post.tag}</span>
                <ArrowUpRight
                  size={18}
                  className="text-ink-dim transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                />
              </div>
              <h3 className="font-display text-xl font-semibold leading-snug text-ink">
                {post.title}
              </h3>
              <p className="line-clamp-3 text-sm leading-relaxed text-ink-dim">
                {post.excerpt}
              </p>
              <p className="mt-auto border-t border-line pt-4 text-xs font-semibold text-ink-dim">
                {post.author} — {dateFormatter.format(new Date(post.date))}
              </p>
            </a>
          ))}
        </div>

        {showAllLink && (
          <div className="mt-10">
            <Link
              to="/blog"
              className="kicker text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
            >
              Tüm Yazıları Gör →
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
