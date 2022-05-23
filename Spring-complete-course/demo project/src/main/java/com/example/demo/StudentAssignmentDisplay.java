package com.example.demo;

import com.example.demo.entity.SubmittedAssignment;

public class StudentAssignmentDisplay {
   SubmittedAssignment submittedAssignment;
   String comment;
    String answer;

    public int getId() {
        return id;
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

    int id;
    public StudentAssignmentDisplay(SubmittedAssignment submittedAssignment, String comment) {
        this.submittedAssignment = submittedAssignment;
        this.comment = comment;
    }

    public StudentAssignmentDisplay() {

    }

    public SubmittedAssignment getSubmittedAssignment() {
        return submittedAssignment;
    }

    public void setSubmittedAssignment(SubmittedAssignment submittedAssignment) {

        this.submittedAssignment = submittedAssignment;
        setAnswer(submittedAssignment.getAnswer());
        setId(submittedAssignment.getId());

    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
