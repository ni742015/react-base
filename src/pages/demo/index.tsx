import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './action'
import './index.scss'

interface IProps {
	do_add: any;
	do_del: any;
	number: number;
}

class Demo extends Component<IProps, {}> {
	render() {
		console.log('this.props', this.props);

		return (
			<div className="demo">
				{this.props.number}
				<button onClick={() => this.props.do_add(1)}>add</button>
				<button onClick={() => this.props.do_del(1)}>del</button>
			</div>
		);
	}
}

const { _getState, ..._actions } = actions

function mapStateToProps(state: any) {
	return _getState(state)
}

function mapDispatchToProps(dispatch: any) {
	return bindActionCreators({ ..._actions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo)
