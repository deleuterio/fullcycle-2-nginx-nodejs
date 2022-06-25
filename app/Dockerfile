FROM nginx:1.20.2

RUN apt-get update

# update 
RUN apt-get update
# install curl 
RUN apt-get -y install curl
# get install script and pass it to execute: 
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash
# and install node 
RUN apt-get -y install nodejs
# confirm that it was successful 
RUN node -v
# npm installs automatically 
RUN npm -v

# Create working directory inside your container which will hold our source code
WORKDIR /usr/app

# Copy Package.json file which will be used to install App dependencies inside the container
COPY api/package*.json ./

# Run npm install to install all dependencies inside docker container
RUN npm install

COPY api/. .

# Run your node application inside your container
CMD [ "npm", "start" ]