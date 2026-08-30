import { MessageCircle } from 'lucide-react'
import BrandIcon from '../components/BrandIcon'
import { site } from '../data/site.json'

export default function JoinPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <span className="kicker">Katılım</span>
      <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
        Bize Katıl
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-ink-dim">
        IEEE KOÜ ailesine katılmak için aşağıdaki formu doldurman yeterli.
        Formu gönderdikten sonra onay ekranında çıkan bağlantıdan WhatsApp
        topluluğumuza da katılabilirsin.
      </p>

      <div className="mt-10 border border-line">
        <iframe
          title="IEEE KOÜ Başvuru Formu"
          src={`${site.joinFormUrl}?embedded=true`}
          width="100%"
          height="1200"
          className="block"
        >
          Yükleniyor…
        </iframe>
      </div>

      {site.whatsappUrl && (
        <div className="mt-10 flex flex-wrap items-center gap-4 border border-line p-6">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-line text-ink">
            <MessageCircle size={20} />
          </span>
          <div className="flex-1">
            <h3 className="font-display text-base font-semibold text-ink">
              WhatsApp Topluluğumuz
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-ink-dim">
              Formu doldurduktan sonra aşağıdaki bağlantıdan topluluğumuza
              katılabilirsin.
            </p>
          </div>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="kicker inline-flex items-center gap-2 border border-ink px-4 py-2.5 text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            <BrandIcon name="whatsapp" size={15} /> Topluluğa Katıl
          </a>
        </div>
      )}
    </div>
  )
}
