import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { AiOutlinePlus } from 'react-icons/ai'

const InputBar = () => {
  return (
    <InputGroup className="mb-3 mt-4">
    <Form.Control
      placeholder="Enter something..."
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      size= "lg"
    />
    
    <Button variant="primary" id="button-addon2">
    <AiOutlinePlus size={42}/>
    </Button>
  </InputGroup>

  )
}

export default InputBar