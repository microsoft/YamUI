FROM travisci/ci-nodejs:packer-1494866191

RUN su - travis -c "nvm install 8.7.0"

ENV APP_ROOT /usr/src/yamui
RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT

# Only cause Docker cache miss on dependency changes
COPY ./package.json $APP_ROOT/package.json
COPY ./package-lock.json $APP_ROOT/package-lock.json

# Put local node_modules binaries in global path
# TODO: Sort out "travis" user's path/nvm so we don't need to include the node path manually
#       For public Github let's use Docker container to match the public Travis container
ENV PATH $APP_ROOT/node_modules/.bin:/home/travis/.nvm/versions/node/v8.7.0/bin:$PATH

RUN npm install --unsafe-perm

# Copy over the app
COPY . $APP_ROOT

CMD ["npm", "run", "test"]
