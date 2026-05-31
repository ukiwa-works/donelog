import { Command } from 'commander';

export const standupCommand = new Command('standup')
  .description('Show a standup report template.')
  .action(() => {
    console.log('## 昨日');
    console.log('- サンプルデータ');
    console.log('');
    console.log('## 今日');
    console.log('- 入力してください');
    console.log('');
    console.log('## 困りごと');
    console.log('- 入力してください');
  });
