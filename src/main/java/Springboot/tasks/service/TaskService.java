package Springboot.tasks.service;

import Springboot.tasks.model.Task;

import java.util.List;

public interface TaskService {

    public Task saveTask(Task task);
    public List<Task> getAllTasks();
    public void deleteTask(int id);

    // method to update the value of completed of a task
    // backend is working fine, checked with Postman, frontend causes an error
    public void updateTask(int id);
}
