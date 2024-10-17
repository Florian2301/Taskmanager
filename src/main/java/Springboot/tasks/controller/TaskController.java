package Springboot.tasks.controller;

import Springboot.tasks.model.Task;
import Springboot.tasks.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("task")
@CrossOrigin
public class TaskController {
    @Autowired
    private TaskService taskService;

    // method for saving a new task
    @PostMapping("/add")
    public String add(@RequestBody Task task)
    {
        taskService.saveTask(task);
        return "New Task " + task.getId() + " is added";
    }

    // method to get all tasks
    @GetMapping("/getAll")
    public List<Task> getAllTasks()
    {
        return taskService.getAllTasks();
    }

    // method to delete a task
    @DeleteMapping("/{id}")
    public String deleteTask(@PathVariable("id") int id)
    {
        taskService.deleteTask(id);
        return "Task " + id + " deleted";
    }
}
