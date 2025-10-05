import React from 'react';

function Community() {
  return (
    <main className="flex-grow">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Keep Learning Together</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Connect with fellow learners and instructors to continue your learning journey beyond the classroom.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white/5 p-6 dark:bg-black/10">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Join our Discord</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Engage with a vibrant community, share insights, and collaborate on projects.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 dark:bg-black/10">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Weekly Q&amp;A Sessions</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Get live feedback from instructors and learn from your peers' experiences.</p>
          </div>
          <div className="rounded-lg bg-white/5 p-6 dark:bg-black/10">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Showcase Your Progress</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Share milestones, receive feedback, and celebrate your achievements.</p>
          </div>
        </div>

        <div className="mt-12 rounded-xl overflow-hidden shadow-2xl shadow-primary/20">
          <div className="w-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB74Ld7G7pXYSGQXHLI1nedJY00EbcTnDbTcJbGNebfRp-M7RQkGRvsm1AQEJnRLyieuqs_JTmEbisXIIJ29RcAjIjZ3VR0spWAUO_EKnYDkVx25aF6gN7ImOfjd5_CLO26ts3tDDY04ZgASOFw8W-8kZkUolfRljNPTO1VobOhDrHYHM1bTT2MrknnRSLaxKvLg-WTbX9jE0Y1Z4yWxSh6czbhz6U15MDmWdr8B8lE_mqo_DG_f1urgIhEP9MhXxwY0TuzLKQlF8A")', aspectRatio: '16/9'}}></div>
        </div>

        <div className="mt-12 text-center">
          <button className="rounded-lg bg-primary px-8 py-3 text-lg font-bold text-white transition-transform hover:scale-105">Join the Community</button>
        </div>
      </div>
    </main>
  );
}

export default Community;
