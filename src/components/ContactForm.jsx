"use client";

import { useState } from "react";
import "@/styles/css/contact-form.css";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSeVhXNRJ_TcgYZt5MabruKA5wNClBxqmbIhrxNECLUK0_Kxvw/formResponse`;

      const params = new URLSearchParams({
        "entry.1113798141": formData.name,
        "entry.338671399": formData.email,
        "entry.1228627290": formData.subject,
        "entry.86593897": formData.message,
      });

      await fetch(`${formUrl}?${params.toString()}`, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      // Always assume success due to `no-cors`
      setShowSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsModalOpen(false);
    } catch (error) {
      setErrorMessage("Oops! Something went wrong. Please try again.");
      setShowError(true);
      console.error("Form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <button className="_btn-connect" onClick={() => setIsModalOpen(true)}>
        Send a Message....
      </button>

      {/* Contact Form Modal */}
      {isModalOpen && (
        <div className="_modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="_modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="_modal-header">
              <div>
                <h2>Contact Me</h2>
                <p>Send us a message and we'll get back to you ASAP.</p>
              </div>
              <button
                className="_btn-close"
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="_contact-form">
              <div className="_form-row">
                <div className="_form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="_form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="_form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="What is this regarding?"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="_form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  placeholder="Tell us more..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                  disabled={isSubmitting}
                  rows="4"
                />
              </div>

              <div className="_form-actions">
                <button
                  type="button"
                  className="_btn-secondary"
                  onClick={() => setIsModalOpen(false)}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="_btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="_spinner"></span> Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div className="_modal-overlay" onClick={() => setShowSuccess(false)}>
          <div className="_success-modal" onClick={(e) => e.stopPropagation()}>
            <div className="_success-icon">✓</div>
            <h3>Message Sent Successfully!</h3>
            <p>Thank you! I’ll reply as soon as I can.</p>
            <button
              className="_btn-primary"
              onClick={() => setShowSuccess(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showError && (
        <div className="_modal-overlay" onClick={() => setShowError(false)}>
          <div
            className="_success-modal"
            onClick={(e) => e.stopPropagation()}
            style={{ border: "1px solid #dc2626" }}
          >
            <div className="_success-icon" style={{ background: "#dc2626" }}>
              !
            </div>
            <h3>Submission Failed</h3>
            <p>{errorMessage}</p>
            <button
              className="_btn-primary"
              onClick={() => setShowError(false)}
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </>
  );
}
