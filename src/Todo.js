import React from 'react'
import Card from 'react-bootstrap/Card';
import { MdDelete } from 'react-icons/md'

const Todo = ({td, handleDelete}) => {
  return (
    <div>
    {/*<h1>{td.todo}</h1> */}

    <Card className='mb-3' bg="light" body>
      <div className="d-flex justify-content-between">
       <h3>{td.todo}</h3>
       <MdDelete className="btn-delete ms-3" size={28} onClick={() => {handleDelete(td.id)}}/>
      </div>
    </Card>
    </div>
  )
}

export default Todo