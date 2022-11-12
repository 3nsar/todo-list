import React from 'react'
import Card from 'react-bootstrap/Card';
import { MdDelete } from 'react-icons/md'

const Todo = ({td, handleDelete}) => {
  return (
    <div>
    {/*<h1>{td.todo}</h1> */}

    <Card className='mb-3' bg="light" body>
       {td.todo}
       <MdDelete className="btn-delete" size={28} onClick={() => {handleDelete(td.id)}}/>
    </Card>
    </div>
  )
}

export default Todo