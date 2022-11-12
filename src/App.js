import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import {db} from "./firebase"
import { addDoc, collection, getDocs, doc, deleteDoc, onSnapshot, query } from "firebase/firestore";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { AiOutlinePlus } from 'react-icons/ai'
import Todo from './Todo';
import { Container } from 'react-bootstrap';

function App() {
  
  const [todo, setTodo] = useState([])
  const [newTodo, setNewTodo] = useState("")
  const todoCollectionRef = collection(db, "todos")

  const createTodo = async () =>{
    await addDoc(todoCollectionRef, {todo: newTodo})
  }

  const handleDelete = async (id) =>{
    const todoDoc = doc(db, "todos", id);
    await deleteDoc(todoDoc);
  }


{/*useEffect(() =>     
 onSnapshot(collection(db, "todos"), (snapshot) =>
    setTodo(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))) 
      
  ),[] ); */}

  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodo(todosArr);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Container >
      <InputGroup className="mb-4 mt-4" >
       <Form.Control
      placeholder="Enter something..."
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      size= "lg"
      
      onChange={(e) =>{setNewTodo(e.target.value)}}
    />
    <Button variant="primary" id="button-addon2" onClick={createTodo}>
    <AiOutlinePlus size={42}/>
    </Button>
  </InputGroup>
      {todo.map((td, index)=>{
        return(
          <div>
            <Todo key={index} td={td} handleDelete={handleDelete}/>
          </div>
        )
      })}
    </Container>
  );
}

export default App;
