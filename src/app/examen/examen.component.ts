import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit{
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  formularioEnviadoex1(){
    this.http.post<any>("http://localhost:4080/ex1", {}).subscribe();
  }

  formularioEnviadoex2(){
    this.http.post<any>("http://localhost:4080/ex2", {}).subscribe();
  }

  formularioEnviadoex3(){
    this.http.post<any>("http://localhost:4080/ex3", {}).subscribe();
  }

}
