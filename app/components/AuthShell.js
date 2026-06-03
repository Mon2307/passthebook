import Link from 'next/link'

export function AuthShell({ title, subtitle, children, footer }) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-[#fcf9f4] px-4 py-12"
      style={{ fontFamily: 'var(--font-manrope), system-ui, sans-serif' }}
    >
      <Link
        href="/"
        className="mb-8 text-xl font-bold text-[#1a2e35] tracking-tight"
        style={{ fontFamily: 'var(--font-literata), Georgia, serif' }}
      >
        passyourbook
      </Link>

      <div
        className="w-full max-w-md bg-white rounded-xl border border-[#041920]/5 p-8 md:p-10"
        style={{ boxShadow: '0 4px 12px rgba(4, 25, 32, 0.04)' }}
      >
        <h1
          className="text-2xl font-semibold text-[#1a2e35] mb-2 tracking-tight"
          style={{ fontFamily: 'var(--font-literata), Georgia, serif' }}
        >
          {title}
        </h1>
        <p className="text-base text-[#4a5c61] leading-relaxed mb-8">{subtitle}</p>
        {children}
        {footer && <div className="mt-8 pt-6 border-t border-[#e5e2dd]">{footer}</div>}
      </div>
    </div>
  )
}

export function FormField({ label, id, ...props }) {
  const fieldId = id || label.toLowerCase().replace(/\s+/g, '-')
  return (
    <div>
      <label
        htmlFor={fieldId}
        className="block text-sm font-semibold text-[#1a2e35] tracking-wide mb-2"
      >
        {label}
      </label>
      <input
        id={fieldId}
        className="w-full bg-white border border-[#c2c7ca] rounded-lg px-4 py-3 text-base text-[#1c1c19] placeholder:text-[#73787a] transition-shadow focus:outline-none focus:border-[#173020] focus:ring-[3px] focus:ring-[#173020]/20"
        {...props}
      />
    </div>
  )
}

export function PrimaryButton({ children, type = 'submit', ...props }) {
  return (
    <button
      type={type}
      className="w-full bg-[#9f4127] hover:bg-[#7d2e17] text-white text-sm font-semibold py-3.5 rounded-lg transition-colors shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] disabled:opacity-60 disabled:cursor-not-allowed"
      {...props}
    >
      {children}
    </button>
  )
}

export function ErrorAlert({ message, children }) {
  if (!message && !children) return null
  return (
    <div className="mb-6 rounded-lg bg-[#ffdad6] border border-[#ba1a1a]/15 px-4 py-3">
      {message && (
        <p className="text-sm font-medium text-[#93000a] leading-relaxed">{message}</p>
      )}
      {children}
    </div>
  )
}

export function AuthFooterLink({ href, children }) {
  return (
    <Link href={href} className="text-[#9f4127] font-semibold hover:underline">
      {children}
    </Link>
  )
}
