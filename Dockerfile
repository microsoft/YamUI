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

ENV APP_ROOT /home/yamuiuser/yamui
RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT

# Run as non-privileged
RUN groupadd -r yamuiuser \
    && useradd -r -g yamuiuser -G audio,video yamuiuser \
    && chown -R yamuiuser:yamuiuser /home/yamuiuser
USER yamuiuser

# Install dependencies before copying the app for caching purposes
COPY ./package.json $APP_ROOT/package.json
COPY ./package-lock.json $APP_ROOT/package-lock.json
RUN npm install --unsafe-perm

# Copy the app
COPY --chown=yamuiuser:yamuiuser . $APP_ROOT

CMD ["npm", "run", "test"]
