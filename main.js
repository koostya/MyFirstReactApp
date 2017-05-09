import React from 'react';
import ReactDOM from 'react-dom';

import Main from './app/components/Main.jsx';

const initState = {
    textBeforeAdd: 'Your text for blog',
    articles: ['e', 'ee']
};


ReactDOM.render(<Main data = {initState}/>, document.getElementById('root'));