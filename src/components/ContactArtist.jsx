import React, { useState } from 'react';

const ContactArtist = () => {
  // State for form input fields, file upload, and success message
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [file, setFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState(false); // Track form submission status

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // You can implement the logic to send the form data and file to the artist here
    console.log('Form Submitted:', formData);
    console.log('Uploaded File:', file);
    
    // Show the success message after form submission
    setSuccessMessage(true);

    // Clear form fields after submission (optional)
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setFile(null);
  };

  return (
    <div className="contact-artist">
      <h1>Contact the Artist</h1>
      <p>Fill out the form below to get in touch with the artist.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-container">
          {/* Name Input */}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Message Input */}
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Image Upload */}
          <div className="form-group">
            <label htmlFor="file">Upload Image:</label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>

          {/* Submit Button */}
          <button type="submit">Send Message</button>
        </div>
      </form>

      {/* Display success message */}
      {successMessage && (
        <div className="success-message">
          <p>Thank you for your message! The artist will get back to you soon.</p>
        </div>
      )}
    </div>
  );
};

export default ContactArtist;
