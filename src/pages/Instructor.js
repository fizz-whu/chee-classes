import React from 'react';

function Instructor() {
  return (
    <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <div className="md:w-1/3 flex-shrink-0">
            <div className="aspect-square w-full rounded-xl bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOv5y7yrvs77OX720qUMnT_FrMF4ecCG00S20QNjza97EJK_LpDENLRdwVXLgfuVPM4pdsXJtSKdistrZlfMukEgR7X5fFysv9kL3I3ODYjFZhsuXqiYQxd99erUcj9cnOxFGm1V6pDCT29EtnCV1oO-_JqEY1hFAsh2-3XcWRy8YzJ0MmwLlNaMUbYh3gHZeZnaSIYu7sJEjkD0eAuxWQmOxO6QezGXk8fajYqO0ULuPk6z4fthCWkDb0bJe-_vEGbqcGVoGnakY")'}}></div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Li Meijun</h1>
              <p className="text-lg font-medium text-primary">AI and Robotics Expert</p>
              <p className="text-slate-500 dark:text-slate-400">10+ years in high-tech industry</p>
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              Li Meijun is a seasoned professional with over a decade of experience in the high-tech industry, specializing in Artificial Intelligence and Robotics. Her passion lies in mentoring the next generation of developers, equipping them with the skills to tackle future tech challenges. Li's expertise spans various cutting-edge technologies, and she's worked with leading companies, contributing to groundbreaking projects.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Career Timeline</h3>
          <div className="mt-6 flow-root">
            <ul className="-mb-8">
              <li>
                <div className="relative pb-8">
                  <span aria-hidden="true" className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-slate-200 dark:bg-slate-700"></span>
                  <div className="relative flex items-start space-x-4">
                    <div>
                      <div className="relative px-1">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 ring-8 ring-background-light dark:ring-background-dark">
                          <span className="material-symbols-outlined text-primary">psychology</span>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-1.5">
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        <p className="font-semibold text-slate-800 dark:text-slate-200">AI Specialist at Tech Innovators Inc.</p>
                        <p>2018 - 2021</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-8">
                  <span aria-hidden="true" className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-slate-200 dark:bg-slate-700"></span>
                  <div className="relative flex items-start space-x-4">
                    <div>
                      <div className="relative px-1">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 ring-8 ring-background-light dark:ring-background-dark">
                          <span className="material-symbols-outlined text-primary">smart_toy</span>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-1.5">
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        <p className="font-semibold text-slate-800 dark:text-slate-200">Robotics Engineer at Automation Dynamics</p>
                        <p>2021 - 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-8">
                  <div className="relative flex items-start space-x-4">
                    <div>
                      <div className="relative px-1">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 ring-8 ring-background-light dark:ring-background-dark">
                          <span className="material-symbols-outlined text-primary">group</span>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-1.5">
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        <p className="font-semibold text-slate-800 dark:text-slate-200">Mentor at FutureForward</p>
                        <p>2023 - Present</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <blockquote className="text-xl italic text-slate-600 dark:text-slate-300">
            "The future of technology is in our hands. Let's build it together."
          </blockquote>
        </div>

        <div className="mt-16 rounded-xl bg-primary/10 p-8 text-center sm:p-12">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Ready to Learn from Meijun?
            </h2>
            <button className="flex min-w-[84px] max-w-xs cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg shadow-primary/30 transition-transform hover:scale-105">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Instructor;
