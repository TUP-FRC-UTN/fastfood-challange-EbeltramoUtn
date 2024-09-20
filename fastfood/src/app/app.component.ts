import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EntregaComponent } from './components/entrega/entrega.component';
import { CocinaComponent } from './components/cocina/cocina.component';
import { PosComponent } from './components/pos/pos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EntregaComponent,CocinaComponent,PosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fastfood';
}
