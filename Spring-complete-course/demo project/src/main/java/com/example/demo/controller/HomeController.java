package com.example.demo.controller;

import com.example.demo.entity.Assignment;
import com.example.demo.entity.StudentFile;
import com.example.demo.entity.SubmittedAssignment;
import com.example.demo.service.AssignmentService;
import com.example.demo.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collection;
import java.util.List;

@Controller
public class HomeController {
    @Autowired
    private AssignmentService assignmentService;
    @Autowired
    private FileService fileService;
    @RequestMapping("/home")
    public ModelAndView home() {
        String username="";
        Object principle=SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        ModelAndView modelAndView=new ModelAndView();
        if(principle instanceof UserDetails){
            username = ((UserDetails)principle).getUsername();}
        else{
            username=principle.toString();}
            System.out.println(username);
            if (username.equals("likhitha") || username.equals("sam")) {
                modelAndView.setViewName("student-home");
            } else {
                modelAndView.setViewName("teacher-home");
            }


        return modelAndView;
    }

    @GetMapping("/teacher")
    public ModelAndView teacherhome(){
        List<Assignment> res=assignmentService.findAll();
        for(Assignment a:res){
            System.out.print(a.getComment()+"  ");
            System.out.print(a.getAssignmentName());
            System.out.println();
        }
        ModelAndView modelAndView=new ModelAndView("teacher-home");
        modelAndView.addObject("assignmentList",res);
        return modelAndView;
    }
    @GetMapping("/student")
    public ModelAndView student(){
        List<SubmittedAssignment> res= fileService.findAll();

        ModelAndView modelAndView=new ModelAndView("student-home");
        modelAndView.addObject("studentFileList",res);
        return modelAndView;
    }

    @GetMapping("/logout")
    public ModelAndView logout(){
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("login-form");
        modelAndView.addObject("info","Logged out Successfully");
        return modelAndView;
    }

}
