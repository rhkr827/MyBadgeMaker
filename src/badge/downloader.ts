import fs from 'fs';
import fetch from 'node-fetch';

import { logger as log } from '../utils/logger';

const destPath: string = 'badge/';
class SvgDownloader {
  static async run(name: string, url: string) {
    const response = await fetch(url);
    var filename = name.toLowerCase().replace(/\s/g, '');
    if (!response.ok) {
      log.error(`${filename} ${response.statusText}`);
      throw new Error(`unexpected response ${response.statusText}`);
    }

    const svg = await response.text();
    fs.writeFileSync(`${destPath}/${filename}.svg`, svg);
  }
}

export { SvgDownloader };
