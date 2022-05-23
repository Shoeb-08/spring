package com.example.demo.service;

import com.example.demo.entity.Assignment;
import com.example.demo.entity.Assignment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

public interface AssignmentService extends JpaRepository<Assignment,Integer> {

}
