import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  
  plus = () => {
    this.setState({count: this.state.count + 1});
  }
  
  minus = () => {
    this.setState({count: this.state.count - 1});
  }
  reset = () => {
    this.setState({count: 0});
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <Card className="text-center"
        text="dark">
        <Card.Header>Counter App</Card.Header>
          <Card.Body>     
            <Card.Title>{this.state.count}</Card.Title>
            <ButtonGroup aria-label="Basic example">
              <Button variant="outline-primary" 
                      onClick={this.plus}>+</Button>
              <Button variant="outline-secondary"
                      onClick={this.reset}>reset</Button>
              <Button variant="outline-primary"  
                      onClick={this.minus}>-</Button>
            </ButtonGroup>
          </Card.Body>
        </Card>
      </header>
    </div>
    );
  }
}


export default App;
