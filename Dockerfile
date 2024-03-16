# Use a suitable version of Node.js
FROM node:18.18.0

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port (if needed, depending on deployment)
EXPOSE 3000

# Build the Next.js app
RUN npm run build

# Command to run the application
CMD npm start
