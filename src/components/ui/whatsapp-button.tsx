import { getWhatsAppUrl } from "@/config/company"

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#20bd5a] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 active:scale-95 sm:h-16 sm:w-16"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-8 w-8 sm:h-9 sm:w-9"
        fill="currentColor"
      >
        <path d="M16.04 3A12.92 12.92 0 0 0 5.01 22.66L3.3 29l6.49-1.7A12.96 12.96 0 1 0 16.04 3Zm0 23.74c-1.9 0-3.77-.5-5.4-1.45l-.39-.23-3.85 1.01 1.03-3.75-.25-.39a10.76 10.76 0 1 1 8.86 4.81Zm5.9-8.07c-.32-.16-1.91-.94-2.21-1.05-.3-.11-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6a9.7 9.7 0 0 1-1.79-2.23c-.19-.32-.02-.5.14-.66.15-.14.32-.38.49-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.57-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.55-.73-.56h-.62c-.22 0-.57.08-.86.4-.3.33-1.14 1.11-1.14 2.7 0 1.6 1.16 3.14 1.32 3.35.16.22 2.28 3.49 5.53 4.89.77.33 1.38.53 1.85.68.78.25 1.48.21 2.04.13.62-.09 1.91-.78 2.18-1.54.27-.75.27-1.4.19-1.54-.08-.13-.3-.21-.62-.37Z" />
      </svg>
      <span className="sr-only">WhatsApp</span>
    </a>
  )
}
