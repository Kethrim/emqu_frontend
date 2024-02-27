import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sistema-latencia';

  constructor(private router: Router) {
  }
  
  ngOnInit(): void {    
    this.router.navigate(['/inicio-sesion']);
    // this.router.navigate(['/gestion-equipos']);

  }
  
}
