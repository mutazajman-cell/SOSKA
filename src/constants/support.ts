/** SOSKA_ARCHITECTURE.md §23 — placeholder until confirmed */

export const SOSKA_SUPPORT_WHATSAPP = 'TO_BE_DEFINED';

/** Opens WhatsApp when number is defined; otherwise no-op handled in UI */
export function buildWhatsAppUrl(phoneDigits: string): string {
  const cleaned = phoneDigits.replace(/\D/g, '');
  return `https://wa.me/${cleaned}`;
}
