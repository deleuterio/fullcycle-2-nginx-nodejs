FROM node:16-slim

# Create working directory inside your container which will hold our source code
WORKDIR /usr/app

# Copy Package.json file which will be used to install App dependencies inside the container
COPY package*.json ./

# Run npm install to install all dependencies inside docker container
RUN npm install

# Copy application source code to /usr/src/app folder
COPY . .

# Expose port 3000 on your container
EXPOSE 3000

# Run your node application inside your container
CMD [ "npm", "start" ]