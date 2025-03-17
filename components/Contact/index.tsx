"use client";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="pt-15 pb-20">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
        <div className="text-center mb-15">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">Contact Us</h2>
          <p className="mx-auto max-w-3xl">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black dark:text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 rounded-lg border border-stroke bg-transparent focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded-lg border border-stroke bg-transparent focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black dark:text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-stroke bg-transparent focus:outline-none focus:border-primary"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 px-8 rounded-lg hover:bg-primary/90 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 