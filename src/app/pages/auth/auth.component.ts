import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  erreur: boolean = true;
  password: string = '';
  login: string = '';

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  isAuthenticated() {
    if (this.login === 'Oriane' && this.password === 'oriane') {
    localStorage.setItem('isConnected', 'true');
    this.route.navigateByUrl('/form/add');
    } else {
    this.erreur = false;
    }
  }

}
