import { useState } from 'react'
import { Send } from 'lucide-react'
import BrandIcon from '../BrandIcon'
import SectionHeading from '../SectionHeading'
import { site, socialLinks } from '../../data/site.json'

const initialForm = { name: '', email: '', message: '' }

const fieldClass =
  'w-full border-0 border-b border-line bg-transparent py-3 text-base text-ink outline-none transition-colors placeholder:text-ink-dim/60 focus:border-accent'

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    const subject = `İletişim Formu: ${form.name}`
    const body = `Gönderen: ${form.name} (${form.email})\n\n${form.message}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    setStatus('sent')
    setForm(initialForm)
  }

  return (
    <section id="iletisim" className="border-t border-line bg-paper-soft">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Bize Ulaşın"
          title="İletişim"
          subtitle="Sorularınız, iş birliği teklifleriniz veya kulübe katılım talepleriniz için bizimle iletişime geçin."
          index="07"
        />

        <div className="mt-14 grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="kicker mb-2">Adres</h3>
              <p className="text-sm leading-relaxed text-ink-dim">{site.location}</p>
            </div>
            <div>
              <h3 className="kicker mb-2">E-posta</h3>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-ink underline decoration-accent underline-offset-4"
              >
                {site.email}
              </a>
            </div>
            <div>
              <h3 className="kicker mb-3">Sosyal Medya</h3>
              <div className="flex gap-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="text-ink-dim transition-colors hover:text-accent"
                  >
                    <BrandIcon name={s.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="kicker">Ad Soyad</span>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Adınız Soyadınız"
                  className={fieldClass}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="kicker">E-posta</span>
                <input
                  required
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="ornek@kocaeli.edu.tr"
                  className={fieldClass}
                />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="kicker">Mesajınız</span>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Mesajınızı buraya yazın..."
                className={`${fieldClass} resize-none`}
              />
            </label>

            <button
              type="submit"
              className="inline-flex w-fit items-center justify-center gap-2 border border-ink px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              <Send size={16} /> Mesaj Gönder
            </button>

            {status === 'sent' && (
              <p className="text-sm font-medium text-accent">
                E-posta programınız mesaj içeriğiyle birlikte açıldı —
                göndermek için oradan onaylamanız yeterli.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
