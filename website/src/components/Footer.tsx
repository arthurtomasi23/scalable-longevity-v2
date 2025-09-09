import React from "react";

export default function Footer() {
  return (
    <footer className="bg-secondary/10 border-t border-card-border px-6 py-12">
      <div className="mx-auto max-w-6xl flex flex-col gap-12">
        {/* Newsletter */}
        <div className="flex flex-col items-center text-center">
          <p className="text-sm text-font-secondary">
            Ready to take the next step? Join our community and start your
            journey towards better health today.
          </p>
          <h3 className="mt-2 text-lg font-semibold text-font-primary">
            Subscribe to our Newsletter
          </h3>
          <p className="mt-1 text-sm text-font-secondary">
            Stay updated with the latest news and offers.
          </p>

          <form className="mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-card-border bg-card px-5 py-3 text-sm text-font-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="cursor-pointer rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 gap-8 text-sm text-font-secondary sm:grid-cols-3">
          <div>
            <h4 className="mb-2 font-semibold text-font-primary">Contact</h4>
            <p>Email: contact@scalablelongevity.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>

          <div>
            <h4 className="mb-2 font-semibold text-font-primary">Company</h4>
            <ul className="space-y-1">
              <li>
                <a href="/about" className="hover:text-font-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-font-primary">
                  Careers
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-font-primary">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold text-font-primary">Follow Us</h4>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://twitter.com"
                  className="hover:text-font-primary"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  className="hover:text-font-primary"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="hover:text-font-primary"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom note */}
        <div className="border-t border-card-border pt-6 text-center text-xs text-font-secondary">
          © {new Date().getFullYear()} Scalably-Longevity. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
