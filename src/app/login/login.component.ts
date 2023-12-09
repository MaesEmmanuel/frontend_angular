import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators }
  from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { AppUser } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userFormGroup:FormGroup;
  errorMessage:any;


  constructor(
    private authService: AuthenticationService,
    private router: Router){ }
 

  ngOnInit(){

    this.userFormGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
    this.userFormGroup.reset({ username: '',  password: '' });
  }

  handleLogin(){
    let username = this.userFormGroup.value.username;
    let password = this.userFormGroup.value.password;
    this.authService.login(username,password).subscribe({
      next:(appUser:AppUser)=>{
        this.authService.autenticateUser(appUser).subscribe({
          next:(data:boolean)=>{
            this.router.navigateByUrl("/course-table");
          }
        })
      },
      error:(err)=>{
        this.errorMessage=err;
      }
    })
   }


}
