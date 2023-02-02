import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import { TokenStorageService } from '@core/services/auth/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.getPersonalToDoList()
  }

  getPersonalToDoList(): void {
    this.authService.getpersonaltodo().subscribe(
      data => {
        console.log(data)
      },
      err => {
        console.log(err)
      }
    );
  }
}
