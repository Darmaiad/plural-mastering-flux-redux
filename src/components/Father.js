import React from 'react';
import './Father.css';
import Child from './Child';

export default class Father extends React.Component {
    render() {
        return (
            <div>
                <h3>React Playground</h3>
                <h4>Father Component</h4>
                <Child />
            </div>
        );
    }
}
