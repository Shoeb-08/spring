package Demo.aspect;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;

@Aspect
public class LuvAopExpressions {
    @Pointcut("execution(* Demo.dao.*.*(..))") // pointcut declare
    public void forDaoPackage(){}

    //create point cut for getter methods
    @Pointcut("execution(* Demo.dao.*.get*(..))")
    public void getter(){}

    //create point cut for setter methods
    @Pointcut("execution(* Demo.dao.*.set*(..))")
    public void setter(){}

    //create pointcut:include package ... exclude getter/setter
    @Pointcut("forDaoPackage() && !(getter() || setter())")
    public void forDaoPackageNoGetterSetter(){}


}
