import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   f_name:string;
   l_name:string;
  onSubmit(signupform)
  {
    this.f_name=signupform.value['first_name'];
    this.l_name=signupform.value['last_name'];
  }
  ngOnInit(): void {
  }

}
