"use client";
import React, { useState } from 'react';

export default function Contact({ dict }: { dict: any }) {
  const contact = dict.contactPage;
  
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sol tərəf (Məlumatlar) - Olduğu kimi saxla və ya dict-dən gətir */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700">
             {/* ... address, phone, email bölmələri ... */}
             <h3 className="text-xl font-semibold mb-2">{contact.emailTitle}</h3>
             <p className="text-emerald-600">info@gx-global.com</p>
          </div>

          {/* Sağ tərəf (Form) */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="text" name="name" placeholder={contact.name} value={formData.name} onChange={handleChange} required className="w-full p-3 bg-gray-50 dark:bg-slate-900 border rounded-lg dark:text-white" />
              <input type="email" name="email" placeholder={contact.email} value={formData.email} onChange={handleChange} required className="w-full p-3 bg-gray-50 dark:bg-slate-900 border rounded-lg dark:text-white" />
              <input type="tel" name="phone" placeholder={contact.phoneOption} value={formData.phone} onChange={handleChange} className="w-full p-3 bg-gray-50 dark:bg-slate-900 border rounded-lg dark:text-white" />
              <input type="text" name="subject" placeholder={contact.subject} value={formData.subject} onChange={handleChange} required className="w-full p-3 bg-gray-50 dark:bg-slate-900 border rounded-lg dark:text-white" />
              <textarea name="message" rows={4} placeholder={contact.message} value={formData.message} onChange={handleChange} required className="w-full p-3 bg-gray-50 dark:bg-slate-900 border rounded-lg dark:text-white resize-none" />
              
              <button type="submit" disabled={status === 'loading'} className="w-full bg-emerald-800 text-white py-3.5 rounded-lg hover:bg-emerald-900 transition-all disabled:opacity-50">
                {status === 'loading' ? 'Göndərilir...' : contact.submit}
              </button>

              {status === 'success' && <p className="text-emerald-500 text-center text-sm">Mesajınız göndərildi!</p>}
              {status === 'error' && <p className="text-red-500 text-center text-sm">Xəta baş verdi, loqları yoxlayın.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}