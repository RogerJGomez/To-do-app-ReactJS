import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header />
        <TodoList />
      </div>
    );
  }

}

export default App;
