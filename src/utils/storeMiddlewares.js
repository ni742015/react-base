// https://github.com/reactjs/redux/issues/99#issuecomment-112212639

import { namespaceConfig } from 'fast-redux'
// import { do_loading } from 'components/hoc/Main/action'

export function thunk ({ dispatch, getState }) {
	return next => action => {
		if (typeof action === 'function') {
			return action(dispatch, getState)
		}

		const { promise, namespace, success, fail } = action
		if (!promise) {
			return next(action)
		}

		// next(do_loading({ [namespace]: true }))

		promise.then(result => {
			// next(do_loading({ [namespace]: false }))
			success && success(result, dispatch)
		}).catch(error => {
			console.error('MIDDLEWARE ERROR: ', namespace, error)
			// next(do_loading({ [namespace]: false }))
			fail && fail(error, dispatch)
		})
		return promise
	}
}
