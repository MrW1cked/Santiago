# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json if present
COPY package.json .

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build Next.js app
RUN npm run build

# Expose port 9078
EXPOSE 9078

# Set environment variable for Next.js port
ENV PORT=9078

# Start the Next.js server
CMD ["npm", "start"]

