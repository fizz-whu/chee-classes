import React from 'react';

function Footer() {
  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm">
            <a className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">About</a>
            <a className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">Contact</a>
            <a className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">Privacy Policy</a>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 FutureTech Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
