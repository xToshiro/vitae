const https = require('https');
const fs = require('fs');

const options = {
    hostname: 'upload.wikimedia.org',
    path: '/wikipedia/commons/1/1c/Brazil_Blank_Map.svg',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Connection': 'keep-alive'
    }
};

https.get(options, (res) => {
    if (res.statusCode !== 200) {
        console.error(`Status Code: ${res.statusCode}`);
        // If it's a redirect, we should follow it, but wikipedia-commons usually serves 200 for proper user-agents
        return;
    }
    const file = fs.createWriteStream('public/brazil-map.svg');
    res.pipe(file);
    file.on('finish', () => {
        file.close();
        console.log('Download Completed');
    });
}).on('error', (err) => {
    console.error('Error: ', err.message);
});
