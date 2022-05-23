package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.*;
@Entity
@Table(name="assignment")
public class Assignment {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    private int id;
    @Column(name="assignmentName")
    private String assignmentName;

    @Column(name="comment")
    private String comment;

    public String getAssignmentName() {
        return assignmentName;
    }

    public void setAssignmentName(String assignmentName) {
        this.assignmentName = assignmentName;
    }

    public Assignment(int id, String comment, String assignmentName) {
        this.id = id;
        this.comment = comment;
        this.assignmentName = assignmentName;
    }

    public Assignment(int id, String comment) {
        this.id = id;
        this.comment = comment;
    }
    public Assignment(){}
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }





}
