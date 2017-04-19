import React from 'react';
import ReactDOM from 'react-dom';

const initState = {
	name: 'React'
}
class App extends React.Component {
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
class Name extends React.Component {
	render() {
		return (
			<h2>Hello, {this.props.name}!</h2>
		);
	}
}

ReactDOM.render(<App name = 'Kostya'/>, document.getElementById('root'));