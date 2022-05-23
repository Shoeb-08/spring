package Demo;

import Demo.aopdemo.DemoConfig;
import Demo.service.TrafficFortuneService;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.logging.Logger;

public class AroundWithLoggerDemoApp {
    private static Logger myLogger= Logger.getLogger(AroundWithLoggerDemoApp.class.getName());
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(DemoConfig.class);

        TrafficFortuneService theFortuneService = context.getBean("trafficFortuneService", TrafficFortuneService.class);

        myLogger.info("\n\nMain Program: AroundDemoApp");
        myLogger.info("Calling getFortune");
        String data = theFortuneService.getFortune();
        myLogger.info("\nMy Fortune is: " + data);
        myLogger.info("Finished");

        context.close();
    }
}
