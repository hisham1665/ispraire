import React from "react";

function ContactUs() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Have questions or need more information? Feel free to get in touch with us!
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
        <div className="mt-10 text-center">
          <h2 className="text-xl font-semibold text-gray-700">Our Contact Details</h2>
          <p className="text-gray-600 mt-2">
            <strong>Email:</strong> contact@ieeepie2025.com
          </p>
          <p className="text-gray-600">
            <strong>Phone:</strong> +91 123 456 7890
          </p>
          <p className="text-gray-600">
            <strong>Address:</strong> IEEE Kerala Section, Technopark, Thiruvananthapuram, Kerala, India
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
