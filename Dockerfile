FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Xenon67/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul

RUN npm install supervisor -g
RUN pnpm install --no-audit

CMD ["node", "bot.js"]
