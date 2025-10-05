import React from 'react';

const projectsData = [
  {
    id: 1,
    title: "AI Chatbot with LLMs",
    description: "Develop an intelligent chatbot using Large Language Models (LLMs) for natural language processing and conversational AI.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHgdS5At3aK7AydAPEE0PQhF4yYGyS6N5ODJYPD_oNlqBMYba8CS842ul0AzkXlknNwVozsQWt5P4ZONkpEuAmGt7673y4wxGUxxL7syb7hyIMBA0fDCyxi9xOu9W1SEBKmL2X4MSkkarC1zhm8Ko1op7Vr49_QPANH1oojM9klClCSPKk_QfngvOPQrU8Gejzl4yEbcI0vudy8kQfNjafsQVVNwmrFhVwTvgq5iSlpaibWJmC6sapvcfI1GgE0K1WR4VjcJ6Pfbk",
    category: "AI",
    icon: "psychology",
    tags: ["React", "Python", "TensorFlow"]
  },
  {
    id: 2,
    title: "Full-Stack Web App",
    description: "Build a modern, responsive web application using Next.js, React, and a backend framework for a complete full-stack experience.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbsx5vqzDn6A8We2ELq8_0R27_4m2Ho9rRz_T4PX7_3QxAPEZsYAhklr4zF3CBBRwD9R6PoTOVEy6DGFX5FFwMhgCFUmZnufrzSiIU5_5FtTErp7PNgkjofrXnLZtevrAYGhSvQ354fknhdAOYjN_tIQ7J28J5QBRODSZHY3R7VhfHO7IOXvgq8quH_7kOYcCNristli3CAtaJ7q0DgpflpQE1XZFcoUA7mC0c7BpJ6lsStmFPXVpOIuBDcBuTujMeWvFdZFJfu4s",
    category: "Web",
    icon: "code",
    tags: ["Next.js", "React", "Node.js"]
  },
  {
    id: 3,
    title: "Voice-Controlled Robot",
    description: "Create a robot that responds to voice commands, integrating speech recognition and robotics control.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5Q1ux-vviuAAjFcLK3fbGU2qAs7zcpfN8S6WLVQrr1hE0K3aKa6dAM5YjpS-75Cma00i-TqlXBpIMQJptCoEnAJljATc_90bkXzTGRp8RxHgW1p9BGK82Mg0XvAPqFUnfLFn-dWiPOChhyycIcfkUjw9UUbHLh9n-FIGR2EglMqQaPPQaHRHuHG0rieekjEQqB52tqj0-pxiV3-300--nG7Yt5LAPiXrkw_2W9_ejJNNiUlYaD8v8cwkc-cy087xOni24YH9v-3Q",
    category: "Robotics",
    icon: "smart_toy",
    tags: ["Python", "ROS", "Robotics"]
  },
  {
    id: 4,
    title: "Computer Vision Drone Tracker",
    description: "Design a drone system that uses computer vision to track and follow objects in real-time.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwoiq0t1Uj8D4o3GAasDtj-4mSb0T_ADS2hn6lxw6NMTGJDli1SiDyDjcbz6jA_4vuAcHN1g__6tSxgsdnQSgBlQF7ckqNia4a4eWCudg9s6ysYUy4t6X7p1C9D_ddcQMAWIrLnozXOwCDsc4kuDY6WAuie6xyCiTOgXaOvalinbyF5rmkaRhHx8yM2hTU8gUnz7O-E2qQMP6c1TXliLyr1sA8_5bRRt4q4Wm6hm-Z7ND98kr1TJfPbJyoNr0NeVpAH2E0B4kgQF8",
    category: "AI",
    icon: "track_changes",
    tags: ["Python", "OpenCV", "DroneKit"]
  },
  {
    id: 5,
    title: "Smart IoT Sensor Dashboard",
    description: "Develop a dashboard to monitor and control IoT sensors, collecting and visualizing data from the physical world.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnC14VCzpoqnvLUrh0EyI2M7WmuNpXPwT7ezhnZhCHaPqfOveJqkpm6aRWRI0hBc9qK5uC3aqbtet83yg7eyog0xHl8ER-M1G7Y4qQvJvWx2wL61VaRt5MMKNtkOcsuHwUNmmTfwya0Pay3cs432vLX69HngRzI8m1BnCZKRocyRqCPd-QRrFix-qdvUQcE6KqzkJpoOEhIDMBBGfZbmRwmmHrYOGYbzhu5i2UTepo4nn6kXpINEgy-mtQMZxMzEPT93OB7uhhmZg",
    category: "IoT",
    icon: "sensors",
    tags: ["IoT", "Python", "Data Viz"]
  },
  {
    id: 6,
    title: "AR Experience with WebXR",
    description: "Build an augmented reality (AR) experience using WebXR, allowing users to interact with virtual objects in their physical environment.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkFJBH-j6d9mNEHiQvQlORZ4Xu1vi47j4I03g3eO0Ftb2cpBei1ZZlzXi_b5Oyhz75ngJYVvfgh69LmTnhTD8O5teNqrF665EkqOzRpc4EwqofgjVXjf5Yh8fqyQSVppmc86zO8MekNi6zFx2Z7idHJQD_q0RSzRMLJvSh1iQ3dlXzJjhXtv6-XLNcCnNBqqBeabaxgpqHLE50IlHy09js6F1XvRmfuCYORo7eLU9pPnA5t2xHUj7jG8PXzBgtYD3lZ5CGjcb-T2A",
    category: "Web",
    icon: "view_in_ar",
    tags: ["WebXR", "JS", "Three.js"]
  },
  {
    id: 7,
    title: "Autonomous Car Simulation",
    description: "Simulate an autonomous car system, implementing algorithms for navigation, object detection, and decision-making.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqQz8JC_hcm5J5Fnaf-pglroqSUE-px3nRyjH6T3U1QRH2heqmbIoRKP2m7K7-CYP9FS-sUbcLgaDDQ4dDRpd5eBYuJ_kgjFHtTi9Fn0EYwZiKUshwTq7-dqRn_fI8IbYaFiq2Akgs4FPUaoi5y8uyIJVO4jhbQwrQLdfOyusFtHzrO3eBHBmDqUoSa-wi-51Q1c2UdQLXsmM6G0gQlsYOV4-5nkUMUFvQqgl9CM40637rdj_yNMTU-sNt-_0aHrR40yMe_D4a4hw",
    category: "AI",
    icon: "directions_car",
    tags: ["Python", "Simulation", "AI"]
  }
];

function Projects() {
  return (
    <main className="flex-grow">
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">What You'll Build in This Course</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              This course offers a comprehensive, hands-on learning experience through seven distinct projects, covering the core areas of Web Development, Artificial Intelligence, and Robotics. Each project is designed to build practical skills and prepare you for real-world challenges in the tech industry.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                className={`group flex flex-col bg-white/5 dark:bg-black/5 border border-gray-200/30 dark:border-gray-800/30 rounded-xl overflow-hidden hover:shadow-2xl hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 ${
                  index === projectsData.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="relative">
                  <div
                    className="w-full h-48 bg-center bg-cover"
                    style={{backgroundImage: `url("${project.image}")`}}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-background-dark/50 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    <span className="material-symbols-outlined text-sm">{project.icon}</span>
                    <span>{project.category}</span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 flex-grow">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <a className="mt-6 inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors group-hover:scale-105 transform" href="#">
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
