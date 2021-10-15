import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  url = 'http://localhost:3000/enroll';

  constructor(private http: HttpClient) { }

  enroll(user:User):Observable<object> {
    return this.http.post<any>(this.url, user);
  }
}
