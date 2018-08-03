import React, {Component} from 'react';
import Header from './Header.js';

// A Simple HOC Component which renders a header and Wrapped component

const HOCDemoComponent = (WrappedComponent) => {
    return class HOCDemoComponent extends Component{
        render() {
             return (
                 <div>
                     <Header/>
                     <WrappedComponent {...this.props}/>
                 </div>
             )
        }
    }
};

export default HOCDemoComponent;