# Use the official NGINX image from Docker Hub
FROM nginx:latest

# Copy static files to the NGINX html directory
COPY dist/ /usr/share/nginx/html
COPY nginx.react.app.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]