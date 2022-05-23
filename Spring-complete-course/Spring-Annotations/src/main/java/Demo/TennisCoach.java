package Demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import javax.annotation.PostConstruct;
@Component
public class TennisCoach implements Coach{
    //@Scope("prototype")
    @Autowired
    @Qualifier("randomFortuneService")
    private FortuneService fortuneService;
    //("thatSillyCoach")
    //define a default constructor
    public TennisCoach(){
        System.out.println("TennisCoach: inside default constructor");
    }
    //define  my init method
    @PostConstruct
    public void doMyStartupStuff(){
        System.out.println("TennisCoach: inside of doMyStartupStuff: ");
    }
    // define my destroy method


    /*
    @Autowired
    public TennisCoach(FortuneService theFortuneService){
        fortuneService=theFortuneService;
    }*/
    /*
    // define a setter method
    @Autowired
    public void doSomeCrazyStuff(FortuneService theFortuneService){

        System.out.println("TennisCoach: inside doSomeCrazyStuff()");
        fortuneService=theFortuneService;
    }*/
    @Override
    public String getDailyWorkout(){
        return "Practice your backhand volley";
    }
    @Override
    public String getDailyFortune(){
        return fortuneService.getFortune();
    }
}
