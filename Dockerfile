FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY security-headers.conf /etc/nginx/snippets/security-headers.conf

COPY index.html about.html privacy.html terms.html manifest.json /usr/share/nginx/html/
COPY logo.png app_screenshot.png og-fr.jpg og-en.jpg /usr/share/nginx/html/
COPY styles.css scripts.js legal.js about.js /usr/share/nginx/html/

# English version of the pages (served under /en/)
COPY en/ /usr/share/nginx/html/en/

EXPOSE 80
