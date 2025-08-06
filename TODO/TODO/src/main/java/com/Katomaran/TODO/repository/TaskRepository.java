package com.Katomaran.TODO.repository;

import com.Katomaran.TODO.model.TODOFields;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<TODOFields, Integer> {
}
