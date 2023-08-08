import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator,FormControl, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/Services/employee/employee.service';

@Component({
  selector: 'app-register-emp',
  templateUrl: './register-emp.component.html',
  styleUrls: ['./register-emp.component.scss']
})
export class RegisterEmpComponent implements OnInit {
  registerForm!:FormGroup
  constructor(private fromBuilder:FormBuilder,private empService:EmployeeService) { }

  ngOnInit(): void {
    this.registerForm=this.fromBuilder.group({
      name:['',[Validators.required]],

    })
  }

  OnSubmit(){
    let data={
      name:this.registerForm.value.name,
      profileImage:this.registerForm.value.profileImage,
      gender:this.registerForm.value.gender,
      department:this.registerForm.value.department,
      salary:this.registerForm.value.salary,
      startDate:this.registerForm.value.startDate,
      notes:this.registerForm.value.notes
    }
    this.empService.Register(data).subscribe((response:any)=>{
      console.log(response.message);
      console.log("Employee refistered successfully")
    })
  }
}
