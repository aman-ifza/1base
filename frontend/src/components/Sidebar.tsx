import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Dashboard', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6m-6 0v6m0 0H7m6 0h6" /></svg>
  ) },
  { to: '/brand-generator', label: 'Brand Generator', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
  ) },
  { to: '/playground', label: 'Playground', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8" /></svg>
  ) },
  { to: '/assets', label: 'Assets Library', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="7" width="18" height="13" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3v4M8 3v4" /></svg>
  ) },
  { to: '/style-guide', label: 'Style Guide', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
  ) },
];

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-20 bg-gradient-to-b from-purple-900 via-purple-800 to-purple-700 flex flex-col items-center py-6 shadow-xl z-40 border-r border-purple-800">
      <div className="mb-10 flex flex-col items-center">
        <span className="text-white text-2xl font-extrabold">1</span>
        <span className="text-purple-300 text-xl font-bold">base</span>
      </div>
      <nav className="flex flex-col gap-6 mt-4 w-full">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center py-3 w-full transition group ${isActive ? 'bg-purple-800 text-white shadow-lg' : 'text-purple-200 hover:bg-purple-800 hover:text-white'}`
            }
            title={item.label}
          >
            <span className="mb-1">{item.icon}</span>
            <span className="text-xs font-medium tracking-wide group-hover:text-white group-focus:text-white">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
} 