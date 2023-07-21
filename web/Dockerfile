FROM node:16.0.0
ENV YARN_VERSION 1.22.18

RUN yarn policies set-version $YARN_VERSION

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN yarn install --silent

# Copying source files
COPY . /usr/src/app

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "start"