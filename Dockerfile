# Stage 1: Build React application
FROM node:14 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build React app
RUN npm run build

# Stage 2: Serve React app with Nginx
FROM nginx:latest

# Copy built React app from the previous stage
#COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 8080
#EXPOSE 8080

# Start Nginx server
#CMD ["nginx", "-g", "daemon off;"]
