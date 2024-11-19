import React from 'react';
import { Laptop, Server, Shield, Smartphone, Cloud, HeadphonesIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Laptop className="h-8 w-8" />,
      titleKey: 'services.list.desktop.title',
      descriptionKey: 'services.list.desktop.description'
    },
    {
      icon: <Server className="h-8 w-8" />,
      titleKey: 'services.list.network.title',
      descriptionKey: 'services.list.network.description'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      titleKey: 'services.list.security.title',
      descriptionKey: 'services.list.security.description'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      titleKey: 'services.list.mobile.title',
      descriptionKey: 'services.list.mobile.description'
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      titleKey: 'services.list.cloud.title',
      descriptionKey: 'services.list.cloud.description'
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8" />,
      titleKey: 'services.list.remote.title',
      descriptionKey: 'services.list.remote.description'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            {t('services.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-300">
              <div className="text-blue-500">
                {service.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {t(service.titleKey)}
              </h3>
              <p className="mt-2 text-gray-300 text-center">
                {t(service.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}