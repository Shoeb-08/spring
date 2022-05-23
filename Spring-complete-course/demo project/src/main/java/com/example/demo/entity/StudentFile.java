package com.example.demo.entity;

import javax.persistence.*;

@Entity
@Table(name="files")
public class StudentFile {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    private int id;
    @Column(name="work")
    private String work;
    public StudentFile(){}
    public StudentFile(int id, String work) {
        this.id = id;
        this.work = work;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getWork() {
        return work;
    }

    public void setWork(String work) {
        this.work = work;
    }




}
