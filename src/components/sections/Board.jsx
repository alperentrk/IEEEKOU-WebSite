import { useState } from 'react'
import SectionHeading from '../SectionHeading'
import { administrativeBoard, executiveBoard } from '../../data/board.json'

function MemberCard({ member }) {
  const [photoFailed, setPhotoFailed] = useState(false)
  const showPhoto = member.photo && !photoFailed

  return (
    <div className="group flex flex-col gap-4 border-t border-line pt-5">
      {showPhoto ? (
        <img
          src={member.photo}
          alt={member.name}
          onError={() => setPhotoFailed(true)}
          className="aspect-[4/5] w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
        />
      ) : (
        <div className="flex aspect-[4/5] w-full items-center justify-center bg-paper-soft">
          <span className="font-display text-4xl text-ink-dim">{member.initials}</span>
        </div>
      )}
      <div>
        <h3 className="font-display text-lg font-semibold text-ink">{member.name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink-dim">{member.title}</p>
      </div>
    </div>
  )
}

export default function Board() {
  return (
    <section id="kurulumuz" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Organizasyon Şeması"
        title="Yönetim & İdari Kurulumuz"
        subtitle="IEEE KOÜ'yü yöneten ve komitelerimize liderlik eden ekibimizle tanışın."
        index="02"
      />

      <div className="mt-14">
        <h3 className="kicker mb-6">Yönetim Kurulu</h3>
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {executiveBoard.map((m) => (
            <MemberCard key={m.name} member={m} />
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h3 className="kicker mb-6">İdari Kurul & Komite Liderleri</h3>
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {administrativeBoard.map((m) => (
            <MemberCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  )
}
