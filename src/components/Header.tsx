import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, Download, X, Mail, CheckCircle2 } from 'lucide-react';

const GOOGLE_SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzRK0NmLhmWHAUDrwW0GclMY7fnUfMk0aSwTkIEheXnQwx5LL48EzAJf7AmfV_WRQk5/exec'; // replace with your deployed URL

const Header = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleResumeClick = () => {
    setError('');
    setEmail('');
    setSubmitted(false);
    setShowModal(true);
  };
  
  const handleSubmitEmail = async () => {
  if (!isValidEmail(email)) {
    setError('Please enter a valid email address');
    return;
  }

  setIsSubmitting(true);
  setError('');

  try {
    const formData = new URLSearchParams();
    formData.append('email', email);

    await fetch(GOOGLE_SHEET_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors', // Apps Script doesn't return CORS headers by default
      body: formData,
    });
  } catch (err) {
    console.error('Failed to log email:', err);
    // Still show success to the user — we don't want to expose backend issues,
    // and the request may have gone through despite the no-cors read error
  } finally {
    setIsSubmitting(false);
    setSubmitted(true);
  }
};
  // const handleSubmitEmail = async () => {
  //   if (!isValidEmail(email)) {
  //     setError('Please enter a valid email address');
  //     return;
  //   }

  //   setIsSubmitting(true);
  //   setError('');

  //   try {
  //     await fetch(GOOGLE_SHEET_ENDPOINT, {
  //       method: 'POST',
  //       mode: 'no-cors', // Apps Script doesn't return CORS headers by default
  //       headers: { 'Content-Type': 'text/plain' },
  //       body: JSON.stringify({ email }),
  //     });
  //   } catch (err) {
  //     console.error('Failed to log email:', err);
  //     // Still show success to the user — we don't want to expose backend issues,
  //     // and the request may have gone through despite the no-cors read error
  //   } finally {
  //     setIsSubmitting(false);
  //     setSubmitted(true);
  //   }
  // };

  const closeModal = () => {
    setShowModal(false);
    setSubmitted(false);
    setEmail('');
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-gray-900">
            <Code2 className="h-8 w-8 text-blue-600" />
            <span>Portfolio</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/skills"
              className={`text-sm font-medium transition-colors ${
                isActive('/skills')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Skills
            </Link>
            <Link
              to="/projects"
              className={`text-sm font-medium transition-colors ${
                isActive('/projects')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact
            </Link>
            <button
              onClick={handleResumeClick}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={handleResumeClick}
              className="flex items-center space-x-2 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span className="text-sm font-medium">Resume</span>
            </button>
          </div>
        </div>
      </div>

      {/* Email capture modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={() => !isSubmitting && closeModal()}
        >
          <div
            className="bg-white rounded-xl shadow-xl w-full max-w-sm p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label="Close"
              disabled={isSubmitting}
            >
              <X className="h-5 w-5" />
            </button>

            {!submitted ? (
              <>
                <div className="flex items-center space-x-2 mb-2">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Get my resume</h2>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Drop your email and I'll personally send my resume your way.
                </p>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSubmitEmail();
                  }}
                  placeholder="you@example.com"
                  disabled={isSubmitting}
                  className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 disabled:opacity-60 ${
                    error
                      ? 'border-red-400 focus:ring-red-300'
                      : 'border-gray-300 focus:ring-blue-400'
                  }`}
                  autoFocus
                />
                {error && <p className="text-xs text-red-500 mt-1">{error}</p>}

                <button
                  onClick={handleSubmitEmail}
                  disabled={isSubmitting}
                  className="mt-4 w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60"
                >
                  <Mail className="h-4 w-4" />
                  <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
                </button>
              </>
            ) : (
              <div className="text-center py-4">
                <CheckCircle2 className="h-10 w-10 text-green-600 mx-auto mb-3" />
                <h2 className="text-lg font-semibold text-gray-900 mb-1">Thanks!</h2>
                <p className="text-sm text-gray-600">
                  I've got your email - I'll personally send over my resume shortly.
                </p>
                <button
                  onClick={closeModal}
                  className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;