// Language switch for the legal pages (privacy / terms).
// Kept in an external file — not inline — so the site's Content-Security-Policy
// can forbid inline scripts and inline event handlers entirely.
(function () {
    var body = document.body;
    var titles = { fr: body.dataset.titleFr, en: body.dataset.titleEn };

    function setLang(lang) {
        document.getElementById('content-fr').style.display = lang === 'fr' ? 'block' : 'none';
        document.getElementById('content-en').style.display = lang === 'en' ? 'block' : 'none';
        document.getElementById('page-title').textContent = titles[lang];
        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        document.documentElement.lang = lang;
        if (location.protocol.startsWith('http')) {
            var p = location.pathname.indexOf('/en/') === 0 ? location.pathname.slice(3) : location.pathname;
            history.replaceState(null, '', (lang === 'en' ? '/en' : '') + p + location.search + location.hash);
        }
    }

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            setLang(btn.dataset.lang);
        });
    });

    if (body.dataset.defaultLang === 'en') {
        setLang('en');
    }
})();
