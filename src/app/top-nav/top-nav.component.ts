import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})

export class TopNavComponent {

  searchKeyword: string = "";
  results: any[] = []; // Replace 'any[]' with the actual type of your search results.
  allItems: any[] = [
    { name: 'cafe latte' },
    { name: 'whopper' },
    { name: 'roasted chicken' },
    { name: 'regular fries' },
    { name: 'combo offer' },
    { name: 'fried chicken wings' },
    { name: 'mojito' },
    { name: 'desert' },
  ]; 

  search() {
    // Implement your search logic here.
    // You can filter the results based on the 'searchKeyword'.
    // 'results' should be an array of items that match the search keyword.
    // For example, you can fetch data from an API or from a local array.

    // Example (assuming you have a list of items stored in 'allItems'):
    this.results = this.allItems.filter(item => item.name.includes(this.searchKeyword));
  }


}
