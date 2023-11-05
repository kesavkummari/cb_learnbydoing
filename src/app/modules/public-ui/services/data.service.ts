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
    return this.http.post<any>('https://2jgaadnmuh.execute-api.us-east-1.amazonaws.com/QA/insertRegistraion', formData).pipe(map((res: any) => {
      return res;
    }));
  }
}
