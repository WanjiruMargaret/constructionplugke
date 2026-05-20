
import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log('Form submitted:', formData);

    alert('Thank you! We will be in touch shortly.');

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out via WhatsApp, phone,
            or fill out the form below for a quick quote.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* WhatsApp */}
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.031 0C5.385 0 0 5.384 0 12.03c0 2.115.548 4.148 1.59 5.952L.15 24l6.196-1.625A11.96 11.96 0 0012.032 24c6.643 0 12.029-5.384 12.029-12.031C24.061 5.385 18.675 0 12.031 0zm3.87 17.202c-.596 1.68-3.033 2.035-4.223 1.838-1.258-.205-3.66-1.545-5.184-3.568-1.523-2.024-2.128-3.874-1.89-5.123.238-1.248 1.408-1.874 1.95-2.298.541-.424 1.134-.543 1.487-.145.353.398 1.082 1.503 1.258 1.83.176.326.176.678-.059 1.114-.235.436-.61.85-.94 1.19-.328.341-.692.695-.316 1.341.376.646 1.353 2.245 2.808 3.537 1.455 1.29 2.923 1.8 3.511 2.022.588.223 1.057.175 1.433-.244.376-.42 1.13-1.464 1.482-1.936.353-.472.775-.411 1.293-.205.518.206 3.292 1.554 3.857 1.836.564.281.94.42 1.082.656.14.237.14 1.086-.456 2.766z" />
                  </svg>
                </div>

                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">
                    Chat with us
                  </p>

                  <a
                    href="https://wa.me/YOUR_PHONE_NUMBER_HERE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-green-600 hover:text-green-500 transition duration-150"
                  >
                    Click to open WhatsApp
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>

                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">
                    Call us directly
                  </p>

                  <a
                    href="tel:+1234567890"
                    className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition duration-150"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 p-3 rounded-full">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>

                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">
                    Our Office
                  </p>

                  <p className="text-lg font-semibold text-gray-900">
                    123 Business Avenue, Suite 100
                    <br />
                    Cityville, ST 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Request a Quick Quote
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Project Details
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us a little about what you need..."
                  className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm resize-none focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-md text-white font-medium bg-blue-600 hover:bg-blue-700 transition duration-150"
              >
                Get Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;