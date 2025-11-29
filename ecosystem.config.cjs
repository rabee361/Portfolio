module.exports = {
  apps: [{
    name: 'portfolio',
    script: 'npx',
    args: 'vite preview --port 3000 --host',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}