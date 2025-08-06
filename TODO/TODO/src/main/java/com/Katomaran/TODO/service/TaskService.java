package com.Katomaran.TODO.service;

import com.Katomaran.TODO.model.TODOFields;
import com.Katomaran.TODO.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository repo;

    public List<TODOFields> getAllTasks() {
        return repo.findAll();
    }

    public TODOFields getTaskById(int id) {
        return repo.findById(id).orElse(null);
    }

    public TODOFields saveTask(TODOFields task) {
        return repo.save(task);
    }

    public void deleteTask(int id) {
        repo.deleteById(id);
    }
}
