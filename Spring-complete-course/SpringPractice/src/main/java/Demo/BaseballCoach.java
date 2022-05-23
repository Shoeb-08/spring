package Demo;

public class BaseballCoach implements Coach{
    //define a private field
    private FortuneService fortuneService;
    //define a constructor for dependency injection
    public BaseballCoach(FortuneService theFortuneService){
        fortuneService=theFortuneService;
    }
    @Override
    public String getDailyWorkout(){

        return "spend 30 min on batting practice";
    }
    @Override
    public String getDailyFortune(){
        //use my fortunesevice to get fortune
        return fortuneService.getFortune();
    }
}
