import React from 'react';
import ReactDOM from 'react-dom';
import Article from './Article.jsx';

class Main extends React.Component {
	constructor(props) {
		super(props); 

        this.state = this.props.data;

        this.addArticle = this.addArticle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteArticle = this.deleteArticle.bind(this);
        this.console = this.console.bind(this);
	}
    handleChange(e){
        var text = e.target.value;
    }
    addArticle(){
        this.state.articles.push(ReactDOM.findDOMNode(this.refs.text).value);
        this.setState({articles: this.state.articles});
        ReactDOM.findDOMNode(this.refs.text).value = '';
    }
	deleteArticle(e){
		var indexOfItem = e.target.value;
        this.state.articles.splice(indexOfItem, 1);
        this.setState({articles: this.state.articles});
	}
    console(){
        console.log('Hi, it works!');
    }
	render() {
		    return (
                <div>
                    <h1 onClick = {this.console}>My Blog</h1>
                    <div>
                        <Article delete = {this.deleteArticle} data = {this.state}/>
                    </div>
                    <input onChange = {this.handleChange} ref = 'text' placeholder = {this.state.textBeforeAdd}/>
                    <button onClick = {this.addArticle}>Add</button>
                </div>  
		    );
	}
}

export default Main;