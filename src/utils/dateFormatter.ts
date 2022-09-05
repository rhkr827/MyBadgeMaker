function leftPad(value: number) {
	if (value >= 10) {
		return value
	}
	return `0${value}`
}
export function convertTimeStampToLocalDateTime(timestamp: number) {
	const dt = new Date(timestamp)
	const date = convertDateFormat(dt, '-')
	const hour = leftPad(dt.getHours())
	const min = leftPad(dt.getMinutes())
	const sec = leftPad(dt.getSeconds())
	const millisec = dt.getMilliseconds()

	return `${date} ${hour}:${min}:${sec}.${millisec}`
}

export function convertDateFormat(date: Date, delimiter = '-') {
	const year = date.getFullYear()
	const month = leftPad(date.getMonth() + 1)
	const day = leftPad(date.getDate())

	return [year, month, day].join(delimiter)
}
