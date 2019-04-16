import { namespaceConfig } from 'fast-redux'
import * as reducers from './reducer'

const { action, getState: _getState } = namespaceConfig(
	'home', reducers.DEFAULT_STATE
)

export { _getState }

export const do_add = action('add', reducers.add) // 修改密码1
export const do_del = action('del', reducers.del) // 修改密码1
