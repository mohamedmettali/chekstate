import React, {Component} from 'react';

class Cnteclass extends Component {
    constructor() {
        super();
        this.state = {
          count: 0,
          show: false,
        };
      }
    
      increment = () => {
        this.setState({ count: this.state.count + 1 });
      };
    
      decrement = () => {
        if (this.state.count > 0) {
          this.setState({ count: this.state.count - 1 });
        }
      };
    
      reset = () => {
        this.setState({ count: 0 });
      };
    
      shButtons = () => {
        this.setState({ show: !this.state.show });
      };
    
      render() {
        return (
          <div>
            
            <button onClick={this.shButtons}> {this.state.show ? "Hide counter" : "show counter"} </button>
    
            {this.state.show && (
              <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button><br/>
                <button onClick={this.reset}>Reset</button>
              </div>
            )}
    
           
          </div>
        );
      }
    }
export default Cnteclass;