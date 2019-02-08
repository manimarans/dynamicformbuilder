import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {

  }

  public getFormSchema(): Observable<any> {
    return this.http.get("./custom/mock-data/dynamic-form-schema.json");
  }

}
