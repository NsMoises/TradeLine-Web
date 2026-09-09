export const company = {
  name: "Tradeline Logistic",
  shortName: "Tradeline",
  taxId: "20616337166",
  location: "Jr. Matarani 108, Surco - Lima, Perú",
  email: "ventas@globallogistics.com",
  whatsappNumber: "51933138469",
  whatsappDisplay: "+51 933 138 469",
  whatsappMessage: "Hola, quiero cotizar un envío internacional.",
}

export function getWhatsAppUrl(message = company.whatsappMessage) {
  return `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`
}
