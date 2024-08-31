const Contact = () => (
  <div className="page-content">
    <h1>Bize Ulaşın</h1>
    <img
      src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=1000&q=80"
      alt="Tekstil Stüdyosu"
      className="feature-image"
    />
    <p>
      Yeni projeler, yaratıcı fikirler veya vizyonunuzun bir parçası olma
      fırsatlarını tartışmaya her zaman hevesliyiz.
    </p>
    <div className="contact-info">
      <p>
        E-posta: <a href="mailto:info@winteks.com">info@winteks.com</a>
      </p>
      <p>Telefon: +90 (123) 456-7890</p>
      <p>
        Adres:{" "}
        <a
          href="https://www.google.com/maps?q=123+Tekstil+Sokak,+Kumaş+Şehri,+12345,+Türkiye"
          target="_blank"
          rel="noopener noreferrer"
        >
          123 Tekstil Sokak, Kumaş Şehri, 12345, Türkiye
        </a>
      </p>
    </div>
    <p>
      En son koleksiyonlarımızı keşfetmek ve tekstil ihtiyaçlarınızı
      uzmanlarımızla görüşmek için showroom'umuzu ziyaret edin.
    </p>
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-73.123456!3d40.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDA3JzI0LjQiTiA3M8KwMDcnMjQuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
);
export default Contact;
