import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InformationService } from '../information.service';
import { ProductService } from '../services/products/product.service';
import { UsernameService } from '../services/username.service';
import { Login } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Username:string="";
  Password:string="";
  message:string="";
  clicked:boolean=false;
  loginForm!:Login;
  
  color:string="";

  letters:any= /^[A-Za-z]+$/;

  constructor(private router:Router,private productService:ProductService , 
    private userService:UsernameService,
    private loginService:LoginService,
    private informationService:InformationService) { }
  val:number=this.productService.guestId;
  ngOnInit(): void {

  }

  validate(uname:string,psw:string)
  {
    this.val=0;
    this.color="red";
    this.clicked=true;
    if(uname.length===0||psw.length===0)
    {
      this.message="Usename or Password cannot be empty";
    }
    else if(psw.length<6)
    {
      this.message="Password should contain min 6 characters";
    }
    else if(!uname.match(this.letters))
    {
      this.message="User Name should contain ony letters";
    }
    else{
      this.Username = uname;
      this.userService.userName = this.Username;
      this.loginForm={
        name:this.Username,
        password:psw
      }
      this.loginService.login(this.loginForm).subscribe(
        (data)=>{
          if(data){
            this.color="green";
            this.val=1;
            this.message=`Logged in successfully Welcome ${uname}`;
            setTimeout(()=>{
              this.productService.guestId=1;
              localStorage.setItem('user',this.Username);
              this.router.navigate(['']);
            },2000)
          }
          else{
            this.val=0;
            this.message=`Invalid Username or Password`;
          }
        }
      ) 
    }
  }
  clear()
  {
    this.Username="";
    this.Password="";
    this.clicked=false;
  }
 

}
