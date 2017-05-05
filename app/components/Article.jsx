import React from 'react';

class Article extends React.Component {
	render() {
		return (
			<div>
				{this.props.text}
			</div>
		);
	}
}

export default Article;