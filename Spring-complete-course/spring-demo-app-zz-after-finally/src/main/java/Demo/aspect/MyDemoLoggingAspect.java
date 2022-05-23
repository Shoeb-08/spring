package Demo.aspect;

import Demo.Account;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.List;

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

    @After("execution(* Demo.dao.AccountDAO.findAccounts(..))")
    public void afterFinallyFindAccountsAdvice(JoinPoint theJointPoint) {
        String method = theJointPoint.getSignature().toShortString();

        System.out.println("\n>>>> Executing @After (finally) on method: "+method);
    }
    @AfterThrowing(
            pointcut = "execution(* Demo.dao.AccountDAO.findAccounts(..))",
            throwing = "theException")
    public void afterThrowingFindAccountsAdvice(JoinPoint theJointPoint, Throwable theException) {
        String method = theJointPoint.getSignature().toShortString();

        System.out.println("\n>>>> Executing @AfterThrowinging on method: "+method);

        System.out.println("\n>>>> Exception is: "+theException);
    }



    @AfterReturning(pointcut = "execution(* Demo.dao.AccountDAO.findAccounts(..))", returning = "result")
    public void afterReturningFindAccountsAdvice(JoinPoint theJointPoint, List<Account> result) {
        String method = theJointPoint.getSignature().toShortString();

        System.out.println("\n>>>> Executing @AfterReturning on method: "+method);

        System.out.println("\n>>>> Result is: "+result);

        convertAccountNamesToUpperCase(result);

        System.out.println("\n>>>> Result is after modifying return values: "+result);
    }

    private void convertAccountNamesToUpperCase(List<Account> result) {
        for(Account tempAccount: result) {
            String theUpperName = tempAccount.getName().toUpperCase();
            tempAccount.setName(theUpperName);
        }
    }

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
