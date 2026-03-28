const { spawn } = require('child_process');
const path = require('path');

// This script finds and runs the real backend server from the nested directory
const backendDir = path.join(__dirname, 'Real Estate_main (2)', 'Real Estate_main', 'Real Estate', 'backend');
const serverPath = path.join(backendDir, 'server.js');

console.log('--- OpenDoor Backend Proxy ---');
console.log(`Launching real server from: ${serverPath}`);

const child = spawn('node', ['server.js'], {
    cwd: backendDir,
    stdio: 'inherit',
    shell: true
});

child.on('error', (err) => {
    console.error('Failed to start server:', err);
});

child.on('exit', (code) => {
    if (code !== 0) {
        console.log(`Server process exited with code ${code}`);
    }
});
