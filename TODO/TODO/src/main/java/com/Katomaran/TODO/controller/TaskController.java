package com.Katomaran.TODO.controller;

import com.Katomaran.TODO.model.TODOFields;
import com.Katomaran.TODO.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "*") // Allow React Native to access
public class TaskController {

    @Autowired
    private TaskService service;

    @GetMapping("ShowTask")
    public List<TODOFields> getAllTasks() {
        return service.getAllTasks();
    }

    @GetMapping("/{id}")
    public TODOFields getTask(@PathVariable int id) {
        return service.getTaskById(id);
    }

    @PostMapping("AddTask")
    public TODOFields addTask(@RequestBody TODOFields task) {
        return service.saveTask(task);
    }

    @PutMapping("/{id}")
    public TODOFields updateTask(@PathVariable int id, @RequestBody TODOFields task) {
        task.setId(id);
        return service.saveTask(task);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable int id) {
        service.deleteTask(id);
    }
}
