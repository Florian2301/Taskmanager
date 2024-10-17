package Springboot.tasks.service;

import Springboot.tasks.model.Task;
import Springboot.tasks.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public Task saveTask(Task task)
    {
        return taskRepository.save(task);
    }

    @Override
    public List<Task> getAllTasks()
    {
        return taskRepository.findAll();
    }

    @Override
    public void deleteTask(int id)
    {
        taskRepository.delete(taskRepository.getReferenceById(id));
    }
}
