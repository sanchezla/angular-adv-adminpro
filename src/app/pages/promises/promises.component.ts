import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // const promesa = new Promise( (resolve, reject) => {

    //   if (false) {
    //     resolve('ejecutado'); 
    //   } else {
    //     reject('algo salio mal');
    //   }
      
    // });

    // promesa
    // .then((mensaje) => {
    //   console.log(mensaje);
    // })
    // .catch((error) => {
    //   console.log('Error en promesa', error);
    // });

    // console.log('adios');

    this.getUsers().then((usuario) => {
      console.log(usuario);
    });
    
  }

  getUsers() {
    const promise = new Promise((resolve, reject) => {
      fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(body => resolve(body.data))
    });
    return promise;
  }

}
