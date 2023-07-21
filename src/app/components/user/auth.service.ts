import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from './user.model';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';

const POOL_DATA = {
  UserPoolId : "us-east-1_5C5vjLamY",
  ClientId:"59jk3ak1nqc8j4b1lisig0i3aa"
}

// const userPool = new CognitoUserPool(POOL_DATA);

@Injectable({
  providedIn: 'root'
})
export class AuthService {

}
