import React from 'react';

function Pricing() {
  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Choose Your Learning Path</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Invest in your future. Start building real-world projects today.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Standard Course</h3>
            <p className="mt-4 text-slate-600 dark:text-slate-400">All the essentials to get you started on your tech journey.</p>
            <div className="mt-6">
              <span className="text-5xl font-extrabold text-slate-900 dark:text-white">$499</span>
              <span className="text-lg font-medium text-slate-500 dark:text-slate-400"> one-time</span>
            </div>
            <a className="mt-8 block w-full text-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 py-3 rounded-lg font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" href="#">
              Enroll Now
            </a>
            <ul className="mt-8 space-y-4 text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                7 hands-on projects
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                After-class Q&amp;A sessions
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                Lifetime Discord access
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                Certificate of completion
              </li>
            </ul>
          </div>

          <div className="relative bg-white dark:bg-slate-900/50 p-8 rounded-xl border-2 border-primary">
            <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">Most Popular</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Mentorship Upgrade</h3>
            <p className="mt-4 text-slate-600 dark:text-slate-400">Accelerate your learning with personalized guidance.</p>
            <div className="mt-6">
              <span className="text-5xl font-extrabold text-slate-900 dark:text-white">$699</span>
              <span className="text-lg font-medium text-slate-500 dark:text-slate-400"> one-time</span>
            </div>
            <a className="mt-8 block w-full text-center bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors" href="#">
              Enroll Now
            </a>
            <ul className="mt-8 space-y-4 text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-3 font-semibold text-slate-800 dark:text-slate-200">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                Everything in Standard, plus:
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                3 one-on-one mentorship sessions
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          <div className="mt-8 max-w-2xl mx-auto space-y-4">
            <details className="p-4 rounded-lg bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 group" open>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="font-medium text-slate-900 dark:text-white">What is your refund policy?</h3>
                <div className="text-slate-500 group-open:rotate-180 transition-transform">
                  <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </summary>
              <p className="mt-4 text-slate-600 dark:text-slate-400">We offer a 14-day full refund policy. If you're not satisfied with the course within the first two weeks, you can request a full refund, no questions asked.</p>
            </details>

            <details className="p-4 rounded-lg bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 group">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="font-medium text-slate-900 dark:text-white">Are there any prerequisites for this course?</h3>
                <div className="text-slate-500 group-open:rotate-180 transition-transform">
                  <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </summary>
              <p className="mt-4 text-slate-600 dark:text-slate-400">A basic understanding of HTML, CSS, and JavaScript is recommended but not strictly required. The course is designed to be accessible to motivated beginners.</p>
            </details>

            <details className="p-4 rounded-lg bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 group">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="font-medium text-slate-900 dark:text-white">How much time commitment is required?</h3>
                <div className="text-slate-500 group-open:rotate-180 transition-transform">
                  <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </summary>
              <p className="mt-4 text-slate-600 dark:text-slate-400">We recommend setting aside 5-10 hours per week. This includes watching lessons, working on projects, and participating in Q&amp;A sessions. You can learn at your own pace.</p>
            </details>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg text-slate-800 dark:text-slate-200">"This course changed my career. The hands-on projects gave me the confidence to land my dream job."</p>
          <p className="mt-2 font-semibold text-slate-600 dark:text-slate-400">- Alex Johnson, Software Engineer</p>
        </div>
      </div>
    </main>
  );
}

export default Pricing;
