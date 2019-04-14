import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  email: string;
  password: string;

  ngOnInit() {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe(data => {
      this.router.navigate(['']);
    });
  }
}
