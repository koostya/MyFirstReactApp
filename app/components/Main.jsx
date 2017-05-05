import React from 'react';
import ReactDOM from 'react-dom';
import Article from './Article.jsx';

class Main extends React.Component {
	constructor(props) {
		super(props); 

        this.state = this.props.data;

        this.addArticle = this.addArticle.bind(this);
        this.handleChange = this.handleChange.bind(this);
	}
    handleChange(e){
        var text = e.target.value;
    }
    addArticle(){
        this.state.articles.push(ReactDOM.findDOMNode(this.refs.text).value);
        this.setState({articles: this.state.articles});
        ReactDOM.findDOMNode(this.refs.text).value = '';
    }
	render() {
		    return (
                <div>
                    <h1>My Blog</h1>
                    <div>
                        {
                            this.state.articles.map(function(text, i){
                                return <Article text = {text} key = {i} />
                            })
                        }
                    </div>
                    <div>{this.state.textBeforeAdd}</div>
                    <input onChange = {this.handleChange} ref = 'text'/>
                    <button onClick = {this.addArticle}>Add</button>
                </div>  
		    );
	}
}

export default Main;