package Demo;

import com.fasterxml.jackson.databind.ObjectMapper;
import Demo.Address;
import java.io.File;

public class Driver {
    public static void main(String[] args) {
        try{
            ObjectMapper mapper=new ObjectMapper();

            Student theStudent=mapper.readValue(new File("data/sample-full.json"),Student.class);
            System.out.println("First Name "+theStudent.getFirstName());
            System.out.println("Last Name "+theStudent.getLastName());

            Address tempAddress=theStudent.getAddress() ;
            System.out.println("Street "+tempAddress.getStreet());
            System.out.println("City "+tempAddress.getCity());

            for(String tempLang:theStudent.getLanguages()){
                System.out.println(tempLang);
            }

        }
        catch (Exception e){
            e.printStackTrace();
        }
    }
}
