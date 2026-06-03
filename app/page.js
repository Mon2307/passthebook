import Link from 'next/link'
import { ScrollToLink, SectionHashSync } from '@/app/components/ScrollAnchor'

const steps = [
  {
    num: '1',
    title: 'List your books',
    desc: 'Upload a photo of your book. Our AI reads the cover and fills in the details for you automatically.',
  },
  {
    num: '2',
    title: 'Request a borrow',
    desc: 'Browse books others have listed. Send a borrow request with a note and pick a meetup date.',
  },
  {
    num: '3',
    title: 'Meet and exchange',
    desc: 'Meet at the weekend community meetup at your local cafe. No couriers, no shipping — just people.',
  },
]

const stats = [
  { num: '1,200+', label: 'Books listed' },
  { num: '340',    label: 'Active readers' },
  { num: 'Every Sunday', label: 'Meetup in Pune' },
  { num: '0 ₹',   label: 'Shipping cost' },
]

export default function HomePage() {
  return (
    <main style={{ fontFamily: "'Literata', Georgia, serif" }} className="bg-[#fcf9f4] min-h-screen">

      {/* ─── DESKTOP NAVBAR (hidden on mobile) ─── */}
      <nav className="hidden md:flex items-center justify-between px-10 py-5 bg-[#fcf9f4]">
        <span className="text-xl font-bold text-[#1a2e35] tracking-tight">passyourbook</span>
        <div className="flex items-center gap-7">
          <Link href="/"         className="text-sm text-[#9b3a1f] border-b-2 border-[#9b3a1f] pb-0.5">Browse</Link>
          <Link href="/requests" className="text-sm text-[#4a5c61] hover:text-[#1a2e35]">Requests</Link>
          <Link href="/meetups"  className="text-sm text-[#4a5c61] hover:text-[#1a2e35]">Meetups</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/signup" className="text-sm text-[#1a2e35] hover:underline">Join the Community</Link>
          <Link
            href="/shelf/add"
            className="bg-[#9b3a1f] hover:bg-[#7d2e17] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            List a Book
          </Link>
        </div>
      </nav>

      {/* ─── MOBILE TOP BAR (hidden on desktop) ─── */}
      <header className="md:hidden flex items-center justify-between px-5 pt-12 pb-3 bg-[#fcf9f4]">
        <button aria-label="Search" className="w-9 h-9 flex items-center justify-center">
          <svg width="20" height="20" fill="none" stroke="#1a2e35" strokeWidth="1.8" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7"/><path d="M16.5 16.5 21 21" strokeLinecap="round"/>
          </svg>
        </button>
        <span className="text-base font-bold text-[#1a2e35] tracking-tight">PassTheBook</span>
        <button aria-label="Notifications" className="w-9 h-9 flex items-center justify-center">
          <svg width="20" height="20" fill="none" stroke="#1a2e35" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0" strokeLinecap="round"/>
          </svg>
        </button>
      </header>

      <div className="md:pb-0 pb-24">

        {/* ─── HERO ─── */}
        {/* Mobile: full-width card with overlay text */}
        {/* Desktop: 2-col grid with text left, image right */}
        <section className="
          md:grid md:grid-cols-2 md:gap-10 md:items-center md:px-10 md:pt-14 md:pb-20
          px-4 pt-2
        ">
          {/* Text */}
          <div className="
            md:flex md:flex-col md:gap-6
            hidden
          ">
            <h1 className="text-5xl font-bold text-[#1a2e35] leading-tight tracking-tight">
              Your library,<br />passed from<br />hand to hand.
            </h1>
            <p className="text-base text-[#4a5c61] leading-relaxed max-w-md">
              Skip the shipping. Join a community of readers who exchange books in person every weekend at local cafes.
            </p>
            <div className="flex gap-3">
              <Link
                href="/signup"
                className="bg-[#9b3a1f] hover:bg-[#7d2e17] text-white text-sm font-medium px-6 py-3.5 rounded-lg transition-colors"
              >
                Join the Movement
              </Link>
              <ScrollToLink
                sectionId="how-it-works"
                className="border border-[#1a2e35] text-[#1a2e35] hover:bg-[#f0ece4] text-sm font-medium px-6 py-3.5 rounded-lg transition-colors"
              >
                How it Works
              </ScrollToLink>
            </div>
          </div>

          {/* Hero image — desktop */}
          <div className="hidden md:flex rounded-xl overflow-hidden h-[420px] bg-[#d4c9b8] items-center justify-center">
            <img
              src="/booksharing.png"
              alt="Two people exchanging a book at a cafe"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Mobile hero card (image + overlay) */}
          <div className="md:hidden relative rounded-2xl overflow-hidden h-[260px]">
            {/* Fallback gradient bg shown when /hero.jpg is absent */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3d2a1e] via-[#6b4c35] to-[#2a1f16]" />
            <img
              src="/hero.jpg"
              alt="Hands exchanging a book"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="text-[10px] font-semibold tracking-widest uppercase bg-[#9b3a1f] text-white px-2.5 py-1 rounded-full">
                New Story Exchange
              </span>
              <h1 className="text-xl font-bold text-white mt-2 leading-snug">
                A smarter way to share stories
              </h1>
              <p className="text-[13px] text-white/80 mt-1 leading-relaxed">
                Connect with neighbors and discover your next favorite read through community sharing.
              </p>
            </div>
          </div>
        </section>

        {/* ─── MOBILE ACTION CARDS ─── */}
        <section className="md:hidden px-4 mt-4 grid grid-cols-2 gap-3">
          <Link
            href="/shelf/add"
            className="col-span-2 flex items-center gap-4 bg-white border border-[#e8e0d5] rounded-2xl px-5 py-4 active:bg-[#f5ede6] transition-colors"
          >
            <div className="w-11 h-11 rounded-xl bg-[#f5ede6] flex items-center justify-center flex-shrink-0">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <rect x="4" y="3" width="10" height="14" rx="1.5" fill="#9b3a1f" opacity="0.8"/>
                <rect x="7" y="2" width="10" height="14" rx="1.5" fill="#9b3a1f"/>
                <path d="M10 8h4M10 11h3" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1a2e35]">List Your Favorites</p>
              <p className="text-xs text-[#8a9da5] mt-0.5">Offer a book to the collective</p>
            </div>
          </Link>

          <Link
            href="/requests"
            className="flex flex-col gap-3 bg-white border border-[#e8e0d5] rounded-2xl px-4 py-4 active:bg-[#f5ede6] transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-[#eef4f5] flex items-center justify-center">
              <svg width="18" height="18" fill="none" stroke="#1a2e35" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M7 16V4m0 0L3 8m4-4 4 4M17 8v12m0 0 4-4m-4 4-4-4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-sm font-semibold text-[#1a2e35] leading-tight">Request a Read</p>
          </Link>

          <Link
            href="/meetups"
            className="flex flex-col gap-3 bg-white border border-[#e8e0d5] rounded-2xl px-4 py-4 active:bg-[#f5ede6] transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-[#eef4f5] flex items-center justify-center">
              <svg width="18" height="18" fill="none" stroke="#1a2e35" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="text-sm font-semibold text-[#1a2e35] leading-tight">Meet and Exchange</p>
          </Link>
        </section>

        {/* ─── MOBILE MEETUP BANNER ─── */}
        <section className="md:hidden px-4 mt-3">
          <div className="bg-[#1a2e35] rounded-2xl px-5 py-4">
            <div className="flex items-center gap-1.5 mb-2">
              <svg width="13" height="13" fill="none" stroke="#8aa5ad" strokeWidth="1.8" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round"/>
              </svg>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-[#8aa5ad]">
                Happening This Saturday
              </span>
            </div>
            <p className="text-base font-bold text-white">Blue Door Cafe Meetup</p>
            <p className="text-xs text-[#8aa5ad] mt-1 leading-relaxed">
              10:00 AM — Join us for coffee and book swaps in the historic district.
            </p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center">
                {['A', 'R', 'M'].map((initial, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-[#4a6b72] border-2 border-[#1a2e35] -ml-1.5 first:ml-0 flex items-center justify-center text-[9px] text-white font-medium"
                  >
                    {initial}
                  </div>
                ))}
                <span className="text-xs text-[#8aa5ad] ml-2">+12</span>
              </div>
              <Link
                href="/meetups"
                className="text-xs font-semibold text-[#9b3a1f] bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors"
              >
                Join →
              </Link>
            </div>
          </div>
        </section>

        {/* ─── STATS ─── */}
        {/* Mobile: 2×2 grid card | Desktop: horizontal strip */}
        <div className="
          md:flex md:border-t md:border-[#e0d8cd] md:mx-10
          hidden
        ">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex-1 text-center py-8 px-5 border-r border-[#e0d8cd] last:border-r-0"
            >
              <p className="text-2xl font-bold text-[#1a2e35]">{stat.num}</p>
              <p className="text-sm text-[#6b7c82] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mobile stats */}
        <div className="md:hidden px-4 mt-3 flex items-center gap-3 bg-white border border-[#e8e0d5] rounded-2xl mx-4 px-5 py-4">
          <div>
            <p className="text-2xl font-bold text-[#1a2e35]">342</p>
            <p className="text-[10px] font-semibold tracking-wider uppercase text-[#8a9da5] mt-0.5">
              Books Exchanged Last Weekend
            </p>
          </div>
          <div className="ml-auto w-10 h-10 rounded-xl bg-[#f5ede6] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z" stroke="#9b3a1f" strokeWidth="1.8"/>
              <path d="M16 8.5c0 .83-.67 1.5-1.5 1.5S13 9.33 13 8.5 13.67 7 14.5 7 16 7.67 16 8.5Z" fill="#9b3a1f"/>
              <path d="M3 16l4-4 3 3 3-3 5 5" stroke="#9b3a1f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* ─── MOBILE TRENDING ─── */}
        <section className="md:hidden mt-5 px-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-bold text-[#1a2e35]">Trending in Your Neighborhood</p>
            <Link href="/browse" className="text-xs font-semibold text-[#9b3a1f]">See all ›</Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-1 -mx-4 px-4">
            {[
              { title: 'The Midnight Library', genre: 'Fiction',     dist: '200m away',  bg: '#e8e4dc' },
              { title: 'Deep Work',            genre: 'Non-Fiction', dist: '0.5km away', bg: '#2d3a2e' },
              { title: 'Circe',                genre: 'Mythology',   dist: '1km away',   bg: '#3d2a1e' },
            ].map((book, i) => (
              <Link key={i} href="/browse" className="flex-shrink-0 w-[130px]">
                <div
                  className="w-full h-[170px] rounded-xl mb-2"
                  style={{ background: book.bg }}
                />
                <p className="text-xs font-semibold text-[#1a2e35] leading-tight">{book.title}</p>
                <p className="text-[10px] text-[#8a9da5] mt-0.5">{book.genre} · {book.dist}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ─── HOW IT WORKS (both breakpoints, layout changes) ─── */}
        <section id="how-it-works" className="scroll-mt-20 px-4 md:px-10 py-10 md:py-16">
          <SectionHashSync sectionId="how-it-works" />
          <p className="text-xs font-medium text-[#9b3a1f] tracking-widest uppercase mb-3">How it works</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a2e35] mb-6 md:mb-10">
            Three steps to your next read
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="bg-white border border-[#e0d8cd] rounded-xl p-6 md:p-7">
                <div className="w-9 h-9 rounded-full bg-[#f5ede6] text-[#9b3a1f] text-sm font-bold flex items-center justify-center mb-4">
                  {step.num}
                </div>
                <p className="text-base font-medium text-[#1a2e35] mb-2">{step.title}</p>
                <p className="text-sm text-[#6b7c82] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CTA BANNER ─── */}
        {/* Mobile: stacked | Desktop: side by side */}
        <section className="mx-4 md:mx-10 mb-8 md:mb-16 bg-[#1a2e35] rounded-xl px-6 md:px-10 py-8 md:py-12 flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-0 md:justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Ready to pass your first book?
            </h3>
            <p className="text-sm text-[#8aa5ad]">
              Join hundreds of readers already sharing books in Pune.
            </p>
          </div>
          <Link
            href="/signup"
            className="w-full md:w-auto text-center bg-[#9b3a1f] hover:bg-[#7d2e17] text-white font-medium px-7 py-3.5 rounded-lg text-sm transition-colors whitespace-nowrap"
          >
            Get Started
          </Link>
        </section>

        {/* ─── FOOTER (both) ─── */}
        <footer className="text-center py-6 px-4">
          <p className="text-sm font-bold text-[#1a2e35]">PassTheBook</p>
          <div className="flex justify-center gap-4 mt-2">
            {['Terms', 'Privacy', 'Support'].map(link => (
              <Link key={link} href="#" className="text-xs text-[#8a9da5] hover:text-[#1a2e35]">
                {link}
              </Link>
            ))}
          </div>
          <p className="text-[10px] text-[#b0bcbf] mt-2">© 2024 PassTheBook. Community-driven.</p>
        </footer>

      </div>

      {/* ─── MOBILE BOTTOM TAB BAR ─── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#e8e0d5] px-2 py-2 flex items-center justify-around z-50">
        {[
          {
            href: '/', label: 'Browse', active: true,
            icon: (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path d="M4 6h16M4 10h16M4 14h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            ),
          },
          {
            href: '/requests', label: 'Requests', active: false,
            icon: (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path d="M7 16V4m0 0L3 8m4-4 4 4M17 8v12m0 0 4-4m-4 4-4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ),
          },
          {
            href: '/profile', label: 'Profile', active: false,
            icon: (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.8"/>
                <path d="M4 21v-1a8 8 0 0 1 16 0v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            ),
          },
        ].map(tab => (
          <Link
            key={tab.label}
            href={tab.href}
            className={`flex flex-col items-center gap-1 px-5 py-1.5 rounded-xl transition-colors ${
              tab.active ? 'text-white bg-[#9b3a1f]' : 'text-[#6b7c82]'
            }`}
          >
            {tab.icon}
            <span className="text-[10px] font-semibold">{tab.label}</span>
          </Link>
        ))}
      </nav>

    </main>
  )
}