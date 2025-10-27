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

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AirlanggaNavbar from '@/components/AirlanggaNavbar'
import AirlanggaFooter from '@/components/AirlanggaFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Airlangga - Software Developer & Network Engineer',
  description: 'Membangun Solusi Digital Kreatif & Infrastruktur Jaringan Andal dengan Next.js, TypeScript, Tailwind CSS, dan Linux Server Automation',
  keywords: [
    'Airlangga',
    'Software Developer',
    'Network Engineer',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Linux',
    'Nginx',
    'Portfolio',
    'Server Automation',
    'Full Stack',
    'Infrastructure'
  ],
  authors: [{ name: 'Airlangga', url: 'https://github.com/Afprian' }],
  creator: 'Airlangga',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    title: 'Airlangga - Software Developer & Network Engineer',
    description: 'Membangun Website & Infrastruktur Jaringan yang Kreatif, Efisien, dan Otomatis',
    siteName: 'Airlangga Portfolio'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <AirlanggaNavbar />
          <main className="flex-grow">
            {children}
          </main>
          <AirlanggaFooter />
        </div>
      </body>
    </html>
  )
}