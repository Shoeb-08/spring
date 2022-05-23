package Demo.aspect;

import Demo.Account;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.List;

@Aspect
@Component
@Order(2)
public class MyDemoLoggingAspect {
    @Around("execution(* Demo.service.*.getFortune(..))")
    public Object aroundGetFortune(ProceedingJoinPoint theProceedingJoinPoint) throws Throwable {
        String method = theProceedingJoinPoint.getSignature().toShortString();
        System.out.println("\n>>>> Executing @Around on method: "+method);

        long begin = System.currentTimeMillis();
        Object result = theProceedingJoinPoint.proceed();
        long end = System.currentTimeMillis();

        long duration = end-begin;
        System.out.println("\n>>>> Duration: "+duration/1000.0 + " seconds");

        return result;
    }

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
/*
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



    }*/
}
