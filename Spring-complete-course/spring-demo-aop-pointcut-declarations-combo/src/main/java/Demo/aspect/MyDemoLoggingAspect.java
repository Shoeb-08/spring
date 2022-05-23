package Demo.aspect;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Aspect
@Component
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
    @Pointcut("execution(* Demo.dao.*.*(..))") // pointcut declare
    private void forDaoPackage(){}

    //create point cut for getter methods
    @Pointcut("execution(* Demo.dao.*.get*(..))")
    private void getter(){}

    //create point cut for setter methods
    @Pointcut("execution(* Demo.dao.*.set*(..))")
    private void setter(){}

    //create pointcut:include package ... exclude getter/setter
    @Pointcut("forDaoPackage() && !(getter() || setter())")
    private void forDaoPackageNoGetterSetter(){}

    @Before("forDaoPackageNoGetterSetter()") // apply pointcut to advice
    public void beforeAddAccountAdvice() {
        System.out.println("\n>>>> Executing @Before advice on addAccount()");
    }
    @Before("forDaoPackageNoGetterSetter()")
    public void performApiAnalytics(){
        System.out.println("\n>>>> performing api analytics");

    }
}
