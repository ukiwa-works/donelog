#!/usr/bin/env node
// ↑CLIツールとして実行するために必要

import { Command } from 'commander';
import { helloCommand } from './modules/commands/hello';
import { initCommand } from './modules/commands/init';
import { standupCommand } from './modules/commands/standup';

const program = new Command();

program
  .name('donelog')
  .description('Gather all the things you did yesterday.')
  .version('0.1.0');

// 各サブコマンドを登録
program.addCommand(initCommand);
program.addCommand(helloCommand);
program.addCommand(standupCommand);

// コマンドを実行
program.parse(process.argv);
