import React from 'react';
import ReactDOM from 'react-dom';

import Main from './app/components/Main.jsx';

const data ={
    placeholder: 'Search',
    items: [
        'aaa',
        'bbb',
        'ccc',
        'ddd',
        'feee',
        'fe'
    ]
}


ReactDOM.render(<Main data = {data}/>, document.getElementById('root'));