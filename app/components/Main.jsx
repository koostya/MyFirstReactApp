import React from 'react';
import Name from './Name.jsx';

class Main extends React.Component {
	constructor(props) {
		super(props); 

        this.state = {items: this.props.data.items};
        this.search = this.search.bind(this);

	}
    search(e){
        var filteredList = this.props.data.items.filter(function(item){
            return item.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: filteredList});
    }
	render() {
		return (
            <div>
                <input placeholder = {this.state.placeholder} onChange = {this.search} />
                <ul>
                    {
                        this.state.items.map(function(item){
                            return <Name key = {item} name={item} />
                        })
                    }
                </ul>
            </div>
		);
	}
}

export default Main;