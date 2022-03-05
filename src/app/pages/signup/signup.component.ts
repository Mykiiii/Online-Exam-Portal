import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private snack: MatSnackBar) { }
  public user = {
    username:'',
    password:'',
    firstName:'',
    lastName:'',

    email:'',
    phone:'',

  };
  ngOnInit(): void {}

  formSubmit(){
    console.log(this.user);
    if(this.user.username == null || this.user.username == ''){
      this.snack.open('Username required','ok',{
        duration: 3000
      });
      return;
    }
 
    //adduser : userservice
    this.userService.addUser(this.user).subscribe(
    (data:any)=>{
      //success
      console.log(data)
      Swal.fire('Success','User is '+data.id,'success');
    },
    (error)=>{
      console.log(error),
      this.snack.open('Something went wrong','',{
        duration: 1000
      });
    }
    )
  } 

}
