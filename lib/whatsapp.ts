// Put the real number here (country code, no + or spaces).
export const WHATSAPP_NUMBER = "2349038256389";

export function waLink(message = "Hi Hay Bee Concepts! I would like to place an order.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
