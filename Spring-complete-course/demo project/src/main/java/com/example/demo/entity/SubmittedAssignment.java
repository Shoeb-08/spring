package com.example.demo.entity;

import javax.persistence.*;

@Entity
@Table(name = "studentAssignment")
public class SubmittedAssignment {
    public SubmittedAssignment() {

    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    private int id;
    @Column(name = "answer")
    private String answer;
    @Column(name="user")
    private String user;
    public int getId() {
        return id;
    }

    public SubmittedAssignment(int id, String answer, int posterAssignmentId) {
        this.id = id;
        this.answer = answer;
        this.posterAssignmentId = posterAssignmentId;
    }

    public SubmittedAssignment(int id) {
        this.id = id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public int getPosterAssignmentId() {
        return posterAssignmentId;
    }

    public void setPosterAssignmentId(int posterAssignmentId) {
        this.posterAssignmentId = posterAssignmentId;
    }

    @Column(name = "posterAssignmentId")
    private int posterAssignmentId;



}
