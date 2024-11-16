"use client";
import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [flashMessage, setFlashMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors and flash message
    setErrors({});
    setFlashMessage(null);

    // Validate form
    const newErrors: { [key: string]: string } = {};
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    setErrors(newErrors);

    // If there are errors, do not proceed
    if (Object.keys(newErrors).length > 0) return;

    // Submit form (mock)
    try {
      // Replace with your API call logic
      await new Promise((resolve) => setTimeout(resolve, 500)); // Mock API delay
      setFlashMessage("Your message has been sent successfully!");
      setFormData({ email: "", subject: "", message: "" }); // Reset form
    } catch (error) {
      setFlashMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>

        {/* Flash Message */}
        {flashMessage && (
          <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
            {flashMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`shadow-sm bg-gray-50 border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="name@example.com"
              required
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>

          {/* Subject Input */}
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`block p-3 w-full text-sm rounded-lg bg-gray-50 border shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                errors.subject ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Let us know how we can help you"
              required
            />
            {errors.subject && (
              <span className="text-red-500 text-sm">{errors.subject}</span>
            )}
          </div>

          {/* Message Textarea */}
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className={`block p-2.5 w-full text-sm rounded-lg shadow-sm bg-gray-50 border dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Leave a comment..."
              required
            />
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-indigo-700 sm:w-fit hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
