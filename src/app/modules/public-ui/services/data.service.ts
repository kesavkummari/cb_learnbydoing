import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  //registrationForm
  submitForm(formData: any) {
    return this.http.post<any>('https://18jthd48l8.execute-api.us-east-1.amazonaws.com/Dev/insertRegistrationData', formData).pipe(map((res: any) => {
      return res;
    }));
  }
}
