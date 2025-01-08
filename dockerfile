# Stage 1: Build the Angular application
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./

# Install all dependencies
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf

# # Check the nginx configuration for syntax errors
# RUN nginx -t
# Change ownership to nginx user
RUN chown -R nginx:nginx /usr/share/nginx/html
# Alternatively, set read permission for all users
# RUN chmod -R 755 /usr/share/nginx/html

RUN rm -rf /usr/share/nginx/html/*
# Copy the built files from the build stage
COPY --from=build /app/dist/ /usr/share/nginx/html

EXPOSE 80

# Start Nginx and keep it running
CMD ["nginx", "-g", "daemon off;"]