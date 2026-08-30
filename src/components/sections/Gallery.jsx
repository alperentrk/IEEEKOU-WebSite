import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, ImageOff } from 'lucide-react'
import { images } from '../../data/gallery.json'

function GalleryImage({ image }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="w-72 shrink-0 snap-start sm:w-96">
      {failed ? (
        <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 border border-line bg-paper-soft text-ink-dim">
          <ImageOff size={22} />
          <span className="text-xs">Görsel eklenmedi</span>
        </div>
      ) : (
        <img
          src={image.src}
          alt={image.caption}
          onError={() => setFailed(true)}
          className="aspect-[4/3] w-full border border-line object-cover"
        />
      )}
      <p className="mt-3 text-sm font-medium text-ink-dim">{image.caption}</p>
    </div>
  )
}

export default function Gallery() {
  const trackRef = useRef(null)

  function scroll(direction) {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: direction * (track.clientWidth * 0.85), behavior: 'smooth' })
  }

  return (
    <section className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="kicker">Anılarımız</span>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Etkinliklerimizden Kareler
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Önceki"
              className="flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Sonraki"
              className="flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar mt-8 flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
        >
          {images.map((image) => (
            <GalleryImage key={image.src} image={image} />
          ))}
        </div>
      </div>
    </section>
  )
}
