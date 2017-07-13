FROM quay.io/travisci/travis-node-js:latest

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && sudo apt-get install yarn
RUN su - travis -c "nvm install 6.10.3"

ENV APP_ROOT /usr/src/yamui
RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT

# Only cause Docker cache miss on dependency changes
COPY ./package.json $APP_ROOT/package.json
COPY ./yarn.lock $APP_ROOT/yarn.lock

# Put local node_modules binaries in global path
# TODO: Sort out "travis" user's path/nvm so we don't need to include the node path manually
#       For public Github let's use Docker container to match the public Travis container
ENV PATH $APP_ROOT/node_modules/.bin:/home/travis/.nvm/versions/node/v6.10.3/bin:$PATH

RUN yarn install

# Copy over the app
COPY . $APP_ROOT

CMD ["yarn", "test"]
