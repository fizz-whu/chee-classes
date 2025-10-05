import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-4">
          <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor"></path>
          </svg>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">FutureTech Academy</h2>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" to="/">Home</Link>
          <Link className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" to="/projects">Projects</Link>
          <Link className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" to="/instructor">Instructor</Link>
          <Link className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" to="/pricing">Pricing</Link>
          <Link className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" to="/community">Community</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex px-4 py-2 text-sm font-bold text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors">Enroll Now</button>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBDgc3__j7-zMz-uxfuhBaeqVrHUuqpgvjwJwpG6VIKCw1PYn9B0dykFOO7p7lxh1Hl2Uun5rojQtaAGNR6Xu7Ef3NDRrvw5pdRs2kdMmTvL5pzP47C1yT0QlhMtNRkny9E9g21hi2420NgBCxphUzLuB12YCmWAeba98UTtLuDgYL1qTTUuhtvIElYVrDpJ2PRjOxq431kMQgfGKgjLzkLKows72g8l64-HkQxVjjymyzJuKb7AoCcVFQvUt8zAE3oQwP2O0foDHM")'}}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
