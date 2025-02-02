export default function Footer() {
  return (
    <footer className="bg-[#001F3F] text-white">
      {/* Larger Upper Footer Section */}
      <div className="container mx-auto px-6 py-16 flex justify-between items-center ">
        {/* Logo */}
        <div className="text-4xl font-bold mx-40">
          <span className="text-gray-300">ANY</span>
          <span className="text-white">TECH</span>
        </div>
        {/* Navigation Links */}
        <nav className="flex space-x-6 mx-40">
          <a href="#" className="text-cyan-400 font-semibold hover:underline">
            Our Solutions
          </a>
          <a href="#" className="text-cyan-400 hover:underline">AnyCaaS</a>
          <a href="#" className="text-cyan-400 hover:underline">AnyBaaS</a>
          <a href="#" className="text-cyan-400 hover:underline">AnyPaaS</a>
        </nav>
      </div>

      {/* Smaller Lower Footer Section */}
      <div className="bg-[#091130] py-6 text-center text-sm text-gray-400 flex justify-between ">
        <span className="text-blue-500 font-semibold text-xs mx-40">©2023 All rights reserved. Any Technology Pte Ltd.</span> 
        <span className="text-blue-500 font-semibold text-xs mx-40">Privecy Policy</span>
      </div>
    </footer>
  );
}
