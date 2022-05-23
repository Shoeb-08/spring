package com.example.demo.controller;

import com.example.demo.entity.Assignment;
import com.example.demo.service.AssignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class TeacherController {
    @Autowired
    private AssignmentService assignmentService;

    @RequestMapping("/postAssignment")
    public ModelAndView postAssignment(){
        Assignment assignment=new Assignment();
        ModelAndView modelAndView=new ModelAndView("post-assignment");
        modelAndView.addObject("assignment",assignment);
        return modelAndView;
    }

    @RequestMapping("/gradeAssignment")
    public ModelAndView gradeAssignment(){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("grade-assignment");
        return modelAndView;
    }

}
