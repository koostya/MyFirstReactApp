import React from 'react';
import Name from './Name.jsx';

const initState = {
	name: 'React'
}
class Main extends React.Component {
	constructor(props) {
		super(props); 

        this.state = initState;
        this.myFunction = this.myFunction.bind(this);

	}
    myFunction(e){
        if(e.target.value.length < 20){
            this.setState({name: e.target.value});
        }
    }
	render() {
		return (
            <div>
			<Name name = {this.state.name}/>
            <input value = {this.state.name} onChange = {this.myFunction} />
            </div>
		);
	}
}

export default Main;