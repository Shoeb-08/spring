package com.example.demo.controller;

import com.example.demo.entity.Assignment;
import com.example.demo.service.AssignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.Optional;

@Controller
public class AssignmentController {
    @Autowired
    private AssignmentService assignmentService;
    @RequestMapping("/saveAssignment")
    public ModelAndView saveAssignment(@ModelAttribute Assignment assignment){
        System.out.println(assignment.getId());
        assignmentService.save(assignment);
        ModelAndView modelAndView=new ModelAndView("redirect:/teacher");
        return modelAndView;
    }
    @RequestMapping("/edit/{id}")
    public ModelAndView edit(@PathVariable(name="id") int id){
       Optional<Assignment> assignment= assignmentService.findById(id);
        ModelAndView modelAndView=new ModelAndView("post-assignment");
        modelAndView.addObject("assignment",assignment);
        return modelAndView;
    }
    @RequestMapping("/delete/{id}")
    public ModelAndView delete(@PathVariable(name="id") int id){
        assignmentService.deleteById(id);
        ModelAndView modelAndView=new ModelAndView("redirect:/teacher");
        return modelAndView;
    }
}
