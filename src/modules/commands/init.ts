import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import readline from 'readline';

const defaultConfig = {
  username: '',
};

export type Config = typeof defaultConfig;

export const initCommand = new Command('init')
  .description('Initialize donelog-config.json')
  .action(() => {
    const filePath = path.resolve(process.cwd(), 'donelog-config.json');

    if (fs.existsSync(filePath)) {
      console.error('donelog-config.json already exists.');
      process.exit(1);
    }

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    rl.question('GitHub Username: ', (username) => {
      rl.close();

      if (!username.trim()) {
        console.error('Error: GitHub Username is required.');
        process.exit(1);
      }

      const config: Config = { username: username.trim() };
      fs.writeFileSync(filePath, JSON.stringify(config, null, 2), 'utf-8');
      console.log(`Welcome, ${config.username} !`);
      console.log('donelog-config.json has been created successfully.');
    });
  });
