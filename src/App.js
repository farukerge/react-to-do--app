import { useState, useEffect } from 'react'
import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List';

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    console.log(todo);
  },[todo])



  return (
    <div className="App">
      <div className="container">
         <h1>To Do List</h1>
      <Form addTodo={setTodo} todo={todo}/>
      <List todo={todo} />
      <button onClick={()=> setTodo([])}>Reset</button>
     </div>
    </div>
  );
}

export default App;
