import { Button, Form, ListGroup } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/task/getAll')
      .then((res) => res.json())
      .then((result: any) => {
        setTasks(result)
      })
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    fetch('http://localhost:8080/task/' + e, {
      method: 'DELETE',
    }).then(() => console.log('task ' + e + ' sucessfully deleted'))
  }

  return (
    <ListGroup>
      {tasks.map((task) =>
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
