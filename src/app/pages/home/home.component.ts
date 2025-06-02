import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   products:any;

   constructor(private apiService: ApiService) {
     this.apiService.getProducts().subscribe((data) => {
       this.products = data;
     });
   }
}
