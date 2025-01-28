interface WhatsAppMessage {
  phoneNumber: string; // Nomor telepon tujuan, format internasional tanpa simbol '+'
  message: string; // Pesan yang akan dikirim
}

export const sendWhatsAppMessage = ({
  phoneNumber,
  message,
}: WhatsAppMessage): void => {
  if (!phoneNumber || !message) {
    return;
  }

  // Format nomor telepon dan pesan
  const formattedMessage = encodeURIComponent(message); // Encode pesan untuk URL
  const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${formattedMessage}`;

  // Buka URL WhatsApp API di tab baru
  window.open(url, '_blank');
};
