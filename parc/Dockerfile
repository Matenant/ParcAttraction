FROM node:latest
WORKDIR /var/www/html/parc

COPY . .

COPY copy.sh /copy.sh
RUN chmod +x /copy.sh
ENTRYPOINT "/copy.sh"
