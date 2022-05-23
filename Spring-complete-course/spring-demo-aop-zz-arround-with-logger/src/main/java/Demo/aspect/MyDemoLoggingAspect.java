package Demo.aspect;

import Demo.Account;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.logging.Logger;

@Aspect
@Component
@Order(2)
public class MyDemoLoggingAspect {
    private Logger myLogger= Logger.getLogger(getClass().getName());
    @Around("execution(* Demo.service.*.getFortune(..))")
    public Object aroundGetFortune(ProceedingJoinPoint theProceedingJoinPoint) throws Throwable {
        String method = theProceedingJoinPoint.getSignature().toShortString();
        myLogger.info("\n>>>> Executing @Around on method: "+method);

        long begin = System.currentTimeMillis();
        Object result = theProceedingJoinPoint.proceed();
        long end = System.currentTimeMillis();

        long duration = end-begin;
        myLogger.info("\n>>>> Duration: "+duration/1000.0 + " seconds");

        return result;
    }

    @After("execution(* Demo.dao.AccountDAO.findAccounts(..))")
    public void afterFinallyFindAccountsAdvice(JoinPoint theJointPoint) {
        String method = theJointPoint.getSignature().toShortString();

        myLogger.info("\n>>>> Executing @After (finally) on method: "+method);
    }
    @AfterThrowing(
            pointcut = "execution(* Demo.dao.AccountDAO.findAccounts(..))",
            throwing = "theException")
    public void afterThrowingFindAccountsAdvice(JoinPoint theJointPoint, Throwable theException) {
        String method = theJointPoint.getSignature().toShortString();

        myLogger.info("\n>>>> Executing @AfterThrowinging on method: "+method);

        myLogger.info("\n>>>> Exception is: "+theException);
    }



    @AfterReturning(pointcut = "execution(* Demo.dao.AccountDAO.findAccounts(..))", returning = "result")
    public void afterReturningFindAccountsAdvice(JoinPoint theJointPoint, List<Account> result) {
        String method = theJointPoint.getSignature().toShortString();

        myLogger.info("\n>>>> Executing @AfterReturning on method: "+method);

        myLogger.info("\n>>>> Result is: "+result);

        convertAccountNamesToUpperCase(result);

        myLogger.info("\n>>>> Result is after modifying return values: "+result);
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
            myLogger.info(tempArg.toString());
            if(tempArg instanceof Account){
                //downcast and print account specific stuff
                Account theAccount=(Account) tempArg;
                myLogger.info("account Name: "+ theAccount.getName());
                myLogger.info("account level: "+ theAccount.getLevel());



            }
        }



    }
}
