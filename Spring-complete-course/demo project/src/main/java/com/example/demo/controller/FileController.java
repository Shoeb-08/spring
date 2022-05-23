package com.example.demo.controller;

import com.example.demo.entity.SubmittedAssignment;
import com.example.demo.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class FileController {
    @Autowired
    private FileService fileService;
    @RequestMapping("/upload/{id}")
    public ModelAndView upload(@PathVariable (name="id") int id){
//        StudentFile studentFile=new StudentFile();
        SubmittedAssignment submittedAssignment=new SubmittedAssignment();
        System.out.println(id);
        ModelAndView modelAndView=new ModelAndView("upload");
        modelAndView.addObject("studentFile",submittedAssignment);
        modelAndView.addObject("postedId",id);
        return modelAndView;
    }
    @RequestMapping("/uploadFile/{id}")
    public ModelAndView uploadFile(@ModelAttribute SubmittedAssignment submittedAssignment,@PathVariable (name="id") int id){
        String username="";
        Object principle= SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if(principle instanceof UserDetails){
            username = ((UserDetails)principle).getUsername();}
        else{
            username=principle.toString();}
        submittedAssignment.setUser(username);
        submittedAssignment.setPosterAssignmentId(id);
        fileService.save(submittedAssignment);
        ModelAndView modelAndView=new ModelAndView("redirect:/student");
        System.out.println(submittedAssignment.getPosterAssignmentId());
        return modelAndView;
    }

}
