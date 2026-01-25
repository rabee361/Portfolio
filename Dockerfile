# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first for better caching
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Final stage - using node:alpine to keep it "just the react container" as requested
FROM node:20-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/dist ./dist

# Expose port 3000
EXPOSE 3000

# Start serving the dist folder on port 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
