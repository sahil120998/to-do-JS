import {Component} from "@angular/core"
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { timestamp } from "rxjs/operators";
import { AuthService, AuthResponseData } from "./auth.service";


@Component({
    selector: 'app-auth',
    templateUrl: 'auth.component.html'
})

export class AuthComponent{

constructor(private authService:AuthService,private router: Router){}

isLoginMode = true;
error : string =null;


onSwitchMode(){
    this.isLoginMode = !this.isLoginMode 
}
onHandleError(){
    this.error = null
}

onSubmit(authForm:NgForm){
    const email = authForm.value.email;
    const password = authForm.value.password;
    let authObs: Observable<AuthResponseData>;

    if(this.isLoginMode){
        authObs = this.authService.login(email,password)
    }else{
        authObs  = this.authService.signUp(email,password)
    }

    authObs.subscribe(
            resData =>{
                this.router.navigate(['/recipes'])
            },
            error => {
                console.log(error);
                this.error = "An error accured."

            }

        )

    authForm.reset()
}
}