import fs from 'fs'

import {logger as log} from '../utils/logger'
import {Color} from '../utils/color'

interface BadgeFormat {
	label?: string
	style?: 'plastic' | 'flat' | 'flat-square' | 'for-the-badge' | 'social'
	color?: Color
	labelColor?: Color
	logo?: string
	logoWidth?: number
}

class SvgMaker {
	run(format: BadgeFormat) {
		try {
			const svg = this.makeBadge(format)
			fs.writeFileSync(`result/${format.label}.svg`, svg)
		} catch (e) {
			log.error(e)
		}

		log.info(`finished make badge. output : ${format.label}.svg`)
	}

	makeBadge(format: BadgeFormat) {
		let svg = ''

		return svg
	}
}

export {BadgeFormat, SvgMaker}
