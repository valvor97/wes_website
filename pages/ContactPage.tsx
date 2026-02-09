import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Footer from '../components/Footer';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const serviceOptions = [
  'Live Event Performance',
  'Studio Session Work',
  'Music Production',
  'Drum Lessons',
  'Corporate Event',
  'Wedding / Private Event',
  'Other',
];

const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('sending');
    setErrorMessage('');

    const formData = new FormData(event.currentTarget);
    formData.append('access_key', '51965888-c104-4118-a390-7e73cc315d25');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        (event.target as HTMLFormElement).reset();
      } else {
        setFormStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setFormStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <div className="min-h-screen">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-neutral-800">
        <div className="container mx-auto px-6 flex items-center justify-between h-20">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#bf953f] transition-colors duration-200 text-xs uppercase tracking-widest font-mono min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <Link
            to="/"
            className="text-xl font-bold text-gradient-gold font-syne"
          >
            WESLEY ANDERSON
          </Link>
          <div className="w-[72px]" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <div className="container mx-auto px-6 py-20 sm:py-32">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-16 sm:mb-20"
            >
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-none mb-6">
                GET IN{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] to-[#fcf6ba]">
                  TOUCH
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-neutral-400 font-light max-w-lg">
                Ready to elevate your next event? Fill out the form below and Wes will get back to you within 24 hours.
              </p>
            </motion.div>

            {/* Form */}
            {formStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-20"
              >
                <CheckCircle className="w-16 h-16 text-[#bf953f] mx-auto mb-6" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Message Sent!
                </h2>
                <p className="text-neutral-400 text-lg mb-10 max-w-md mx-auto">
                  Thanks for reaching out. Wes will get back to you within 24 hours.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-[#bf953f] uppercase tracking-widest text-sm font-bold hover:text-white transition-colors duration-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="border-b border-[#bf953f] pb-px hover:border-white">
                    Back to Home
                  </span>
                </Link>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={onSubmit}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="space-y-8"
              >
                {/* Honeypot for spam protection */}
                <input type="checkbox" name="botcheck" className="hidden" />

                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-xs uppercase tracking-widest text-neutral-500 font-mono mb-3"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first_name"
                      required
                      placeholder="John"
                      className="w-full bg-transparent border-b border-neutral-700 text-white text-lg py-3 px-0 placeholder:text-neutral-700 focus:outline-none focus:border-[#bf953f] transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-xs uppercase tracking-widest text-neutral-500 font-mono mb-3"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last_name"
                      required
                      placeholder="Doe"
                      className="w-full bg-transparent border-b border-neutral-700 text-white text-lg py-3 px-0 placeholder:text-neutral-700 focus:outline-none focus:border-[#bf953f] transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-widest text-neutral-500 font-mono mb-3"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-neutral-700 text-white text-lg py-3 px-0 placeholder:text-neutral-700 focus:outline-none focus:border-[#bf953f] transition-colors duration-300"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs uppercase tracking-widest text-neutral-500 font-mono mb-3"
                  >
                    Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full bg-transparent border-b border-neutral-700 text-white text-lg py-3 px-0 focus:outline-none focus:border-[#bf953f] transition-colors duration-300 cursor-pointer appearance-none"
                  >
                    <option value="" disabled className="bg-[#0a0a0a] text-neutral-500">
                      Select a service...
                    </option>
                    {serviceOptions.map((service) => (
                      <option
                        key={service}
                        value={service}
                        className="bg-[#0a0a0a] text-white"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-widest text-neutral-500 font-mono mb-3"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell Wes about your event, project, or idea..."
                    className="w-full bg-transparent border-b border-neutral-700 text-white text-lg py-3 px-0 placeholder:text-neutral-700 focus:outline-none focus:border-[#bf953f] transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Error Message */}
                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 text-red-400 text-sm"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="group relative inline-flex items-center justify-center min-h-[48px] min-w-[160px] px-12 py-6 overflow-hidden font-bold text-black transition-all duration-200 ease-out border-2 border-[#bf953f] rounded-full shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#bf953f] group-hover:translate-x-0 ease group-disabled:translate-x-0">
                      {formStatus === 'sending' ? (
                        <svg
                          className="w-6 h-6 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-[#bf953f] transition-all duration-300 transform group-hover:translate-x-full ease group-disabled:opacity-0">
                      {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                    </span>
                    <span className="relative invisible">
                      {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                    </span>
                  </button>
                </div>
              </motion.form>
            )}
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default ContactPage;
