module.exports = {
  apps: [{
    name: 'portfolio',
    script: 'node',
    args: '--experimental-modules --no-warnings --loader ts-node/esm --experimental-specifier-resolution=node ./node_modules/vite/bin/vite.js preview --port 3000 --host',
    args: 'preview --port 3000 --host',
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