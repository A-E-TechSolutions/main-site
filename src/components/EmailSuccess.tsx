import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function EmailSuccess() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-slate-800 rounded-lg shadow-xl p-8 text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-6" />
        <h1 className="text-2xl font-bold text-white mb-4">
          {t('emailSuccess.title')}
        </h1>
        <p className="text-gray-300 mb-8">
          {t('emailSuccess.description')}
        </p>
        <a
          href="/"
          className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          {t('emailSuccess.returnHome')}
        </a>
      </div>
    </div>
  );
}