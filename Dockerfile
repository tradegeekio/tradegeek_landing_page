FROM node:18-alpine

WORKDIR /app
COPY . .
# RUN yarn install --frozen-lockfile
# RUN yarn build

ENV PORT=3000
EXPOSE 3000
CMD ["yarn", "start"]
