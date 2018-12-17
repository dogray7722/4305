

import React from 'react';

class newComponent extends React.Component {
    constructor(props) {
        super(props);
        //initialize state
        this.state = {
            count: 0
        }

        //bind code goes here-- Don't need to use the word state here.  We don't bind state we bind the method.
        //you only need to bind the methods, not the key defined in initial state
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);

    }

    //methods go here
    increment(){
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement(){
        this.setState({
            count: this.state.count -1
        })
    }

    reset(){
        this.setState({
            count: 0
        })
    }

    render() {
        return (
          <div>
              <button className='inc' onClick={this.increment}>Increment!</button>
              <button className='dec' onClick={this.decrement}>Decrement!</button>
              <button className='reset' onClick={this.reset}>Reset!</button>
          </div>  
        );
    }
}
