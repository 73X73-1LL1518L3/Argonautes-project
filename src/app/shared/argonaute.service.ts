import { HttpClient } from '@angular/common/http';
import { Injectable, ɵɵqueryRefresh } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Argonaute } from '../models/argonaute.model';


@Injectable({
  providedIn: 'root'
})
export class ArgonauteService {

  private argonauteList: Argonaute[] = []

  private url = "http://localhost:8080"

  constructor(
    private http: HttpClient,
    private router: Router) {
    this.findAll()
  }


  public findAll(): Observable<Argonaute[]> {
    return this.http.get<Argonaute[]>(this.url + '/argonautes/all');
  }

  public save(argonaute: Argonaute) {
    return this.http.post<Argonaute>(this.url + '/argonautes/add', argonaute ).subscribe({
      next: data => {
        console.log(data);
        window.location.reload()
      }
    })
  }
}
