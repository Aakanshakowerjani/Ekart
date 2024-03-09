import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InformationService } from '../information.service';
import { ProfileService } from '../services/profile/profile.service';
import { SignUp } from './signup';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  Username:string="";
  Password:string="";
  message:string="";
  clicked:boolean=false;
  val:number=0;
  color:string="";
  email:string="";
  cpassword:string="";
  phone:string="";
  letters:any= /^[A-Za-z]+$/;
  mailformat:any = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  signUpForm!:SignUp;

  constructor(private router:Router,private profileService:ProfileService,
    private signupService:SignupService,
    private informationService:InformationService) { }

  ngOnInit(): void {
  }

validate(uname:string,psw:string,cpsw:string,email:string,phone:string)
  {
    this.val=0;
    this.color="red";
    this.clicked=true;
    if(uname.length===0||psw.length===0||email.length===0||phone.length===0)
    {
      this.message="Please fill all the details";
    }

    else if(!uname.match(this.letters))
    {
      this.message="User Name should contain only letters";
    }

    else if(!email.match(this.mailformat))
    {
      this.message="Mail format doesnot match the criteria";
    }

    else if(/^\d+$/.test(phone)===false)
    {
      this.message="Phone digit should only contain numbers";
    }

    else if(phone.toString().length!==10)
    {
      this.message="Phone number must contain 10 digits";
    }

    else if(psw.length<6)
    {
      this.message="Password should contain min 6 characters";
    }

    else if (psw.search(/[a-z]/i) < 0) {
        this.message="Your password must contain at least one letter.";
    }

    else if (psw.search(/[0-9]/) < 0) {
        this.message="Your password must contain at least one digit.";
    }

    else if (!this.checkIfStringHasSpecialChar(psw))
    {
        this.message="Password should contain atleast one speacial character";
    }

    else if(psw!==cpsw)
    {
      this.message="Password and Confirm Password must match";
    }
    else{
      this.color="green";
      this.val=1;
      this.message=` Registered successfully Welcome ${uname}`;
      this.Username=uname;
      this.Password=psw;
      this.email=email;
      this.phone=phone;
      this.profileService.username=this.Username;
      this.profileService.password=this.Password;
      this.profileService.email=this.email;
      this.profileService.phoneno=this.phone;
      this.signUpForm={
        name:this.Username,
        password:this.Password,
        emailId:this.email,
        phoneNumber:this.phone,
        address:""
      }
      console.log("signup form ",this.signUpForm);
      this.signupService.signup(this.signUpForm).subscribe(
        (data)=>{
          console.log("response",data);
          
        }
      )
      setTimeout(()=>{
        this.router.navigate(['login']);
      },2000)
    }
  }

   checkIfStringHasSpecialChar(pass:string):boolean {
    let spChar = "/[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/";
    for (var i = 0; i < pass.length; i++) {
       if (spChar.indexOf(pass.charAt(i)) != -1) {
           return true;
       }
    }
    return false;
}

}
