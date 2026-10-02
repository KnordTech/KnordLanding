import { motion } from 'motion/react';
import { openWhatsApp } from '../../lib/whatsapp.js';

export default function WhatsAppButton() {
  return (
    <motion.button
      type="button"
      onClick={() => openWhatsApp()}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2 }}
      className="fixed bottom-[calc(env(safe-area-inset-bottom,0px)+20px)] right-5 z-50 flex items-center gap-2 rounded-full border-0 bg-[#25D366] py-3 pl-3 pr-4 text-[14px] font-semibold text-[#0b2e17] shadow-[0_14px_30px_-12px_rgba(18,140,70,0.7)]"
      aria-label="Chat with us on WhatsApp"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.86 9.86 0 0012.04 2zm5.8 14.13c-.25.69-1.44 1.32-1.98 1.37-.5.05-1.13.07-1.83-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.36-.14-.2-1.18-1.57-1.18-3s.75-2.13 1.02-2.42c.27-.3.58-.37.78-.37h.56c.18 0 .42-.07.66.5.25.6.84 2.04.91 2.19.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.45.52-.15.15-.3.31-.13.6.17.3.77 1.27 1.65 2.06 1.14 1.01 2.1 1.33 2.4 1.48.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.39-.25.66-.15.27.1 1.72.81 2.01.96.3.15.5.22.57.35.07.12.07.72-.18 1.4z"
        />
      </svg>
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </motion.button>
  );
}
