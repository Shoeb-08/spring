package com.example.demo.rest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
public class FunRestController {

    //inject properties
    @Value("${coach.name}")
    private String coachName;

    @Value("${team.name}")
    private String teamName;

    @GetMapping("/teaminfo")
    public String getTeamInfo(){
        return "COach  " +coachName+" team name"+ teamName;

    }
    @GetMapping("/")
    public String sayHello(){
        return "hello world! time on server is"+ LocalDateTime.now();
    }

    //expose a new endpoint for workout

    @GetMapping("/workout")
    public String getDailyWorkout(){
        return "Run a hard 10k";
    }
    //expose a new endpoint for fortune

    @GetMapping("/fortune")
    public String getDailyFortune(){
        return "Today is your lucky day";
    }
}
