import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registeredUser={email:"",password:""};
  constructor() { }
  registerUser(private _auth:AuthService)
  {
    //console.log(this.registeredUser);
    this._auth.registerUser(this.registeredUser)
    .subscribe(
    res=>console.log(res),
    err=>console.log(err)
    )

  }
  ngOnInit(): void {
  }

}
