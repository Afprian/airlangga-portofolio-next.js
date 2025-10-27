/*
====================================================
 🚀 Project : airlangga-portofolio-next.js
 👨‍💻 Author  : Airlangga  
 📩 Kontak   : Telegram @airlanggaDev  
 🌐 GitHub   : Afprian  

 ⚠️ Lisensi :
   - Script ini GRATIS untuk digunakan & dimodifikasi.
   - ❌ Dilarang keras untuk dijual kembali (resell) atau dipublikasikan ulang sebagai produk berbayar.
   - Script hanya untuk pembelajaran, portofolio, dan pengembangan pribadi.

 ✅ Prinsip:
   - Code harus efisien, clean, scalable, dan terbaca (readable).
   - Struktur wajib mengikuti standar senior developer.
   - Jangan membuat code berulang atau tidak berguna.

 © 2025 — Crafted with ❤️ by Airlangga
====================================================
*/

import AirlanggaProjectCard from '@/components/AirlanggaProjectCard'
import { Filter } from 'lucide-react'

type ProjectStatus = "Completed" | "In Progress" | "Coming Soon"
type Project = {
  id: number
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  demoUrl?: string
  repoUrl?: string
  status: ProjectStatus
}

export default function ProjectsPage() {
  const AirlanggaProjects: Project[] = [
    {
      id: 1,
      title: "Bot Whatsapp Ppob",
      description: "Sistem bot WhatsApp untuk pembayaran PPOB (Topup, App Premium, Pulsa) dengan integrasi API payment gateway.",
      image: "/images/project1.png",
      category: "Full-Stack",
      technologies: ["Node.js", "Express", "MongoDB", "WhatsApp API"],
      demoUrl: "https://wa.me/6283865967193?text=menu",
      status: "Completed"
    },
    {
      id: 2,
      title: "Website Skyna Shop",
      description: "website e-commerce modern dengan fitur katalog produk, keranjang belanja, dan pembayaran online.",
      image: "/images/project2.png",
      category: "Frontend",
      technologies: ["React", "Chart.js", "TailwindCSS", "REST API"],
      demoUrl: "https://sky-shop.my.id",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Monitoring Server",
      description: "Platform monitoring server real-time dengan dashboard interaktif dan notifikasi otomatis.",
      image: "/images/project3.png",
      category: "Full-Stack",
      technologies: ["node.js", "Rest Api", "JavaScript", "Socket.io"],
      demoUrl: "https://uptime.sky-shop.my.id",
      status: "Completed"
    },
    {
      id: 4,
      title: "Panel Hosting",
      description: "Website panel hosting untuk server game dengan fitur manajemen user, server, dan billing.",
      image: "/images/project4.png",
      category: "Frontend",
      technologies: ["Laravel", "Bootstrap", "MySQL", "REST API"],
      demoUrl: "https://hosting.sky-shop.my.id",
      status: "Completed"
    },
    {
      id: 5,
      title: "Phpmyadmin",
      description: "Website database management tool berbasis web untuk mengelola database MySQL dengan mudah.",
      image: "/images/project5.png",
      category: "Frontend",
      technologies: ["Laravel", "Bootstrap", "MySQL", "HTML/CSS"],
      demoUrl: "https://hosting.sky-shop.my.id/pma",
      status: "Completed"
    },
    {
      id: 6,
      title: "Bot Dc Buy Hosting Auto",
      description: "Sistem bot Discord untuk pembelian hosting otomatis dengan integrasi payment gateway.",
      image: "/images/project6.png",
      category: "Full-Stack",
      technologies: ["Node.js", "Discord.js", "MongoDB", "Payment Gateway"],
      demoUrl: "https://dsc.gg/skynacloud",
      status: "Completed"
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="airlangga-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Projek Saya
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kumpulan projek web full-stack dan frontend yang saya bangun menggunakan teknologi modern seperti Next.js, TypeScript, Tailwind CSS, dan lainnya.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {AirlanggaProjects.map((project) => (
            <AirlanggaProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center airlangga-card p-8 bg-gradient-to-r from-blue-50 to-purple-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ingin Membangun Aplikasi Web Keren Seperti Ini?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Saya siap membantu mewujudkan ide digital Anda menjadi kenyataan. Mari diskusikan project Anda dan ciptakan solusi web yang inovatif bersama saya!
          </p>
          <a 
            href="/contact" 
            className="airlangga-button-primary inline-block"
          >
            Mulai Diskusi Project
          </a>
        </div>
      </div>
    </div>
  )
}