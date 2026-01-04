import React, { useState } from "react";
import { Mail, Phone, MessageCircle, User } from "lucide-react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage("");

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setIsSubmitting(false);
      setSubmissionMessage(
        "Please fill out all required fields (Name, Email, Message)."
      );
      return;
    }

    // EmailJS configuration - Replace with your actual IDs
    const serviceId = "your_service_id"; // Replace with your EmailJS service ID
    const templateId = "your_template_id"; // Replace with your EmailJS template ID
    const publicKey = "your_public_key"; // Replace with your EmailJS public key

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      to_email: "mondalsaikatkumar@gmail.com",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setIsSubmitting(false);
        setSubmissionMessage(
          "Thank you for your message! We will be in touch soon."
        );
        setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setIsSubmitting(false);
        setSubmissionMessage("Failed to send message. Please try again later.");
      });
  };
  // Helper component for the unique input style
  const CustomInput = ({
    id,
    label,
    type = "text",
    required = false,
    icon: Icon,
  }) => (
    <div className="flex flex-col mb-10">
      <label
        htmlFor={id}
        className="text-xs uppercase tracking-widest font-medium text-black mb-1 flex items-center"
      >
        {Icon && <Icon size={12} className="mr-2 opacity-70" />}
        {label}
        {required && <span className="text-red-600 ml-1">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          value={formData[id]}
          onChange={handleChange}
          required={required}
          rows="5"
          className="w-full mt-1 p-2 text-sm border border-black focus:outline-none focus:ring-1 focus:ring-black/50 transition duration-150 ease-in-out resize-none rounded-sm"
          aria-label={label}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={formData[id]}
          onChange={handleChange}
          required={required}
          className="w-full mt-1 pb-1 text-sm border-b border-black focus:outline-none focus:border-black/50 focus:ring-0 transition duration-150 ease-in-out bg-transparent"
          aria-label={label}
        />
      )}
    </div>
  );

  return (
    // Outer container with light background and full viewport height
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4 sm:p-8 font-['Inter']">
      {/* Centered content area - Max width based on image layout */}
      <div className="w-full max-w-2xl text-center">
        {/* Title Box */}
        <div className="inline-block border border-black px-6 py-2 mb-8 rounded-sm">
          <h1 className="text-xl sm:text-2xl font-normal uppercase tracking-widest text-black">
            Contact
          </h1>
        </div>

        {/* Description Text */}
        <p className="text-sm text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est.
        </p>

        {/* Separator Line */}
        <div className="flex justify-center items-center mb-8 sm:mb-16">
          <span className="w-4 h-px bg-black mx-1"></span>
          <span className="w-2 h-px bg-black mx-1"></span>
          <span className="w-4 h-px bg-black mx-1"></span>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="w-full text-left px-2 sm:px-0">
          <CustomInput
            id="name"
            label="Enter Your Name"
            required={true}
            icon={User}
          />

          <CustomInput
            id="email"
            label="Enter Your Email"
            type="email"
            required={true}
            icon={Mail}
          />

          <CustomInput
            id="phone"
            label="Phone Number"
            type="tel"
            required={false}
            icon={Phone}
          />

          <CustomInput
            id="message"
            label="Your Message"
            type="textarea"
            required={true}
            icon={MessageCircle}
          />

          {/* Submission Feedback/Loading */}
          {isSubmitting && (
            <div className="text-center mt-6 text-sm text-gray-500 animate-pulse">
              Sending message...
            </div>
          )}
          {submissionMessage && (
            <div
              className={`text-center mt-6 text-sm font-semibold p-3 rounded-md ${
                submissionMessage.includes("Thank you")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {submissionMessage}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center items-center mt-8 sm:mt-12">
            <span className="h-4 w-px bg-black mx-4"></span>
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-sm uppercase tracking-widest font-normal text-black transition duration-300 ease-in-out hover:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit
            </button>
            <span className="h-4 w-px bg-black mx-4"></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
