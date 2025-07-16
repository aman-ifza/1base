import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Dashboard', icon: '🏠' },
  { to: '/brand-generator', label: 'Brand Generator', icon: '🧬' },
  { to: '/playground', label: 'Playground', icon: '🎨' },
  { to: '/assets', label: 'Assets Library', icon: '📦' },
  { to: '/style-guide', label: 'Style Guide', icon: '📖' },
];

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-20 bg-gradient-to-b from-purple-900 via-purple-800 to-purple-700 flex flex-col items-center py-6 shadow-xl z-40">
      <div className="mb-8">
        <span className="text-white text-2xl font-extrabold">1</span>
        <span className="text-purple-300 text-xl font-bold">base</span>
      </div>
      <nav className="flex flex-col gap-6 mt-4">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center text-lg font-semibold transition text-purple-200 hover:text-white ${isActive ? 'text-white' : ''}`
            }
            title={item.label}
          >
            <span className="text-2xl mb-1">{item.icon}</span>
            <span className="text-xs">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
} 