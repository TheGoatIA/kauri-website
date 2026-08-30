FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY index.html about.html privacy.html terms.html manifest.json /usr/share/nginx/html/
COPY logo.png app_screenshot.png /usr/share/nginx/html/
COPY styles.css scripts.js /usr/share/nginx/html/

EXPOSE 80
