const WhatsAppButton = () => {
  const phoneNumber = "905397486886"; // Replace with your actual WhatsApp number
  const message = "ily";
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
