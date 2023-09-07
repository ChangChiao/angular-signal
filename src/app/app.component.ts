import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SingalComponent } from './singal/singal.component';

@Component({
  standalone: true,
  imports: [RouterModule, SingalComponent],
  selector: 'app-root',
  template: `
    <div>
      <app-singal></app-singal>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-singal';
}
