import React, { createContext, useState, useContext, useEffect } from 'react';

// Language translations
const translations = {
    en: {
        // Navbar
        about: 'About',
        services: 'Services',
        projects: 'Projects',
        team: 'Team',
        contact: 'Contact',

        // Hero
        heroTitle: 'Defy Limits.',
        heroSubtitle: 'Build the Future.',
        heroDescription: 'We engineer the impossible. Robotics, AI, and Data Solutions that propel your business beyond gravity.',
        startJourney: 'Start Your Journey',
        contactUs: 'Contact Us',
        readyToBuild: 'Ready to Build Your Project',

        // About
        aboutTitle: 'Redefining Possibility.',
        aboutLead: "Oswald Stack isn't just a technology company. We are an innovation lab dedicated to solving the world's most complex problems through code, data, and robotics.",
        aboutDescription: 'Founded with a vision to transform how businesses leverage technology, we combine expertise in cutting-edge fields to deliver solutions that drive innovation and efficiency.',
        yearsExp: 'Years Experience',
        projectsDelivered: 'Projects Delivered',
        clientSat: 'Client Satisfaction',
        innovation: 'Innovation',
        innovationDesc: 'Pushing boundaries to create new possibilities.',
        integrity: 'Integrity',
        integrityDesc: 'Building trust through honest practices.',
        collaboration: 'Collaboration',
        collaborationDesc: 'Working together for extraordinary results.',
        excellence: 'Excellence',
        excellenceDesc: 'Delivering the highest quality in everything.',

        // Services
        ourExpertise: 'Our Expertise',
        aiMl: 'AI & ML',
        aiMlDesc: 'Custom AI solutions that automate and innovate.',
        analytics: 'Analytics',
        analyticsDesc: 'Transforming raw data into actionable insights.',
        saas: 'SaaS',
        saasDesc: 'Scalable cloud platforms for modern businesses.',
        robotics: 'Robotics',
        roboticsDesc: 'Advanced robotics solutions for automation and precision.',
        explore: 'Explore',

        // Contact
        contactTitle: "Let's Build the Future.",
        contactDesc: 'Ready to start your next project? Get in touch with us.',
        sendMessage: 'Send Message',
        sending: 'Sending...',
        name: 'Name',
        email: 'Email',
        message: 'Tell us about your project',

        // FAQ
        faqTitle: 'Frequently Asked Questions',
        faqSubtitle: 'Got questions? We have answers.',

        // Newsletter
        newsletterTitle: 'Stay Updated',
        newsletterDesc: 'Get weekly tech insights and industry updates',
        subscribe: 'Subscribe',
        subscribing: 'Subscribing...',

        // Footer
        quickLinks: 'Quick Links',
        ourServices: 'Our Services',
        getInTouch: 'Get in Touch',
    },

    hi: {
        // Navbar
        about: 'के बारे में',
        services: 'सेवाएं',
        projects: 'परियोजनाएं',
        team: 'टीम',
        contact: 'संपर्क',

        // Hero
        heroTitle: 'सीमाओं को तोड़ें।',
        heroSubtitle: 'भविष्य बनाएं।',
        heroDescription: 'हम असंभव को इंजीनियर करते हैं। रोबोटिक्स, AI और डेटा समाधान जो आपके व्यवसाय को आगे बढ़ाते हैं।',
        startJourney: 'अपनी यात्रा शुरू करें',
        contactUs: 'संपर्क करें',
        readyToBuild: 'अपनी परियोजना बनाने के लिए तैयार',

        // About
        aboutTitle: 'संभावनाओं को फिर से परिभाषित करना।',
        aboutLead: 'Oswald Stack सिर्फ एक टेक्नोलॉजी कंपनी नहीं है। हम एक इनोवेशन लैब हैं जो कोड, डेटा और रोबोटिक्स के माध्यम से दुनिया की सबसे जटिल समस्याओं को हल करने के लिए समर्पित है।',
        aboutDescription: 'व्यवसायों को प्रौद्योगिकी का लाभ उठाने के तरीके को बदलने की दृष्टि से स्थापित, हम अत्याधुनिक क्षेत्रों में विशेषज्ञता को जोड़ते हैं।',
        yearsExp: 'वर्षों का अनुभव',
        projectsDelivered: 'परियोजनाएं पूर्ण',
        clientSat: 'ग्राहक संतुष्टि',
        innovation: 'नवाचार',
        innovationDesc: 'नई संभावनाएं बनाने के लिए सीमाओं को आगे बढ़ाना।',
        integrity: 'ईमानदारी',
        integrityDesc: 'ईमानदार प्रथाओं के माध्यम से विश्वास का निर्माण।',
        collaboration: 'सहयोग',
        collaborationDesc: 'असाधारण परिणामों के लिए मिलकर काम करना।',
        excellence: 'उत्कृष्टता',
        excellenceDesc: 'हर चीज में उच्चतम गुणवत्ता प्रदान करना।',

        // Services
        ourExpertise: 'हमारी विशेषज्ञता',
        aiMl: 'AI और ML',
        aiMlDesc: 'कस्टम AI समाधान जो स्वचालित और नवाचार करते हैं।',
        analytics: 'एनालिटिक्स',
        analyticsDesc: 'कच्चे डेटा को कार्रवाई योग्य अंतर्दृष्टि में बदलना।',
        saas: 'SaaS',
        saasDesc: 'आधुनिक व्यवसायों के लिए स्केलेबल क्लाउड प्लेटफ़ॉर्म।',
        robotics: 'रोबोटिक्स',
        roboticsDesc: 'स्वचालन और सटीकता के लिए उन्नत रोबोटिक्स समाधान।',
        explore: 'अन्वेषण करें',

        // Contact
        contactTitle: 'आइए भविष्य बनाएं।',
        contactDesc: 'अपनी अगली परियोजना शुरू करने के लिए तैयार हैं? हमसे संपर्क करें।',
        sendMessage: 'संदेश भेजें',
        sending: 'भेजा जा रहा है...',
        name: 'नाम',
        email: 'ईमेल',
        message: 'हमें अपनी परियोजना के बारे में बताएं',

        // FAQ
        faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',
        faqSubtitle: 'प्रश्न हैं? हमारे पास उत्तर हैं।',

        // Newsletter
        newsletterTitle: 'अपडेट रहें',
        newsletterDesc: 'साप्ताहिक तकनीकी जानकारी और उद्योग अपडेट प्राप्त करें',
        subscribe: 'सदस्यता लें',
        subscribing: 'सदस्यता ली जा रही है...',

        // Footer
        quickLinks: 'त्वरित लिंक',
        ourServices: 'हमारी सेवाएं',
        getInTouch: 'संपर्क में रहें',
    },

    ta: {
        // Navbar
        about: 'பற்றி',
        services: 'சேவைகள்',
        projects: 'திட்டங்கள்',
        team: 'குழு',
        contact: 'தொகுப்பு',

        // Hero
        heroTitle: 'வரம்புகளை மீறுங்கள்.',
        heroSubtitle: 'எதிர்காலத்தை உருவாக்குங்கள்.',
        heroDescription: 'நாங்கள் சாத்தியமற்றதை பொறியியலாக்குகிறோம். ரோபாட்டிக்ஸ், AI மற்றும் தரவு தீர்வுகள் உங்கள் வணிகத்தை முன்னோக்கி நகர்த்துகின்றன.',
        startJourney: 'உங்கள் பயணத்தைத் தொடங்குங்கள்',
        contactUs: 'எங்களைத் தொடர்பு கொள்ளுங்கள்',
        readyToBuild: 'உங்கள் திட்டத்தை உருவாக்க தயார்',

        // About
        aboutTitle: 'சாத்தியத்தை மாற்றியமைக்கிறது.',
        aboutLead: 'Oswald Stack வெறும் தொழில்நுட்ப நிறுவனம் அல்ல. குறியீடு, தரவு மற்றும் ரோபாட்டிக்ஸ் மூலம் உலகின் மிகவும் சிக்கலான சிக்கல்களை தீர்க்க அர்ப்பணிக்கப்பட்ட புதுமை ஆய்வகம்.',
        aboutDescription: 'வணிகங்கள் தொழில்நுட்பத்தை எவ்வாறு பயன்படுத்துகின்றன என்பதை மாற்றும் தரிசனத்துடன் நிறுவப்பட்டது, நாங்கள் அதிநவீன துறைகளில் நிபுணத்துவத்தை இணைக்கிறோம்.',
        yearsExp: 'வருட அனுபவம்',
        projectsDelivered: 'திட்டங்கள் வழங்கப்பட்டன',
        clientSat: 'வாடிக்கையாளர் திருப்தி',
        innovation: 'புதுமை',
        innovationDesc: 'புதிய சாத்தியங்களை உருவாக்க எல்லைகளை கடந்து.',
        integrity: 'நேர்மை',
        integrityDesc: 'நேர்மையான நடைமுறைகள் மூலம் நம்பிக்கையை கட்டியெழுப்புதல்.',
        collaboration: 'ஒத்துழைப்பு',
        collaborationDesc: 'அசாதாரண முடிவுகளுக்காக ஒன்றிணைந்து பணியாற்றுதல்.',
        excellence: 'சிறப்பு',
        excellenceDesc: 'எல்லாவற்றிலும் உயர்ந்த தரத்தை வழங்குதல்.',

        // Services
        ourExpertise: 'எங்கள் நிபுணத்துவம்',
        aiMl: 'AI மற்றும் ML',
        aiMlDesc: 'தன்னியக்க மற்றும் புதுமையை செய்யும் தனிப்பயன் AI தீர்வுகள்.',
        analytics: 'பகுப்பாய்வு',
        analyticsDesc: 'மூல தரவை செயல்படக்கூடிய நுண்ணறிவுகளாக மாற்றுதல்.',
        saas: 'SaaS',
        saasDesc: 'நவீன வணிகங்களுக்கான அளவிடக்கூடிய கிளவுட் தளங்கள்.',
        robotics: 'ரோபாட்டிக்ஸ்',
        roboticsDesc: 'தானியங்கு மற்றும் துல்லியத்திற்கான மேம்பட்ட ரோபாட்டிக்ஸ் தீர்வுகள்.',
        explore: 'ஆராயுங்கள்',

        // Contact
        contactTitle: 'எதிர்காலத்தை உருவாக்குவோம்.',
        contactDesc: 'உங்கள் அடுத்த திட்டத்தைத் தொடங்க தயாரா? எங்களைத் தொடர்பு கொள்ளுங்கள்.',
        sendMessage: 'செய்தியை அனுப்பு',
        sending: 'அனுப்பப்படுகிறது...',
        name: 'பெயர்',
        email: 'மின்னஞ்சல்',
        message: 'உங்கள் திட்டத்தைப் பற்றி எங்களிடம் சொல்லுங்கள்',

        // FAQ
        faqTitle: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
        faqSubtitle: 'கேள்விகள் உள்ளதா? எங்களிடம் பதில்கள் உள்ளன.',

        // Newsletter
        newsletterTitle: 'புதுப்பிக்கப்பட்டதாக இருங்கள்',
        newsletterDesc: 'வாராந்திர தொழில்நுட்ப நுண்ணறிவுகள் மற்றும் தொழில்துறை புதுப்பிப்புகளைப் பெறுங்கள்',
        subscribe: 'குழுசேர்',
        subscribing: 'குழு சேர்கிறது...',

        // Footer
        quickLinks: 'விரைவு இணைப்புகள்',
        ourServices: 'எங்கள் சேவைகள்',
        getInTouch: 'தொடர்பில் இருங்கள்',
    }
};

// Language Context
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        // Get saved language from localStorage or default to 'en'
        return localStorage.getItem('language') || 'en';
    });

    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    const t = (key) => {
        return translations[language][key] || translations.en[key] || key;
    };

    useEffect(() => {
        // Update HTML lang attribute
        document.documentElement.lang = language;
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export default LanguageContext;
