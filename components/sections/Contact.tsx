import React from 'react';

export default function Contact({ dict }: { dict: any }) {
  const contact = dict.contactPage;

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
          {/* Əlaqə Məlumatları (Sol Tərəf) */}
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

          {/* Əlaqə Formu (Sağ Tərəf) */}
          <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{contact.formTitle}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">{contact.formSubtitle}</p>
            
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{contact.name}</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-50 dark:bg-slate-900 dark:text-white transition-colors" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{contact.email}</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-50 dark:bg-slate-900 dark:text-white transition-colors" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{contact.phoneOption}</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-50 dark:bg-slate-900 dark:text-white transition-colors" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{contact.subject}</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-50 dark:bg-slate-900 dark:text-white transition-colors" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{contact.message}</label>
                <textarea 
                  rows={4} 
                  required
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-50 dark:bg-slate-900 dark:text-white transition-colors resize-none"
                ></textarea>
              </div>
              
              <button 
                type="button" 
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-semibold py-3.5 px-6 rounded-lg transition-colors shadow-md shadow-emerald-900/20"
              >
                {contact.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}