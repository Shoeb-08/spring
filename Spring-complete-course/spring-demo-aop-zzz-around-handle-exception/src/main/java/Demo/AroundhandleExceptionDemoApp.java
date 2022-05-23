package Demo;

import Demo.aopdemo.DemoConfig;
import Demo.service.TrafficFortuneService;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.logging.Logger;

public class AroundhandleExceptionDemoApp {
    private static Logger myLogger= Logger.getLogger(AroundhandleExceptionDemoApp.class.getName());
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(DemoConfig.class);

        TrafficFortuneService theFortuneService = context.getBean("trafficFortuneService", TrafficFortuneService.class);

        myLogger.info("\n\nMain Program: AroundDemoApp");
        myLogger.info("Calling getFortune");
        boolean tripWire=true;
        String data = theFortuneService.getFortune(tripWire);
        myLogger.info("\nMy Fortune is: " + data);
        myLogger.info("Finished");

        context.close();
    }
}
