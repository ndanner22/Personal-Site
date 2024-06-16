export default function ContactPage() {
  return (
    <div className="contact-container">
      <h2 className="title">Contact Page</h2>
      <form className="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            // value={formData.name}
            // onChange={handleChange}
            required
          />
        </div>
      </form>
    </div>
  );
}
