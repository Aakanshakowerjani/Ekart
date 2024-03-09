import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

import { ProductService } from '../services/products/product.service';
import { ProfileService } from '../services/profile/profile.service';
import { UsernameService } from '../services/username.service';
import { Profile } from '../shared/models/Profile';
import { Address } from './address';
import { Cards } from './card';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  flag:boolean=true;
  guest!:number;
  flag1:boolean=true;
  flag2:boolean=true;
  save:boolean=false;
  res:number=0;

  profile!:Profile;

  userclick:boolean=false;
  addclick:boolean=false;
  cardclick:boolean=false;

  //user details
  username!:string;
  password!:string;
  email!:string;
  phoneno!:number;

  // address detalis
  addr:string='';
  city:string='';
  state:string='';
  pin:string='';
  addressDetails!:string;

  //card details
  cardName:string='';
  cardNo:string='';
  expMonth:string='';
  expYear:string='';
  cvv:string=''

//error message
msg:string="";
letters:any= /^[A-Za-z]+$/;

  //all addresses
  addss:Address[]=new Array();
  //all cards
  cards:Cards[]=new Array();

  constructor(private productService:ProductService, private profileService:ProfileService,
    private restService:RestService,private userService: UsernameService) { 
      this.restService.getCustomerByUsername(this.userService.userName).subscribe((user)=>{
        this.username=user.name;
        this.email=user.emailId;
        this.password=user.password;
        this.phoneno=user.phoneNumber;
        this.addr=user.address;
      })
    }

  ngOnInit(): void {
    this.guest=this.productService.guestId;
    
  }

  updateProfile()
  {
    if(this.flag==false)
    {
      this.flag=true;
    }
    else{
      this.flag=false;
    }
    if(this.cardclick===true&&this.userclick===true&&this.addclick)
    {
      this.addclick=false;
      this.userclick=false;
      this.cardclick=false;
    }
  }

  addAdd()
  {
    if(this.flag1==false)
    {
      this.flag1=true;
    }
    else{
      this.flag1=false;
    }
  }

  addCard()
  {
    if(this.flag2==false)
    {
      this.flag2=true;
    }
    else{
      this.flag2=false;
    }
  }

  //updating user details
  editUser(username:string,email:string,phn:string)
  {
    this.res=0;
    this.userclick=true;
      if(username.length===0||email.length===0||phn.length===0)
      {
        this.msg="Username or email cannot be blank";
      }
      else if(!username.match(this.letters))
      {
         this.msg="Username should not contain numbers";
      }
      else if(phn.length!==10)
      {
        this.msg="phone no must contain 10 digits";
      }
      else{
        this.msg="Deatails Saved";
        this.res=1;
        this.profile={
          emailId:email,
          phoneNumber:+phn,
          name:username,
          password:"",
          newPassword:"",
          address:""
        }
        
        this.restService.updateUserDetails(this.profile,this.email).subscribe((data)=>{})
        this.username=username;
        this.email=email;
        this.phoneno=+phn;
      }
  }

  //updating address and adding address
  valcity:any=/^[a-zA-Z ]+$/;
  newAdd(addr:string,city:string,state:string,pin:string)
  {
    this.res=0;
    this.addclick=true;
    if(addr.length===0||city.length===0||state.length===0||pin.length===0)
    {
      this.msg="Please fill all address details";
    }
    else if(pin.length!==6)
    {
      this.msg="pin should contain 6 digits";
    }
    else if(this.valcity.test(city)==false)
    {
      this.msg="city name should not contain any special characters";
    }
    else{
      this.res=1;
      this.msg="Address successfully saved";
      this.addss.push(new Address(addr,city,state,pin));
      this.addressDetails=addr+" "+city+" "+state+" ,"+pin;
      this.restService.updateAddress(this.addressDetails,this.email).subscribe((data)=>{});
    }
  }

  //Add card
   date:Date=new Date();
   yr:number=this.date.getFullYear();
   month:number=this.date.getMonth();
newCard(cname:string,cno:string,em:string,ey:string,cvv:string)
{
  this.res=0;
  this.cardclick=true;
  // expdate:Date=new Date(ey+" "+ey);
  if(cname.length===0||cno.length===0||em.length===0||ey.length===0||cvv.length===0)
  {
    this.msg="Please fill all card details";
  }
  else if(cno.length!==16)
  {
    this.msg="Invalid card No."
  }
  else if(parseInt(ey)<this.yr)
  {
    if(parseInt(ey)===this.yr)
    {
      if(parseInt(em)<this.month)
      {
        this.msg="Exp date is less than the current date";
      }
    }
  }
  else{
    this.res=1;
    this.msg="card details saved successfully";
    this.cards.push(new Cards(cname,cno,em,ey));
  }
}

}
