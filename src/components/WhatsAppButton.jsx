const WhatsAppButton = () => {
  const phoneNumber = "905123456789"; // Replace with your actual WhatsApp number
  const message = "Merhaba, bilgi almak istiyorum."; // Replace with your default message

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button className="whatsapp-button" onClick={handleClick}>
      <i className="fab fa-whatsapp"></i>
    </button>
  );
};

export default WhatsAppButton;
