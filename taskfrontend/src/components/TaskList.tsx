import { Button, Form, ListGroup } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'

function TaskList() {
  const [tasks, setTasks] = useState([])

  // React Hook for loading the data when app starts
  useEffect(() => {
    fetch('http://localhost:8080/task/getAll')
      .then((res) => res.json())
      .then((result: any) => {
        setTasks(result)
      })
  }, [])

  /*
  
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault()
    fetch('http://localhost:8080/task/' + e, {
      method: 'PATCH',
    })
      .then(() => console.log('task ' + e + ' sucessfully updated'))
  }*/

  // method to delete a task
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    fetch('http://localhost:8080/task/' + e, {
      method: 'DELETE',
    }).then(() => console.log('task ' + e + ' sucessfully deleted'))
  }

  return (
    <ListGroup>
      {tasks.map((task) =>
        // if title is empty, task should not be displayed, bc there must have been an error while saving
        task.title ? (
          <ListGroup.Item key={task.id} style={{ textAlign: 'left' }}>
            <div>task: {task.id}</div>
            <div>title: {task.title}</div>

            <Form.Group>
              <Form.Label className='me-3'>completed:</Form.Label>

              <Form.Check
                inline
                type={'checkbox'}
                id={task.id}
                checked={task.completed}
                //onChange={handleChange} -> bugfix method to update value of complete
              />
              <Button
                id={task.id}
                variant='secondary'
                onClick={() => handleClick(task.id)}
              >
                Delete
              </Button>
            </Form.Group>
          </ListGroup.Item>
        ) : null
      )}
    </ListGroup>
  )
}

export default TaskList
