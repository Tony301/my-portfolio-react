const fs = require('fs');
const path = require('path');

const REMOVE_EXTENSIONS = ['.mp4', '.apk'];
const buildDir = path.join(__dirname, '..', 'build');

function clean(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      clean(fullPath);
    } else if (REMOVE_EXTENSIONS.some(ext => entry.name.endsWith(ext))) {
      fs.unlinkSync(fullPath);
      console.log('Removed from build:', path.relative(buildDir, fullPath));
    }
  }
}

clean(buildDir);
console.log('Build cleaned of large media files.');
