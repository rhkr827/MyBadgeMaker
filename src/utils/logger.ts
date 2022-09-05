import winston from 'winston'
import {convertDateFormat} from './dateFormatter'

const logDir = 'logs'
const date = convertDateFormat(new Date(), '')
const {combine, timestamp, printf} = winston.format

const logFormat = printf(info => {
	return `${info.timestamp} ${info.level}: ${info.message}`
})

/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */

const logger = winston.createLogger({
	format: combine(
		timestamp({
			format: 'YYYY-MM-DD HH:mm:ss.SSS'
		}),
		logFormat
	),
	transports: [
		new winston.transports.File({
			dirname: logDir,
			filename: `vscode_tracker_${date}.log`,
			maxFiles: 30
		})
	]
})

// Production 환경이 아닌 경우(dev 등)
if (process.env.NODE_ENV !== 'production') {
	logger.add(
		new winston.transports.Console({
			format: winston.format.combine(winston.format.colorize(), winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss.SSS'}), logFormat)
		})
	)
}

export {logger}
