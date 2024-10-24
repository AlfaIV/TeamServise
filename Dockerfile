FROM node:latest AS builder

WORKDIR /app

RUN npm install -g pnpm
RUN git clone https://github.com/AlfaIV/TeamServise.git
WORKDIR /app/TeamServise
RUN pnpm install
RUN pnpm run build

FROM nginx:latest

COPY --from=builder /app/TeamServise/dist/ /usr/share/nginx/html 
COPY --from=builder /app/TeamServise/nginx.react.app.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]