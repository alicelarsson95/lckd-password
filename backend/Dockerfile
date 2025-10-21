FROM node:20-alpine AS base
WORKDIR /app
ENV NODE_ENV=production

FROM base AS deps
COPY package*.json ./
RUN npm ci --omit=dev

FROM base AS release
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

USER 1001
EXPOSE 3000
CMD ["npm", "start"]