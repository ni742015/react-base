
// state初始值
export const DEFAULT_STATE = {
	number: 1
}

export function add(state: any, payload: number = 1) {
	return {
		...state,
		number: state.number + payload,
	}
}

export function del(state: any, payload: number = 1) {
	return {
		...state,
		number: state.number - payload,
	}
}
