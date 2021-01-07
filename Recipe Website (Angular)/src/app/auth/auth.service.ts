import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core"
import { Router } from "@angular/router";
import { BehaviorSubject, from} from "rxjs";
import {tap } from "rxjs/operators";
import {User} from "./user.model";
import { environment } from "../../environments/environment"


export interface AuthResponseData{
    idToken: string;
    email: string;
    refreshToken: string;	
    expiresIn: string;
    localId: string;
    registered:	boolean;
}


@Injectable()

export class AuthService{
    user = new BehaviorSubject<User>(null)

    constructor(private http:HttpClient,private router: Router){}

    signUp(email:string,password:string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseApiKey
            ,{
                email: email,
                password: password,
                returnSecureToken: true
            }
         ).
        pipe(tap(resData =>{
                this.handleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn)
                            }
                )
            );
    }


    login(email:string,password:string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseApiKey
        ,{
            email: email,
            password: password,
            returnSecureToken: true}).
            pipe(tap(resData => {
                this.handleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn) 
            }));
    }

    private handleAuthentication(email: string, userId:string, token:string, expiresIn:number){
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000) 
        const user = new User(email,userId,token,expirationDate)
        this.user.next(user)
        localStorage.setItem('userData',JSON.stringify(user))
    }

    autoLogin(){

        const userData:{
            email:string,
            id: string,
            _token: string,
            _tokenExpirationData: string
        } = JSON.parse(localStorage.getItem('userData'))
        if(!userData){
            return
        }
        const loadedUser = new User(
            userData.email,
            userData.id,
            userData._token,
            new Date(userData._tokenExpirationData)
        )

        if(loadedUser.token){
            this.user.next(loadedUser)
        }
    }

    logout(){
        this.user.next(null);
        this.router.navigate(["./auth"])
    }

}