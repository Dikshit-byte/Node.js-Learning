import Chalk from 'chalk';
import path from 'path';
import { fileURLToPath } from 'url';
console.log(Chalk.blue('Hello world!'));
const log = console.log;
log(Chalk.blue('Hello')+" "+Chalk.red('World!!'));

log(Chalk.blue.bgRed.bold('Hello world!'));

log(Chalk.green(
	'I am a green line ' +
	Chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));
log(`
CPU: ${Chalk.red('90%')}
RAM: ${Chalk.green('40%')}
DISK: ${Chalk.yellow('80%')}
`);

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
log(__dirname);
log(__filename);

