package Springboot.tasks.service;

import Springboot.tasks.model.Task;

import java.util.List;

public interface TaskService {

    public Task saveTask(Task task);
    public List<Task> getAllTasks();
    public void deleteTask(int id);
}
