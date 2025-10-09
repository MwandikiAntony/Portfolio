import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Link from 'next/link';

const Navbar = () => {
  const { darkMode, toggle } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <div className="text-xl font-bold text-gray-900 dark:text-white">Tonio</div>
      <div className="flex items-center space-x-6 text-gray-700 dark:text-gray-300 font-medium">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/blog">Blog</Link>

        <button onClick={toggle} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
