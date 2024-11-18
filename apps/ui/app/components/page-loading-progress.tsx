import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect } from 'react'
import { useNavigation } from '@remix-run/react'

export const PageLoadingProgress = () => {
	const navigation = useNavigation()

	useEffect(() => {
		NProgress.configure({ showSpinner: false })
		if (navigation.state !== 'idle') {
			NProgress.start()
		}

		if (navigation.state === 'idle') {
			NProgress.done()
		}
	}, [navigation.state])
	return null
}
