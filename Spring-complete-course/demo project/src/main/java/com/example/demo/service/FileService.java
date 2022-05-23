package com.example.demo.service;

import com.example.demo.entity.SubmittedAssignment;
import com.example.demo.entity.StudentFile;
import com.example.demo.entity.SubmittedAssignment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FileService extends JpaRepository<SubmittedAssignment,Integer> {
    List<SubmittedAssignment> findByUser( String user);

}
