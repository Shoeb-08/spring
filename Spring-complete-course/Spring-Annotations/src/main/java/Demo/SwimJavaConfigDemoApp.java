package Demo;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class SwimJavaConfigDemoApp {
    public static void main(String[] args) {
        //read Spring config java class
        AnnotationConfigApplicationContext context=new AnnotationConfigApplicationContext(SportConfig.class);
        //get the bean from spring container
        SwimCoach theCoach=context.getBean("swimCoach",SwimCoach.class);
        // call a method on the bean
        System.out.println(theCoach.getDailyWorkout());
        // call method daily fortune
        System.out.println(theCoach.getDailyFortune());
        //call our new coach methods...

        //call out new swim coach methods .. has the props values injected
        System.out.println("Email: "+theCoach.getEmail());
        System.out.println("Team: "+theCoach.getTeam());
        // close the context
        context.close();
    }
}
