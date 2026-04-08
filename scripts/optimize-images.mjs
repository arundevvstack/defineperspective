import sharp from 'sharp';
import { globby } from 'globby';
import fs from 'fs/promises';
import path from 'path';

const IMAGES_DIR = 'public/images';
const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];

async function optimize() {
  console.log('🚀 Initializing Neural Image Optimizer...');
  
  const patterns = EXTENSIONS.map(ext => `${IMAGES_DIR}/**/*.${ext}`);
  const files = await globby(patterns);
  
  console.log(`🔍 Found ${files.length} visual assets. Processing...`);

  let savedBytes = 0;

  for (const file of files) {
    try {
      const stats = await fs.stat(file);
      const originalSize = stats.size;
      const ext = path.extname(file).toLowerCase();
      
      const buffer = await fs.readFile(file);
      let pipeline = sharp(buffer);

      if (ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
      } else if (ext === '.png') {
        pipeline = pipeline.png({ quality: 80, palette: true });
      } else if (ext === '.webp') {
        pipeline = pipeline.webp({ quality: 80 });
      }

      const outputBuffer = await pipeline.toBuffer();
      const newSize = outputBuffer.length;

      if (newSize < originalSize) {
        await fs.writeFile(file, outputBuffer);
        savedBytes += (originalSize - newSize);
        console.log(`✅ [Optimized] ${file} (${(originalSize / 1024).toFixed(1)}KB -> ${(newSize / 1024).toFixed(1)}KB)`);
      } else {
        console.log(`⏩ [Skipped] ${file} (Already optimized)`);
      }
    } catch (error) {
      console.error(`❌ [Error] Failed to process ${file}:`, error.message);
    }
  }

  const savedMB = (savedBytes / (1024 * 1024)).toFixed(2);
  console.log(`\n✨ Neural Optimization Complete!`);
  console.log(`💎 Total space reclaimed: ${savedMB} MB`);
}

optimize();
