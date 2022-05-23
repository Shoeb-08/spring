package Hibernate;

import Hibernate.entity.Student;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import java.util.List;

public class QueryStudentDemo {
    public static void main(String[] args) {
        // create sesssion factory
        SessionFactory factory = new Configuration()
                .configure("hibernate.cfg.xml")
                .addAnnotatedClass(Student.class)
                .buildSessionFactory();

        // create session
        Session session = factory.getCurrentSession();

        try {
            // start a transaction
            session.beginTransaction();

            //query student
            List<Student> theStudents=session.createQuery("from Student").getResultList();
            //display the student
            displayStudents(theStudents);

            //query students lastname="doe"
            theStudents=session.createQuery("from Student s where s.lastName='Doe'").list();
            //display the students
            System.out.println("\n\n Students who have last name of Doe");
            displayStudents(theStudents);
            //query students lastname="doe" Or first name is  john
            theStudents=session.createQuery("from Student s where"
                    + " s.lastName='Doe' OR s.firstName='Mary'").list();
            //display the students
            System.out.println("\n\n Students who have last name of Doe Or First Name Mary");
            displayStudents(theStudents);
            // query students where email LIKE '%gmail.com'
            theStudents = session.createQuery("from Student s where"
                    + " s.email LIKE '%gmail.com'").list();

            System.out.println("\n\nStudents whose email ends with gmail.com");
            displayStudents(theStudents);
            // commit transaction
            session.getTransaction().commit();
            System.out.println("Done!");
        }
        finally {
            factory.close();
        }
    }

    private static void displayStudents(List<Student> theStudents) {
        for (Student tempStudent : theStudents) {
            System.out.println(tempStudent);
        }
    }
}
