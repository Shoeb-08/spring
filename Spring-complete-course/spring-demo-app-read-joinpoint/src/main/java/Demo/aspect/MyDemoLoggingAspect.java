package Demo.aspect;

import Demo.Account;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Order(2)
public class MyDemoLoggingAspect {
    //for any class
    //@Before("execution(public void addAccount())")

    //for specific class
    //@Before("execution(public void Demo.dao.AccountDAO.addAccount())")

    //match method with any class starting with add
    //@Before("execution(public void add*())")

    //match method with specific return type & modifier is optional
    //@Before("execution(void add*())")

    //match with any return type
    //@Before("execution(* add*())")

    //match with specific param type
    //@Before("execution(* add*(Demo.aopdemo.Account))")

    //match with any param type
    //@Before("execution(* add*(Demo.aopdemo.Account, ..))")

    //match methods with any package

    @Before("Demo.aspect.LuvAopExpressions.forDaoPackageNoGetterSetter()") // apply pointcut to advice
    public void beforeAddAccountAdvice(JoinPoint theJoinPoint) {
        System.out.println("\n>>>> Executing @Before advice on addAccount()");
        //display the method signature
        MethodSignature methodSig =(MethodSignature) theJoinPoint.getSignature();

        System.out.println("Method : " + methodSig);

        // display method arguments


        //get args
        Object[] args=theJoinPoint.getArgs();

        //loop thru args
        for(Object tempArg:args){
            System.out.println(tempArg);
            if(tempArg instanceof Account){
                //downcast and print account specific stuff
                Account theAccount=(Account) tempArg;
                System.out.println("account Name: "+ theAccount.getName());
                System.out.println("account level: "+ theAccount.getLevel());



            }
        }



    }
}
