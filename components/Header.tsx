export default function Header() {
  return (
    <>
      {/* Social Bar */}
      <div className="bg-red-600 text-white py-2 px-4">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex gap-3">
            {['f', 't', 'in', 'ig', 'yt'].map((icon) => (
              <a key={icon} href="#" className="hover:opacity-80">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-slate-900 text-white py-4">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-500 rounded px-2 py-1">
              <span className="font-bold text-sm">P</span>
            </div>
            <span className="font-bold text-lg">PREMIUM Commercial</span>
          </div>
          
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-blue-400">HOME</a>
            <a href="#" className="hover:text-blue-400">ABOUT</a>
            <a href="#" className="hover:text-blue-400">REAL ESTATE FINANCING</a>
            <a href="#" className="hover:text-blue-400">BUSINESS LOANS</a>
            <a href="#" className="hover:text-blue-400">APPLY ONLINE</a>
            <a href="#" className="hover:text-blue-400">CONTACT</a>
          </nav>

          <div className="text-right text-sm">
            <p className="font-bold">Call Now: 877 123 XXXX</p>
          </div>
        </div>
      </header>
    </>
  )
}
