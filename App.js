import "./App.css";
import { useState, useRef } from "react";
import Header from "./Component/Header";
import TodoEditor from "./Component/TodoEditor";
import TodoList from "./Component/TodoList";

const mockTodo = [ 
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "머리감기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "점심 챙겨먹기",
    createdDate: new Date().getTime(),
    
  },
  {
    id: 3,
    isDone: false,
    content: "전공 과제하기",
    createdDate: new Date().getTime(),
    
  },
  {
    id: 4,
    isDone: false,
    content: "엄마한테 전화하기",
    createdDate: new Date().getTime(),
    
  },
];

function App() {
  const idRef = useRef(3);
  const [todo, setTodo] = useState(mockTodo); 

  const onCreate = (content) => { 
    const newItem = {
      id: 0,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, setTodo]); 
  };
  const onUpdate = (targetId) => { 
    setTodo(
      todo.map((it) => { 
        if (it.id === targetId) {
          return {
            ...it,
            isDone: !it.isDone,
          };
        } else {
          return it;
        }
      })
    );
  };
  const onDelete = (targetId) => { 
    setTodo(todo.filter((it) => it.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}
export default App;
