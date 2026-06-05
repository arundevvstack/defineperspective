import { google } from '@ai-sdk/google';
import { generateText } from 'ai';
import * as fs from 'fs';
import * as path from 'path';

// Load environment variables
const envPath = path.resolve('.env.local');
if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, 'utf8');
  envFile.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      process.env[match[1].trim()] = match[2].trim().replace(/^['"]|['"]$/g, '');
    }
  });
}

// Make sure GOOGLE_GENERATIVE_AI_API_KEY is not set to prove the bug
delete process.env.GOOGLE_GENERATIVE_AI_API_KEY;

async function runAudit() {
  console.log('GEMINI_API_KEY exists:', !!process.env.GEMINI_API_KEY);
  
  try {
    const result = await generateText({
      model: google('gemini-1.5-flash'),
      prompt: 'Hello world',
    });
    console.log('Success:', result.text);
  } catch (error: any) {
    console.error('AI SDK ERROR:');
    console.error('Name:', error.name);
    console.error('Message:', error.message);
  }
}

runAudit();
