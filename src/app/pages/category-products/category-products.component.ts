import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css'],
  imports: [CommonModule, CardComponent]
})
export class CategoryProductsComponent implements OnInit {
  category: string = '';
  products: any[] = [];

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const categoryName = params.get('categoryName');
      if (categoryName) {
        this.category = categoryName
        this.api.getCategoryProducts(categoryName).subscribe((data: any) => {
          this.products = data;
        });
      }
    });
  }
}