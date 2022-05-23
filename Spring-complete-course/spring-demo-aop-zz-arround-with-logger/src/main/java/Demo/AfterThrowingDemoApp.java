package Demo;

import Demo.aopdemo.DemoConfig;
import Demo.dao.AccountDAO;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.List;

public class AfterThrowingDemoApp {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(DemoConfig.class);

        AccountDAO theAccountDAO = context.getBean("accountDAO",AccountDAO.class);

        List<Account> theAccounts = null;
        try{

            boolean tripWire = true;
            theAccounts =theAccountDAO.findAccounts(tripWire);
        }
        catch (Exception exc){
            System.out.println("\n\n Main Program ... caught exception "+ exc);
        }

        System.out.println("\n\nMain Program: AfterThrowingDemoApp");
        System.out.println("----");
        System.out.println(theAccounts);
        System.out.println("\n");

        context.close();
    }
}
