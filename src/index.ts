import fs from 'fs'
import {logger as log} from './utils/logger'
import {SvgDownloader} from './badge/downloader'

// create log folder
if (!fs.existsSync('./logs')) {
	fs.mkdirSync('./logs')
}

// create result folder
if (!fs.existsSync('./badge')) {
	fs.mkdirSync('./badge')
}

const regex = RegExp(/\!\[(.*)\]\((.*)\)$/)
const badges = fs.readFileSync('doc/badges.txt', 'utf-8').split('\n')
for (var badge of badges) {
	const matched = badge.trim().match(regex)
	if (matched) {
		const name = matched[1]
		const url = matched[2]
		SvgDownloader.run(name, url)
	} else {
		log.info('not matched')
	}
}
