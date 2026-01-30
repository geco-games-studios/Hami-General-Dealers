//  GNU nano 6.2                                             ecosystem.config.js
module.exports = {
  apps: [{
    name: 'mifi-landing',
    script: 'npm',
    args: 'start',
    cwd: '/root/system/mifi-landing',  // Explicit working directory
    instances: 1,
    exec_mode: 'fork',            // Use 'fork' for Next.js
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    error_file: '/root/.pm2/logs/mifi-landingerror.log',
    out_file: '/root/.pm2/logs/mifi-landing-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    env: {
      NODE_ENV: 'production',
      PORT: 3002
    },
    env_development: {
      NODE_ENV: 'development',
      PORT: 3002
    }
  }]
};





                                                          