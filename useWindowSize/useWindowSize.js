import { useEffect, useState } from 'react'

export const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({})

	useEffect(() => {
		const getWindowSize = () => {
			if (typeof window === 'undefined') {
				global.window = {}
			}
			const { innerWidth, innerHeight } = window
			return { innerWidth, innerHeight }
		}

		function handleWindowResize() {
			setWindowSize(getWindowSize())
		}

		window.addEventListener('load', handleWindowResize)
		window.addEventListener('resize', handleWindowResize)

		return () => {
			window.removeEventListener('load', handleWindowResize)
			window.removeEventListener('resize', handleWindowResize)
		}
	}, [])

	return windowSize
}
