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
            stat1: "Coach IA disponible",
            stat2: "Sécurité des données",
            stat3: "Support Devises"
        },
        how: {
            title: "Simple comme bonjour.",
            step1Title: "Téléchargez",
            step1Desc: "Disponible dès maintenant sur iOS et Android.",
            step2Title: "Créez votre profil",
            step2Desc: "L'IA analyse vos besoins financiers.",
            step3Title: "Rejoignez une Tontine",
            step3Desc: "Invitez vos amis et cotisez en sécurité."
        },
        features: {
            title: "Tout ce dont vous avez besoin.",
            tontineTitle: "Tontines 2.0",
            tontineDesc: "Créez et gérez vos tontines en toute sécurité. Rotation fixe ou aléatoire, validation IA des paiements et transparence totale.",
            aiTitle: "Coach Financier IA",
            aiDesc: "Un assistant personnel qui analyse vos dépenses, détecte vos abonnements et vous conseille 24/7.",
            smartCaptureTitle: "Saisie Intelligente",
            smartCaptureDesc: "Scannez un reçu (OCR), parlez à Kauri ou laissez vos SMS bancaires créer vos dépenses automatiquement.",
            budgetTitle: "Budgétisation Intelligente",
            budgetDesc: "Des budgets et objectifs qui s'adaptent à votre style de vie, seul ou à plusieurs. Alertes de dépassement et épargne par arrondi.",
            securityTitle: "Sécurité Bancaire",
            securityDesc: "Données cryptées (AES-256), identité vérifiée (KYC) et surveillance anti-fraude en temps réel.",
            gamificationTitle: "Défis & Gamification",
            gamificationDesc: "Gagnez des badges et progressez dans vos niveaux en atteignant vos objectifs.",
            multiCurrencyTitle: "Multi-Devises",
            multiCurrencyDesc: "Gérez vos finances en XAF, EUR, USD avec conversion en temps réel.",
            resellerTitle: "Abonnements Partagés",
            resellerDesc: "Partagez et rentabilisez vos abonnements Netflix, Spotify ou Canva via notre marketplace sécurisée."
        },
        download: {
            title: "Prêt à transformer vos finances ?",
            subtitle: "Disponible sur vos stores préférés.",
            apple: "App Store",
            google: "Google Play"
        },
        footer: {
            terms: "Conditions d'utilisation",
            privacy: "Politique de confidentialité",
            rights: "Tous droits réservés."
        },
        contact: {
            title: "Contactez-nous",
            subtitle: "Une question ? Notre équipe est à votre écoute.",
            nameLabel: "Nom complet",
            namePlaceholder: "Jean Dupont",
            emailLabel: "Email",
            emailPlaceholder: "jean@example.com",
            messageLabel: "Message",
            messagePlaceholder: "Comment pouvons-nous vous aider ?",
            submitBtn: "Envoyer le message",
            success: "Message envoyé avec succès !",
            error: "Erreur lors de l'envoi. Veuillez réessayer."
        },
        about: {
            hero: {
                title: "L'écosystème ",
                titleHighlight: "Premium",
                subtitle: "Kauri n'est pas qu'une simple application. C'est votre partenaire financier intelligent conçu pour sécuriser, simplifier et structurer votre argent."
            },
            nav: {
                security: "Sécurité",
                transactions: "Transactions",
                tontines: "Tontines",
                coach: "Coach IA",
                budget: "Budgets & Objectifs",
                gamification: "Gamification",
                analytics: "Analyses",
                premium: "Premium",
                invest: "Investissements",
                bills: "Factures",
                reseller: "Abonnements Partagés",
                support: "Support"
            },
            features: {
                security: {
                    title: "Authentification & Sécurité",
                    subtitle: "Protection de niveau bancaire",
                    desc: "La sécurité est au cœur de Kauri. Nous utilisons l'authentification multi-facteurs (MFA), la vérification d'identité (KYC) et une détection de fraude en temps réel pour garantir que vous seul accédez à vos comptes. Connectez-vous via votre email, votre numéro de téléphone ou vos comptes Google/Apple. Une fois connecté, activez la biométrie (FaceID ou Empreinte) pour sécuriser chaque accès sensible, et suivez ou révoquez vos sessions actives depuis vos réglages à tout moment.",
                    use: "Toutes vos données sont cryptées de bout en bout (AES-256) et nous ne partageons jamais vos informations personnelles avec des tiers.",
                    future: "Prochainement : Passkeys pour une connexion sans mot de passe ultra-sécurisée."
                },
                transactions: {
                    title: "Gestion des Transactions",
                    subtitle: "Saisie intelligente multi-format",
                    desc: "Finie la corvée des reçus égarés. Kauri propose plusieurs modes de saisie : manuelle pour la précision, OCR pour scanner instantanément vos tickets de caisse via l'appareil photo, vocale grâce au traitement du langage naturel, et import automatique depuis vos SMS bancaires et Mobile Money. Vous pouvez simplement dire 'J'ai dépensé 15 000 francs pour le restaurant ce midi' et l'IA créera la dépense avec la bonne catégorie.",
                    use: "L'IA catégorise automatiquement vos dépenses (Santé, Loisirs, Alimentation) pour vous donner une vue claire.",
                    future: "Prochainement : Synchronisation bancaire automatique (Open Banking) pour un suivi passif."
                },
                tontines: {
                    title: "Tontines (Moneypools)",
                    subtitle: "L'épargne sociale réinventée",
                    desc: "Digitalisez vos cercles de confiance. Créez des tontines avec vos proches, définissez les montants de cotisation et la fréquence (hebdomadaire, mensuelle). Kauri gère tout l'aspect administratif : suivi des paiements avec vérification IA des preuves de versement, rappels automatiques, pénalités de retard et gestion des tours selon une rotation fixe ou aléatoire.",
                    use: "Un coffre-fort transparent où chaque membre voit les contributions en temps réel pour une confiance totale.",
                    future: "Prochainement : Smart Contracts pour l'exécution automatique des versements fonds via Blockchain."
                },
                coach: {
                    title: "Coach IA Financier",
                    subtitle: "Un expert dans votre poche 24/7",
                    desc: "Votre Coach IA ne se contente pas de lister vos dépenses, il les comprend. Posez-lui n'importe quelle question sur vos finances : 'Combien puis-je dépenser cette semaine ?' ou 'Analyse mes sorties le weekend dernier'. Il identifie vos mauvaises habitudes de consommation et vous propose des plans d'épargne personnalisés pour vous aider à atteindre vos objectifs plus vite.",
                    use: "Il apprend de vos habitudes pour vous donner des conseils de plus en plus pertinents au fil du temps.",
                    future: "Prochainement : Alertes proactives avant que vous ne dépassiez votre budget."
                },
                budget: {
                    title: "Budgets & Objectifs",
                    subtitle: "Maîtrisez chaque franc, seul ou à plusieurs",
                    desc: "Fixez des limites claires par catégorie (ex: Alimentation) et suivez leur consommation en temps réel grâce à des jauges visuelles. Parallèlement, créez des objectifs financiers concrets comme 'Achat voiture' ou 'Vacances', et invitez vos proches à cotiser au même objectif ou budget via un simple code d'invitation. Kauri calcule automatiquement la part de vos revenus à mettre de côté chaque mois pour atteindre vos rêves dans les délais fixés.",
                    use: "Recevez des notifications immédiates si vous dépassez 80% d'un budget, et activez l'épargne automatique par arrondi sur chaque transaction.",
                    future: "Prochainement : Suggestions de budget automatiques basées sur votre historique de dépenses."
                },
                gamification: {
                    title: "Défis & Récompenses",
                    subtitle: "L'argent devient un jeu",
                    desc: "Nous rendons la rigueur financière amusante. Participez à des défis hebdomadaires comme 'Semaine sans Uber' ou 'Objectif Zéro Snack'. En réussissant ces défis, vous gagnez des points Kauri et débloquez des badges exclusifs. Progressez à travers les niveaux de maîtrise financière et comparez vos performances avec vos amis ou les membres de votre tontine.",
                    use: "Gagner en discipline tout en s'amusant est le meilleur moyen de rester motivé sur le long terme.",
                    future: "Prochainement : Échangez vos points Kauri contre des avantages chez nos partenaires."
                },
                analytics: {
                    title: "Analyses & Rapports",
                    subtitle: "La science de votre argent",
                    desc: "Visualisez vos flux financiers à travers des graphiques spectaculaires et interactifs. Kauri calcule votre Score de Santé Financière, prévoit votre trésorerie sur les 30 prochains jours et vous laisse simuler l'impact d'une décision ('Et si je dépensais 50 000 francs de plus ce mois-ci ?') avant de la prendre. Recevez aussi des rapports hebdomadaires et mensuels exportables qui résument vos progrès.",
                    use: "Identifiez en un coup d'œil où part votre argent pour prendre des décisions plus éclairées.",
                    future: "Prochainement : Recommandations d'investissement personnalisées selon votre profil de risque."
                },
                premium: {
                    title: "Abonnements Premium",
                    subtitle: "Débloquez tout le potentiel",
                    desc: "Passez au niveau supérieur avec Kauri Premium. Bénéficiez de la reconnaissance OCR illimitée pour vos reçus, d'une analyse IA plus approfondie et de la possibilité de créer un nombre illimité de tontines et de budgets. Le mode Premium supprime également toutes les publicités et vous donne un accès prioritaire à notre support client VIP pour toutes vos questions complexes.",
                    use: "L'investissement Premium est rapidement rentabilisé par les économies que vous ferez grâce aux outils avancés.",
                    future: "Prochainement : Cashback exclusif chez nos marchands partenaires."
                },
                invest: {
                    title: "Placements & Actifs",
                    subtitle: "Vue globale de votre fortune",
                    desc: "Ne vous limitez pas à vos comptes courants. Suivez l'évolution de votre patrimoine total en intégrant vos actifs : immobilier, actions, cryptomonnaies ou même vos métaux précieux. Kauri calcule votre valeur nette totale en temps réel, vous permettant de voir comment vos placements contribuent à votre liberté financière globale sur le long terme.",
                    use: "Centralisez tout votre patrimoine dans une seule application sécurisée au lieu de jongler entre dix apps.",
                    future: "Prochainement : Graphiques de performance comparative des actifs."
                },
                bills: {
                    title: "Factures & Abonnements",
                    subtitle: "Fini les frais inutiles",
                    desc: "Kauri détecte automatiquement vos abonnements récurrents (Netflix, Spotify, assurances) dans votre historique de transactions. L'application vous alerte avant chaque prélèvement pour que vous ne soyez jamais surpris par une facture. Elle suit également les périodes d'essai gratuit pour vous rappeler de les résilier avant qu'elles ne deviennent payantes.",
                    use: "Visualisez le coût annuel total de vos abonnements pour trier ce qui est vraiment nécessaire.",
                    future: "Prochainement : Assistant de résiliation en un clic directement depuis l'application."
                },
                reseller: {
                    title: "Partage d'Abonnements",
                    subtitle: "Le Reseller Hub Kauri",
                    desc: "Divisez le coût de vos abonnements premium (Netflix, Spotify, Disney+, Canva et bien d'autres) avec la communauté Kauri. Rejoignez un emplacement disponible sur un compte partagé en toute sécurité, ou devenez revendeur et générez un revenu complémentaire en gérant vos propres comptes partagés depuis l'application.",
                    use: "Chaque emplacement est facturé automatiquement et les identifiants sont stockés de façon chiffrée : ni vous, ni le revendeur n'avez à les partager en clair.",
                    future: "Prochainement : Extension du catalogue à de nouveaux services et paiement automatique par crédit Kauri."
                },
                support: {
                    title: "Support & Centre d'aide",
                    subtitle: "Toujours à vos côtés",
                    desc: "BESOIN d'aide ? Notre centre de support intégré vous permet de trouver des réponses rapides via des guides détaillés ou d'ouvrir un ticket d'assistance technique. Notre équipe est formée pour répondre non seulement à vos problèmes d'utilisation, mais aussi pour vous guider sur les meilleures pratiques de gestion tontinière digitale.",
                    use: "Un support humain et réactif accessible directement depuis les réglages de votre application.",
                    future: "Prochainement : Chatbot intelligent multilingue capable de résoudre 90% des soucis techniques instantanément."
                }
            },
            conclusion: {
                title: "Plus qu'un gestionnaire.",
                desc: "Kauri allie les traditions communautaires et la technologie de pointe pour vous donner le contrôle total de votre vie financière."
            }
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
            stat1: "AI Coach Available",
            stat2: "Data Security",
            stat3: "Multi-Currency"
        },
        how: {
            title: "Simple as that.",
            step1Title: "Download",
            step1Desc: "Available now on iOS and Android.",
            step2Title: "Create Profile",
            step2Desc: "AI analyzes your financial needs.",
            step3Title: "Join a Tontine",
            step3Desc: "Invite friends and save securely."
        },
        features: {
            title: "Everything you need.",
            tontineTitle: "Tontines 2.0",
            tontineDesc: "Create and manage tontines securely. Fixed or random rotation, AI-verified payments, and total transparency.",
            aiTitle: "AI Financial Coach",
            aiDesc: "A personal assistant that analyzes spending, detects subscriptions, and advises you 24/7.",
            smartCaptureTitle: "Smart Capture",
            smartCaptureDesc: "Scan a receipt (OCR), talk to Kauri, or let your bank SMS create your expenses automatically.",
            budgetTitle: "Smart Budgeting",
            budgetDesc: "Budgets and goals that adapt to your lifestyle, solo or shared. Overspend alerts and round-up savings.",
            securityTitle: "Bank-Grade Security",
            securityDesc: "AES-256 encrypted data, verified identity (KYC), and real-time fraud monitoring.",
            gamificationTitle: "Challenges & Gamification",
            gamificationDesc: "Earn badges and level up as you reach your financial goals.",
            multiCurrencyTitle: "Multi-Currency",
            multiCurrencyDesc: "Manage finances in XAF, EUR, USD with real-time conversion.",
            resellerTitle: "Shared Subscriptions",
            resellerDesc: "Split and profit from your Netflix, Spotify, or Canva subscriptions through our secure marketplace."
        },
        download: {
            title: "Ready to transform your finances?",
            subtitle: "Available on your favorite stores.",
            apple: "App Store",
            google: "Google Play"
        },
        footer: {
            terms: "Terms of Service",
            privacy: "Privacy Policy",
            rights: "All rights reserved."
        },
        contact: {
            title: "Contact Us",
            subtitle: "Any questions? Our team is here to help.",
            nameLabel: "Full Name",
            namePlaceholder: "John Doe",
            emailLabel: "Email",
            emailPlaceholder: "john@example.com",
            messageLabel: "Message",
            messagePlaceholder: "How can we help you?",
            submitBtn: "Send Message",
            success: "Message sent successfully!",
            error: "Error sending message. Please try again."
        },
        about: {
            hero: {
                title: "The ",
                titleHighlight: "Premium",
                subtitle: "Kauri is not just an app. It's your smart financial partner designed to secure, simplify, and structure your money."
            },
            nav: {
                security: "Security",
                transactions: "Transactions",
                tontines: "Tontines",
                coach: "AI Coach",
                budget: "Budget & Goals",
                gamification: "Gamification",
                analytics: "Analytics",
                premium: "Premium",
                invest: "Investments",
                bills: "Bills",
                reseller: "Shared Subscriptions",
                support: "Support"
            },
            features: {
                security: {
                    title: "Auth & Security",
                    subtitle: "Bank-level protection",
                    desc: "Security is at the core of Kauri. We use multi-factor authentication (MFA), identity verification (KYC), and real-time fraud detection to ensure that only you can access your accounts. Log in via email, phone, or Google/Apple accounts. Once logged in, enable biometrics (FaceID or Fingerprint) to secure every sensitive access, and view or revoke your active sessions from your settings at any time.",
                    use: "All your data is encrypted end-to-end (AES-256), and we never share your personal information with third parties.",
                    future: "Coming soon: Passkeys for ultra-secure, passwordless login."
                },
                transactions: {
                    title: "Transaction Management",
                    subtitle: "Intelligent multi-format entry",
                    desc: "No more lost receipts. Kauri offers several entry modes: manual for precision, OCR to instantly scan receipts via camera, voice thanks to natural language processing, and automatic import from your bank and Mobile Money SMS. You can simply say 'I spent 15,000 francs for lunch today' and the AI will create the expense with the correct category.",
                    use: "AI automatically categorizes your spending (Health, Leisure, Food) to give you a clear overview.",
                    future: "Coming soon: Automatic bank sync (Open Banking) for passive tracking."
                },
                tontines: {
                    title: "Tontines (Moneypools)",
                    subtitle: "Social saving reinvented",
                    desc: "Digitize your circles of trust. Create tontines with loved ones, set contribution amounts and frequency (weekly, monthly). Kauri handles all administration: payment tracking with AI-verified proof of payment, automatic reminders, late penalties, and rotation management, fixed or random.",
                    use: "A transparent vault where every member sees contributions in real-time for total trust.",
                    future: "Coming soon: Smart Contracts for automatic fund distribution via Blockchain."
                },
                coach: {
                    title: "AI Financial Coach",
                    subtitle: "An expert in your pocket 24/7",
                    desc: "Your AI Coach doesn't just list your expenses, it understands them. Ask any question about your finances: 'How much can I spend this week?' or 'Analyze my weekend spending'. It identifies poor spending habits and suggests personalized saving plans to help you reach your goals faster.",
                    use: "It learns from your habits to provide increasingly relevant advice over time.",
                    future: "Coming soon: Proactive alerts before you exceed your budget."
                },
                budget: {
                    title: "Budgets & Goals",
                    subtitle: "Master every penny, solo or together",
                    desc: "Set clear limits by category (e.g., Food) and track them in real-time with visual gauges. Create concrete financial goals like 'Buy a Car' or 'Vacation', and invite loved ones to contribute to the same goal or budget with a simple invite code. Kauri automatically calculates how much income you should save monthly to achieve your dreams on schedule.",
                    use: "Receive immediate notifications if you exceed 80% of a budget, and turn on automatic round-up savings on every transaction.",
                    future: "Coming soon: Automatic budget suggestions based on your spending history."
                },
                gamification: {
                    title: "Challenges & Rewards",
                    subtitle: "Money becomes a game",
                    desc: "We make financial discipline fun. Participate in weekly challenges like 'No Uber Week' or 'Zero Snack Goal'. By succeeding, you earn Kauri points and unlock exclusive badges. Progress through financial mastery levels and compare your performance with friends or tontine members.",
                    use: "Building discipline while having fun is the best way to stay motivated in the long run.",
                    future: "Coming soon: Exchange Kauri points for benefits with our partners."
                },
                analytics: {
                    title: "Analytics & Reports",
                    subtitle: "The science of your money",
                    desc: "Visualize your financial flow through spectacular interactive charts. Kauri computes your Financial Health Score, forecasts your cashflow for the next 30 days, and lets you simulate the impact of a decision ('What if I spent 50,000 francs more this month?') before you make it. You also get exportable weekly and monthly reports summarizing your progress.",
                    use: "Identify at a glance where your money goes to make more informed decisions.",
                    future: "Coming soon: Personalized investment recommendations based on your risk profile."
                },
                premium: {
                    title: "Premium Subscriptions",
                    subtitle: "Unlock full potential",
                    desc: "Take it to the next level with Kauri Premium. Benefit from unlimited OCR receipt recognition, deeper AI analysis, and the ability to create unlimited tontines and budgets. Premium mode also removes all ads and gives you priority access to our VIP customer support for complex queries.",
                    use: "The Premium investment quickly pays for itself through the savings made using advanced tools.",
                    future: "Coming soon: Exclusive cashback with our partner merchants."
                },
                invest: {
                    title: "Assets & Investments",
                    subtitle: "Global view of your fortune",
                    desc: "Don't limit yourself to bank accounts. Track your total wealth evolution by integrating assets: real estate, stocks, cryptocurrencies, or precious metals. Kauri calculates your total net worth in real-time, allowing you to see how your investments contribute to your global financial freedom.",
                    use: "Centralize your entire wealth in one secure app instead of juggling ten different apps.",
                    future: "Coming soon: Comparative asset performance charts."
                },
                bills: {
                    title: "Bills & Subscriptions",
                    subtitle: "No more useless fees",
                    desc: "Kauri automatically detects recurring subscriptions (Netflix, Spotify, insurance) in your transaction history. The app alerts you before each charge so you're never surprised by a bill. it also tracks free trial periods to remind you to cancel before they become paid.",
                    use: "Visualize the total annual cost of your subscriptions to filter what's truly necessary.",
                    future: "Coming soon: One-click cancellation assistant directly from the app."
                },
                reseller: {
                    title: "Shared Subscriptions",
                    subtitle: "The Kauri Reseller Hub",
                    desc: "Split the cost of your premium subscriptions (Netflix, Spotify, Disney+, Canva, and more) with the Kauri community. Join an available slot on a shared account securely, or become a reseller and earn extra income by managing your own shared accounts right from the app.",
                    use: "Every slot is billed automatically and credentials are stored encrypted: neither you nor the reseller ever have to share them in the clear.",
                    future: "Coming soon: Expanded service catalog and automatic billing via Kauri credit."
                },
                support: {
                    title: "Support & Help Center",
                    subtitle: "Always by your side",
                    desc: "NEED help? Our integrated support center lets you find quick answers via detailed guides or open a technical assistance ticket. Our team is trained to answer not only usage questions but also to guide you on digital tontine management best practices.",
                    use: "Responsive human support accessible directly from your app settings.",
                    future: "Coming soon: Multi-language smart chatbot capable of solving 90% of technical issues instantly."
                }
            },
            conclusion: {
                title: "More than a manager.",
                desc: "Kauri blends community traditions and cutting-edge tech to give you total control over your financial life."
            }
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
    if (heroTitle && translations[lang].hero) {
        heroTitle.innerHTML = `${translations[lang].hero.title} <span class="text-gradient-gold">${translations[lang].hero.titleHighlight}</span>`;
    }

    const aboutHeroTitle = document.querySelector('[data-i18n-html="about.hero.title"]');
    if (aboutHeroTitle && translations[lang].about) {
        aboutHeroTitle.innerHTML = `${translations[lang].about.hero.title} <span class="text-gradient-gold">${translations[lang].about.hero.titleHighlight}</span>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Scroll Animation Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

    // Scroll Progress Bar
    const progressBarr = document.querySelector('.scroll-progress');

    // Scroll Effects
    window.addEventListener('scroll', () => {
        // Navbar Effect
        const nav = document.querySelector('nav');
        if (nav) {
            if (window.scrollY > 50) {
                nav.classList.add('glass-nav');
                nav.style.padding = '0.5rem 0';
            } else {
                nav.classList.remove('glass-nav');
                nav.style.padding = '1rem 0';
            }
        }

        // Progress Bar
        if (progressBarr) {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBarr.style.width = scrolled + "%";
        }
    });

    // Initialize Language
    setLanguage('fr');

    // Language Switch Listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-times');
                document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
                document.body.style.overflow = '';
            });
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const loadingBar = document.getElementById('loading-bar-container');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');

            // Loading State
            submitBtn.disabled = true;
            if (loadingBar) loadingBar.style.display = 'block';
            formStatus.style.display = 'none';

            const formData = {
                name: contactForm.name.value,
                email: contactForm.email.value,
                message: contactForm.message.value,
                timestamp: new Date().toISOString()
            };

            try {
                const response = await fetch('https://formspree.io/f/xkojvzkl', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    formStatus.textContent = translations[currentLang].contact.success;
                    formStatus.className = 'form-status success';
                    formStatus.style.display = 'block';
                    contactForm.reset();
                } else {
                    throw new Error('Failed to send');
                }
            } catch (error) {
                console.error('Error:', error);
                formStatus.textContent = translations[currentLang].contact.error;
                formStatus.className = 'form-status error';
                formStatus.style.display = 'block';
            } finally {
                submitBtn.disabled = false;
                if (loadingBar) loadingBar.style.display = 'none';
            }
        });
    }
});
