const translations = {
    fr: {
        nav: {
            features: "Fonctionnalités",
            howItWorks: "Comment ça marche",
            testimonials: "Avis",
            download: "Télécharger"
        },
        hero: {
            title: "Gérez vos finances avec ",
            titleHighlight: "Intelligence",
            subtitle: "Kauri combine la puissance de l'IA et la solidarité des Tontines pour vous offrir une liberté financière totale.",
            ctaPrimary: "Commencez maintenant",
            ctaSecondary: "Voir la Démo",
            stat1: "Places restantes",
            stat2: "Date de lancement",
            stat3: "Tontines Actives"
        },
        how: {
            title: "Simple comme bonjour.",
            step1Title: "Téléchargez",
            step1Desc: "Disponible bientôt sur iOS et Android.",
            step2Title: "Créez votre profil",
            step2Desc: "L'IA analyse vos besoins financiers.",
            step3Title: "Rejoignez une Tontine",
            step3Desc: "Invitez vos amis et cotisez en sécurité."
        },
        features: {
            title: "Tout ce dont vous avez besoin.",
            tontineTitle: "Tontines 2.0",
            tontineDesc: "Créez et gérez vos tontines en toute sécurité. Rotation automatique, enchères, et transparence totale.",
            aiTitle: "Coach Financier IA",
            aiDesc: "Un assistant personnel qui analyse vos dépenses, détecte vos abonnements et vous conseille 24/7.",
            budgetTitle: "Budgétisation Intelligente",
            budgetDesc: "Des budgets qui s'adaptent à votre style de vie. Alertes de dépassement.",
            securityTitle: "Sécurité Bancaire",
            securityDesc: "Vos données sont cryptées et protégées par les meilleurs standards.",
            gamificationTitle: "Défis & Gamification",
            gamificationDesc: "Gagnez des badges et progressez dans vos niveaux en atteignant vos objectifs.",
            multiCurrencyTitle: "Multi-Devises",
            multiCurrencyDesc: "Gérez vos finances en XAF, EUR, USD avec conversion en temps réel."
        },
        download: {
            title: "Prêt à transformer vos finances ?",
            subtitle: "Soyez parmi les premiers à découvrir Kauri.",
            apple: "App Store",
            google: "Google Play"
        },
        footer: {
            terms: "Conditions d'utilisation",
            privacy: "Politique de confidentialité",
            rights: "Tous droits réservés."
        }
    },
    en: {
        nav: {
            features: "Features",
            howItWorks: "How it works",
            testimonials: "Reviews",
            download: "Download"
        },
        hero: {
            title: "Manage your finances with ",
            titleHighlight: "Intelligence",
            subtitle: "Kauri combines AI power and Tontine solidarity to give you total financial freedom.",
            ctaPrimary: "Start now",
            ctaSecondary: "Watch Demo",
            stat1: "Spots left",
            stat2: "Launch Date",
            stat3: "Active Tontines"
        },
        how: {
            title: "Simple as that.",
            step1Title: "Download",
            step1Desc: "Coming soon on iOS and Android.",
            step2Title: "Create Profile",
            step2Desc: "AI analyzes your financial needs.",
            step3Title: "Join a Tontine",
            step3Desc: "Invite friends and save securely."
        },
        features: {
            title: "Everything you need.",
            tontineTitle: "Tontines 2.0",
            tontineDesc: "Create and manage tontines securely. Automatic rotation, auctions, and total transparency.",
            aiTitle: "AI Financial Coach",
            aiDesc: "A personal assistant that analyzes spending, detects subscriptions, and advises you 24/7.",
            budgetTitle: "Smart Budgeting",
            budgetDesc: "Budgets that adapt to your lifestyle. Real-time alerts.",
            securityTitle: "Bank-Grade Security",
            securityDesc: "Your data is encrypted and protected by top industry standards.",
            gamificationTitle: "Challenges & Gamification",
            gamificationDesc: "Earn badges and level up as you reach your financial goals.",
            multiCurrencyTitle: "Multi-Currency",
            multiCurrencyDesc: "Manage finances in XAF, EUR, USD with real-time conversion."
        },
        download: {
            title: "Ready to transform your finances?",
            subtitle: "Be among the first to discover Kauri.",
            apple: "App Store",
            google: "Google Play"
        },
        footer: {
            terms: "Terms of Service",
            privacy: "Privacy Policy",
            rights: "All rights reserved."
        }
    }
};

let currentLang = 'fr';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update Text Content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        const keys = key.split('.');
        let value = translations[lang];
        keys.forEach(k => {
            if (value) value = value[k];
        });

        if (value) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = value;
            } else {
                element.textContent = value;
            }
        }
    });

    // Handle Hero Title with Highlight separately
    const heroTitle = document.querySelector('[data-i18n-html="hero.title"]');
    if (heroTitle) {
        heroTitle.innerHTML = `${translations[lang].hero.title} <span class="text-gradient-gold">${translations[lang].hero.titleHighlight}</span>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Scroll Animation Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('glass-nav');
        } else {
            nav.classList.remove('glass-nav');
        }
    });

    // Initialize Language
    setLanguage('fr');

    // Language Switch Listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
});
