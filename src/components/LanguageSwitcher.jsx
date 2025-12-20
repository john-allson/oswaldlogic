import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
    const { language, changeLanguage } = useLanguage();

    const languages = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
        { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' }
    ];

    return (
        <div className="language-switcher">
            <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="language-select"
                aria-label="Select language"
            >
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.flag} {lang.name}
                    </option>
                ))}
            </select>

            <style jsx>{`
        .language-switcher {
          display: inline-block;
        }

        .language-select {
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-family: var(--font-main);
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          padding-right: 2.5rem;
        }

        .language-select:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--neon-blue);
        }

        .language-select:focus {
          outline: none;
          border-color: var(--neon-blue);
          box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.2);
        }

        .language-select option {
          background: var(--bg-secondary);
          color: var(--text-primary);
          padding: 0.5rem;
        }

        @media (max-width: 768px) {
          .language-select {
            font-size: 0.85rem;
            padding: 0.4rem 0.8rem;
            padding-right: 2rem;
          }
        }
      `}</style>
        </div>
    );
};

export default LanguageSwitcher;
