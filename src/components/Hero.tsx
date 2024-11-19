import React from 'react';
import { Shield, Clock, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative bg-slate-900 pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-10"
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Technology Background"
        />
        <div className="absolute inset-0 bg-slate-900 mix-blend-multiply" />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            <span className="block">{t('hero.title')}</span>
            <span className="block text-blue-500">{t('hero.subtitle')}</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-300">
            {t('hero.description')}
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a href="#contact" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10">
              {t('hero.cta.primary')}
            </a>
            <a href="#services" className="px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-300 hover:text-white hover:border-white md:py-4 md:text-lg md:px-10">
              {t('hero.cta.secondary')}
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center p-6 bg-slate-800 rounded-lg">
            <Shield className="h-12 w-12 text-blue-500" />
            <h3 className="mt-4 text-xl font-semibold text-white">{t('hero.features.security.title')}</h3>
            <p className="mt-2 text-gray-300 text-center">{t('hero.features.security.description')}</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-slate-800 rounded-lg">
            <Clock className="h-12 w-12 text-blue-500" />
            <h3 className="mt-4 text-xl font-semibold text-white">{t('hero.features.support.title')}</h3>
            <p className="mt-2 text-gray-300 text-center">{t('hero.features.support.description')}</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-slate-800 rounded-lg">
            <Users className="h-12 w-12 text-blue-500" />
            <h3 className="mt-4 text-xl font-semibold text-white">{t('hero.features.team.title')}</h3>
            <p className="mt-2 text-gray-300 text-center">{t('hero.features.team.description')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}