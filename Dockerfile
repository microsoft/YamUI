FROM node:8-slim

# Install latest chrome dev package
RUN apt-get update \
    && apt-get install -y wget --no-install-recommends \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-unstable --no-install-recommends \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get purge --auto-remove -y curl \
    && rm -rf /src/*.deb

ENV APP_ROOT /usr/src/yamui
RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT

# Install dependencies before copying the app for caching purposes
COPY ./config/yo/generator-component/package.json $APP_ROOT/config/yo/generator-component/package.json
COPY ./package.json $APP_ROOT/package.json
COPY ./package-lock.json $APP_ROOT/package-lock.json
RUN npm install --unsafe-perm

# Copy the app
COPY . $APP_ROOT

CMD ["npm", "run", "test"]
