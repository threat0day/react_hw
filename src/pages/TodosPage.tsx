import React, {useState, useEffect} from 'react'

import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfaces';

declare var confirm: (question:string)=> boolean

export const TodosPage: React.FC =() =>{
    const [todos, setTodos] = useState<ITodo[]>([]) 

    useEffect(()=>{
      const saved = JSON.parse(localStorage.getItem('todos')|| '[]') as ITodo[]
  
      setTodos(saved)
    }, [])
  
    useEffect(()=>{
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]
    )
  
    const addHandler = (title: string) =>{
      //console.log('add new todo', title)
      const newTodo = {
        title:title,
        id: Date.now(),
        complited:false
      }
     // setTodos([newTodo, ...todos])
     setTodos(prev =>[newTodo, ...prev])
    }
  
    const toggleHandler =(id:number) =>{
      setTodos(prev=>prev.map(todo =>{
        if (todo.id ===id){
          todo.complited = true
          console.log(' todo.complited = !todo.complited')
        }
        return todo
      }))
    }
    const removeHandler = (id:number)=>{
      const  shouldRemove = confirm('Удалять ннадо?')
      if (shouldRemove){
        setTodos(prev=>prev.filter(todo=>todo.id !==id))
      }
      
    }
    return <React.Fragment>
            <TodoForm onAdd={addHandler}/>
    <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}></TodoList>
    </React.Fragment>
}