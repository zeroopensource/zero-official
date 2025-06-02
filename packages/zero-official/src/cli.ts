import {
  program,
  // InvalidArgumentError
} from 'commander'
import packagejson from '../package.json'

program
  .name('zero official')
  .version(packagejson.version || '0.0.0', '-v, --version')
  .description(packagejson.description)

export const cli = program

export default cli
