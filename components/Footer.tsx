export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h4 className="font-bold mb-4">PREMIUM Commercial</h4>
            <p className="text-sm text-gray-300">Your Trusted Partner in Real Estate Investment</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white">Real Estate Financing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Business Loans</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Fix & Flip</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Hard Money Loans</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm text-gray-300 mb-2">Call: 877 123 XXXX</p>
            <p className="text-sm text-gray-300 mb-2">Email: info@premiumcommercial.com</p>
            <p className="text-sm text-gray-300">Available 24/7</p>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-sm text-gray-400">
            © 2024 PREMIUM Commercial. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
