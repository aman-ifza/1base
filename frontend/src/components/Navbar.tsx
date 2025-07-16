export default function Navbar() {
  return (
    <header className="fixed top-0 left-20 right-0 h-16 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 flex items-center justify-between px-8 shadow z-30">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-white text-2xl font-extrabold">1</span>
        <span className="text-purple-300 text-xl font-bold">base</span>
      </div>
      {/* User Actions */}
      <div className="flex items-center gap-6">
        <button className="text-purple-200 hover:text-white font-semibold">Login</button>
        <button className="text-purple-200 hover:text-white font-semibold">Sign Up</button>
        <button className="text-purple-200 hover:text-white text-xl">⚙️</button>
      </div>
    </header>
  );
} 