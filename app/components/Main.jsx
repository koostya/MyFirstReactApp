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
        this.addUpdateArticle = this.addUpdateArticle.bind(this);
        this.updateArticle = this.updateArticle.bind(this);
        this.search = this.search.bind(this);
	}
    handleChange(e){
        var text = e.target.value;
    }
    addArticle(e){
        if(ReactDOM.findDOMNode(this.refs.text).value.length >= 1){
            this.props.data.articles.push(ReactDOM.findDOMNode(this.refs.text).value);
            this.setState({articles: this.props.data.articles});
            ReactDOM.findDOMNode(this.refs.text).value = '';
        }
    }
	deleteArticle(e){
		var indexOfItem = e.target.value;
        this.state.articles.splice(indexOfItem, 1);
        this.setState({articles: this.state.articles});
	}
    addUpdateArticle(e){
        var indexOfItem = e.target.value;
        ReactDOM.findDOMNode(this.refs.text_update).value = this.state.articles[indexOfItem];
        document.getElementById('update').value = indexOfItem;
    }
    updateArticle(e){
        var indexOfItem = e.target.value;
        if(ReactDOM.findDOMNode(this.refs.text_update).value.length >= 1){
            this.props.data.articles[indexOfItem] = ReactDOM.findDOMNode(this.refs.text_update).value;
            this.setState({articles: this.props.data.articles});
            ReactDOM.findDOMNode(this.refs.text_update).value = '';
        }
    }
    search(e){
        var text = e.target.value;
        var filteredList = this.props.data.articles.filter(function(item){
            return item.toLowerCase().search(text.toLowerCase())!== -1;
        });
        this.setState({articles: filteredList});
    }
	render() {
		    return (
                <div>
                    <h1>My Blog</h1>
                    <input onChange = {this.search} placeholder = 'Search'/>
                    <div>
                        <Article delete = {this.deleteArticle} update = {this.addUpdateArticle} data = {this.state}/>
                    </div>
                    <input onChange = {this.handleChange} ref = 'text' placeholder = {this.state.textBeforeAdd}/>
                    <button onClick = {this.addArticle}>Add</button>
                    <input onChange = {this.handleChange} ref = 'text_update' placeholder = 'Update'/>
                    <button onClick = {this.updateArticle} id = 'update'>Update</button>
                </div>  
		    );
	}
}

export default Main;