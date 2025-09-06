# ---- Stage 1: Build ----
# Use a Node.js version that matches your project. Alpine images are small.
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /opt/app

# Install build deps for Strapi native modules
RUN apk add --no-cache python3 make g++ libc6-compat

# Copy package.json and lock files
COPY package.json ./
COPY yarn.lock ./

# Install dependencies (including devDependencies needed for the build)
RUN yarn install --frozen-lockfile


# Copy the rest of your application source code
COPY . .

# Build Strapi (admin panel etc.)
RUN yarn build

# Strip dev deps for smaller image
RUN yarn install --production --ignore-scripts --prefer-offline && yarn cache clean

EXPOSE 1337

CMD ["yarn", "start"]