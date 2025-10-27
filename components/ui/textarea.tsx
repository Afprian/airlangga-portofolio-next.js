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
import * as React from 'react';

import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
