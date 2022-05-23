package Demo;

import Demo.aopdemo.DemoConfig;
import Demo.dao.AccountDAO;
import Demo.dao.MembershipDAO;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class MainDemoApp {
    public static void main(String[] args) {
        //read spring config java class
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(DemoConfig.class);

        //get the bean from spring container

        AccountDAO theAccountDAO =context.getBean("accountDAO",AccountDAO.class);
        //get membership bean

        MembershipDAO theMembershipDAO=context.getBean("membershipDAO",MembershipDAO.class);
        //call the business method

        Account myAccount = new Account();

        theAccountDAO.addAccount(myAccount, true);
        theAccountDAO.doWork();
        theMembershipDAO.addMember();
        theMembershipDAO.gotToSleep();

        //call the membership business method

        //close the context
        context.close();


    }
}
