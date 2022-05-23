package com.example.demo.rest;

import com.example.demo.dao.EmployeeDAO;
import com.example.demo.entity.Employee;
import com.example.demo.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api")
public class EmployeeRestController {

    private EmployeeDAO employeeDAO;
    private EmployeeService employeeService;
    //quick and dirty: inject employee dao(use constructor injection)
    @Autowired
    public EmployeeRestController(EmployeeService theEmployeeService){
        employeeService =theEmployeeService;

    }

    //expose "/employees and return list of employee
    @GetMapping("/employee")
    public List<Employee> findAll(){
        return employeeService.findAll();
    }

    //add mapping for GET/employees/{employeeId}

    @GetMapping("/employee/{employeeId}")
    public Employee getEmployee(@PathVariable int employeeId){
        Employee theEmployee=employeeService.findById(employeeId);
        if(theEmployee==null){
            throw new RuntimeException("Employee Id not found");
        }
        return theEmployee;
    }

    //add mapping for POST/employees- add new employee

    @PostMapping("/employee")
    public Employee addEmployee(@RequestBody Employee theEmployee){
        //also just in case they pass an id in JSON set id to 0
        //this is to focus a save of new item instead of update

        theEmployee.setId(0);
        employeeService.save(theEmployee);
        return theEmployee;
    }
    // add mapping for PUT/employees -update existing employee
    @PutMapping("/employee")
    public Employee updateEmployee(@RequestBody Employee theEmployee){
        employeeService.save(theEmployee);
        return theEmployee;
    }

    //add mapping for DELETE/employees/{employeeId}- delete employee
    @DeleteMapping("/employee/{employeeId}")
    public String deleteEmployee(@PathVariable int employeeId){
        Employee tempEmployee=employeeService.findById(employeeId);
        //throw exception if null

        if(tempEmployee==null){
            throw new RuntimeException("Emplyee not found"+ employeeId);
        }
        employeeService.deleteById(employeeId);
        return "Deleted employee id- "+employeeId;
    }
}
