import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArgonauteService } from './shared/argonaute.service';
import { Argonaute } from './models/argonaute.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'argonautes';

  argonaute: Argonaute = new Argonaute(0, "");

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private argonauteService: ArgonauteService) {
      this.argonaute = new Argonaute(0, "");
    }
 
  onSubmit(): void {
    this.argonauteService.save(this.argonaute)
  }


}
