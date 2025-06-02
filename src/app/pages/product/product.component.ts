import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}
  ngOnInit() {
        let id = this.route.snapshot.params['id'];
        this.apiService.getProduct(id).subscribe((data) => {
            this.products = data;
        });
    }
}
