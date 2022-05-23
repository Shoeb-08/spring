package Demo;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class HelloSpringApp {
    public static void main(String[] args) {
        //load the configuration file
        ClassPathXmlApplicationContext context=new ClassPathXmlApplicationContext("applicationContext.xml");
        // retrieve bean from spring container
        Coach theCoach =context.getBean("myCoach",Coach.class);
        //call methods to the bean
        System.out.println(theCoach.getDailyWorkout());
        //lets call our new method for fortunes
        System.out.println(theCoach.getDailyFortune());
        // close the context
        context.close();

    }
}
