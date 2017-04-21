import React from 'react';

class Name extends React.Component {
	render() {
		return (
			<h2>Hello, {this.props.name}!</h2>
		);
	}
}

export default Name;