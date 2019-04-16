import { rootReducer } from 'fast-redux'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { thunk } from './storeMiddlewares'

export default (initialState = {}) => {
	const middleware = [thunk]
	const otherArg = process.env.NODE_ENV !== 'production' ?
		composeWithDevTools(applyMiddleware(...middleware)) :
		applyMiddleware(...middleware)

	return createStore(rootReducer, initialState, otherArg)
}
