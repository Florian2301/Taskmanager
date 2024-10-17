import { Button, Form, FormGroup } from 'react-bootstrap'
import React, { useState } from 'react'

const NewTask: React.FC = () => {
  const [title, setTitle] = useState('')
  const [completed, setCompleted] = useState(false) // default value for completed is false

  // method to add/save a new task
  const handleClick = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const task = { title, completed }

    // validation for title, should not be null or empty
    if (title !== null && title !== '') {
      fetch('http://localhost:8080/task/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
      }).then(() => console.log('New task added'))
    }
  }

  function handleChange() {
    setCompleted(!completed)
  }

  return (
    <Form style={{ marginTop: 20 }} onSubmit={handleClick}>
      <Form.Group>
        <Form.Label>Add New Task</Form.Label>
        <Form.Control
          type='text'
          placeholder='Add new task here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <FormGroup className='m-1'>
        <Form.Label style={{ textAlign: 'left', marginRight: 20 }}>
          Completed:
        </Form.Label>
        <Form.Check
          style={{ marginRight: 30 }}
          inline
          type={'checkbox'}
          defaultChecked={false}
          onChange={handleChange}
        />
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </FormGroup>
    </Form>
  )
}

export default NewTask
