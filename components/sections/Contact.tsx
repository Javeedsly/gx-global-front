"use client";
import React, { useState } from 'react';

export default function Contact({ dict }: { dict: any }) {
  const contact = dict.contactPage;

  // Form məlumatlarını idarə etmək üçün state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
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
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {contact.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Əlaqə Məlumatları (Sol Tərəf) - Orijinal halına qaytarıldı */}
          <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{contact.addressTitle}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {contact.address}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{contact.phoneTitle}</h3>
                <div className="text-gray-600 dark:text-gray-300">
                  <a href="tel:+994508041911" className="hover:text-emerald-600 dark:hover:text-emerald-400 block">+994 50 804-19-11</a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{contact.emailTitle}</h3>
                <a href="mailto:info@gx-global.com" className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline">
                  info@gx-global.com
                </a>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{contact.hoursTitle}</h3>
                <p className="text-gray-600 dark:text-gray-300">{contact.hours}</p>
              </div>
            </div>
          </div>

          {/* Əlaqə Formu (Sağ Tərəf) - Funksionallıq əlavə olundu */}
          <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{contact.formTitle}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">{contact.formSubtitle}</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{contact.name}</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-50 dark:bg-slate-900 dark:text-white transition-colors" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{contact.email}</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-50 dark:bg-slate-900 dark:text-white transition-colors" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{contact.phoneOption}</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-50 dark:bg-slate-900 dark:text-white transition-colors" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{contact.subject}</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-50 dark:bg-slate-900 dark:text-white transition-colors" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{contact.message}</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  required
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-50 dark:bg-slate-900 dark:text-white transition-colors resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-semibold py-3.5 px-6 rounded-lg transition-colors shadow-md shadow-emerald-900/20 disabled:opacity-70"
              >
                {status === 'loading' ? 'Göndərilir...' : contact.submit}
              </button>

              {status === 'success' && (
                <p className="text-emerald-600 dark:text-emerald-400 text-sm text-center mt-2 font-medium">
                  Mesajınız uğurla göndərildi!
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-600 dark:text-red-400 text-sm text-center mt-2 font-medium">
                  Xəta baş verdi. Zəhmət olmasa bir az sonra yenidən yoxlayın.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}