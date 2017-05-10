import React from 'react';

class Article extends React.Component {
	render() {
		return (
			<div>
			{
				this.props.data.articles.map((text, i) =>
					<div key = {i}>
						<div>{text}</div>
						<button onClick = {this.props.delete} value = {i}>Delete</button>
						<button onClick = {this.props.update} value = {i}>Update</button>
					</div>
				)
			}
			</div>
		);
	}
}

export default Article;