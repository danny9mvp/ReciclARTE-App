import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../pages/ingresa/Login';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  public apiURL: string;
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
    this.apiURL = 'https://reciclarte-webserver.herokuapp.com/rest';
  }
  ingresar(login:Login): any{
  	let httpHeaders = new HttpHeaders({
               'Content-Type' : 'application/json'
          });            
          return this.http.post(this.apiURL+"/sesion/logIn", login,
              {
                headers: httpHeaders,
                observe: 'response'
              }
          );
  }
  getRanking() {
	  return new Promise(resolve => {
	    this.http.get(this.apiURL+'/usuarios/ranking').subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
  }
  getPuntosRecoleccion(){
    return new Promise(resolve => {
       this.http.get(this.apiURL+'/mapas/puntosRecoleccion').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  getJornadasRecoleccion(){
    return new Promise(resolve => {
       this.http.get(this.apiURL+'/mapas/jornadasRecoleccion').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
