package com.example.demo.rest;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class mainPage {
    @GetMapping("/")
    public String sayHello(){
        return "hello world! enter api/employee";
    };
}
