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

'use client'

import { useState } from 'react'
import { Mail, MessageCircle, Github, Send, MapPin, Clock, User } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Terima kasih! Pesan Anda akan segera dibalas.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const AirlanggaContactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: "Email",
      value: "skynacloudoffice@gmail.com",
      link: "mailto:skynacloudoffice@gmail.com",
      description: "Kirim email untuk project inquiry"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-green-500" />,
      title: "Telegram",
      value: "@airlanggadev",
      link: "https://t.me/airlanggaDev",
      description: "Chat langsung untuk diskusi cepat"
    },
    {
      icon: <Github className="w-6 h-6 text-gray-700" />,
      title: "GitHub",
      value: "Afprian",
      link: "https://github.com/Afprian",
      description: "Lihat portfolio code & project"
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="airlangga-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Hubungi Saya
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Saya terbuka untuk diskusi project, kolaborasi, atau konsultasi. Jangan ragu untuk menghubungi saya melalui form di bawah atau via email/Telegram.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h2>
              <div className="space-y-6">
                {AirlanggaContactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex-shrink-0">
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {contact.title}
                      </h3>
                      <p className="text-blue-600 font-medium">{contact.value}</p>
                      <p className="text-gray-600 text-sm mt-1">{contact.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="airlangga-card p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Info Tambahan</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">Indonesia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">Response time: 1-24 jam</span>
                </div>
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">Freelance Available</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="airlangga-card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Airlangga | Software Developer & Network Engineer</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Nama</label>
                    <div className="mt-1 relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                        <User className="w-5 h-5" />
                      </span>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Nama lengkap"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="mt-1 relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                        <Mail className="w-5 h-5" />
                      </span>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Subject</label>
                    <input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Judul pesan / topik"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Pesan</label>
                    <div className="mt-1 relative">
                      <textarea
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="block w-full px-3 py-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tulis pesan Anda di sini..."
                      />
                    </div>
                  </div>

                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <Send className="w-4 h-4" />
                    Kirim Pesan
                  </button>
                  <p className="text-sm text-gray-500">
                        Atau hubungi langsung: <a href="mailto:skynacloudoffice@gmail.com" className="text-blue-600">skynacloudoffice@gmail.com</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">FAQ - Pertanyaan Sering Ditanya</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-2">Berapa lama pengerjaan project?</h3>
              <p className="text-gray-600 text-sm">Tergantung kompleksitas, umumnya 2-8 minggu untuk project standar.</p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-2">server apa yang digunakan?</h3>
              <p className="text-gray-600 text-sm">Saya biasa menggunakan VPS Linux dengan Nginx untuk performa optimal.</p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-2">Apakah server juga disediakan?</h3>
              <p className="text-gray-600 text-sm">Bisa, saya dapat membantu setup dan konfigurasi server sesuai kebutuhan.</p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-2">Metode pembayaran apa saja?</h3>
              <p className="text-gray-600 text-sm">Bank Transfer, e-wallet, atau sesuai kesepakatan bersama.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}