import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="flex-grow">
      <section className="relative py-20 sm:py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent dark:from-primary/20"></div>
        <div className="container mx-auto px-6">
          <div className="relative flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-extrabold tracking-tighter text-gray-900 dark:text-white sm:text-5xl md:text-7xl">Build 7 Future Tech Projects</h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">Learn Web, AI, and Robotics by Building Real Projects</p>
            <button className="mt-8 flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-primary/40">
              <span className="truncate">Join the Course</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center gap-4 rounded-xl bg-background-light p-6 text-center shadow-sm dark:bg-background-dark/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined">laptop_chromebook</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Hands-on Learning</h3>
              <p className="text-gray-600 dark:text-gray-400">Dive into real-world projects that challenge and grow your skills.</p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-xl bg-background-light p-6 text-center shadow-sm dark:bg-background-dark/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined">code</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Cutting-edge Tools</h3>
              <p className="text-gray-600 dark:text-gray-400">Master the latest technologies and frameworks used by industry leaders.</p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-xl bg-background-light p-6 text-center shadow-sm dark:bg-background-dark/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Collaborative Community</h3>
              <p className="text-gray-600 dark:text-gray-400">Connect with peers, mentors, and experts in a supportive environment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-light/50 py-16 dark:bg-background-dark/50 sm:py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">What You'll Build</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">Get a glimpse of the innovative projects waiting for you.</p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl">
              <div className="aspect-square w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDT-ZHdQWUULgRg_8VKW86jfHkWjdCk09ESUIwTYADpcIXAQm8KAHvTdadIcvlV5erySZOd2gfAiiUmyUY-AcQg10lAoHs_aXtVU2WlPuK7pHnrfiu1OtNA6xhzEb9i63kyfFDCeFoNpSJskOj1K9Ywn7-F33Yyn-fWC0p1mYOKcJVaJCVRg_oaieIRN3YLAiGhpC-dHlkVrCxFjB1naH16DtrC6fgVQFq8mf1aOMEjmfYpaAZax1PI1bMBsSLPuuMX6fLg1w8R_NU")'}}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="font-bold">Project One</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <div className="aspect-square w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD45E1cGo6iD39Ih8I9WULD8mHxkZoC7Re83SGyTk1Pin-FGTekIsJD-o7H_tW7ULmcr7sglT-tlmKKjHn7EPL7KzK_9CxaD4B77_o2H43PlE1nGhdjqla_I0xeFWy2_d3oRN2EBD7klXCY3rePSwVR59x83spkbdxrHhTX0kv_rtfB6_I07aaTN2BA_CIYRjL80MLuEt1Kd9CWuEwMAguFwfwmcArRfltTkVRtyVpfeLiAAT_RBpSqPYKMa1ai41qyStD8cygP7q8")'}}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="font-bold">Project Two</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <div className="aspect-square w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWUCUma4LnqvBmJvsRYfQfgkbB0eiIQLkhFfzlL-7lL8k7F9VTnesTzBBeNqu9I2JJQmrhyOHZznGj64yQBGPKawMTNj4YK6o_pzpYoBE3pr0iAahsQizCNifVnizgduX1mDzZN2xesA0HS7JmJEz9-rJxVlqYJy5G_rWiQiaIXsK_nKJ1_c4APABZg3Y58E1jf8J8LdEGywR8agO11uWvcjxgdly5CM2V5vr-_fst_Mbzlzgauv6SJ_9DxfCBw9DcJl2duYG9CBc")'}}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="font-bold">Project Three</h3>
              </div>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Link to="/projects">
              <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary/20 px-4 text-sm font-bold text-primary transition-colors hover:bg-primary/30 dark:bg-primary/30 dark:text-white dark:hover:bg-primary/40">
                <span className="truncate">View All Projects</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
