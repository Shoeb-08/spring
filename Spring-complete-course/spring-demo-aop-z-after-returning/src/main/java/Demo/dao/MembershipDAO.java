package Demo.dao;

import org.springframework.stereotype.Component;

@Component
public class MembershipDAO {
    public boolean addMember() {
        System.out.println(getClass()+": DOING MY DB WORK: ADDING A MEMBERSHIP ACCOUNT");
        return true;
    }
    public void goToSleep() {
        System.out.println(getClass()+": I'm going to sleep");
    }
}
