package com.example.demo.controller;

import com.example.demo.StudentAssignmentDisplay;
import com.example.demo.entity.Assignment;
import com.example.demo.entity.StudentFile;
import com.example.demo.entity.SubmittedAssignment;
import com.example.demo.service.AssignmentService;
import com.example.demo.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import sun.awt.AWTIcon32_security_icon_yellow16_png;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Controller
public class StudentController {
    @Autowired
    private AssignmentService assignmentService;
    @Autowired
    private FileService fileService;
    @GetMapping("/assignments")
    public ModelAndView studentAssignments(){
        List<Assignment> res=assignmentService.findAll();
        for(Assignment a:res){
            System.out.println(a.getComment());}
        ModelAndView modelAndView=new ModelAndView("student-home");
        modelAndView.addObject("assignmentList",res);
        return modelAndView;
    }
    @GetMapping("/workarea")
    public ModelAndView workarea(){
        String username="";
        Object principle= SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if(principle instanceof UserDetails){
            username = ((UserDetails)principle).getUsername();}
        else{
            username=principle.toString();
        }
        List<SubmittedAssignment> res=fileService.findByUser(username);
        List<StudentAssignmentDisplay> display=new ArrayList<StudentAssignmentDisplay>() ;
        for(SubmittedAssignment a:res){
            StudentAssignmentDisplay studentAssignmentDisplay=new
                    StudentAssignmentDisplay();
            studentAssignmentDisplay.setSubmittedAssignment(a);
            System.out.println(a.getAnswer());
            Optional<Assignment> temp=assignmentService.findById(a.getPosterAssignmentId());
            studentAssignmentDisplay.setComment(temp.get().getComment());
            display.add(studentAssignmentDisplay);
            System.out.println(temp.get().getComment());
            System.out.println(a.getPosterAssignmentId());
        }
        ModelAndView modelAndView=new ModelAndView("student-work");
        modelAndView.addObject("studentFileList",display);

        return modelAndView;
    }
}

