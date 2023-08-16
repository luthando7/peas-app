import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterModalComponent } from './filter-modal/filter-modal.component';

export interface Item {
  category: string;
  name: string;
  checked: boolean;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  items: Array<Item> = [];
  selectedCategory: string = 'All';
  filteredItems: Item[] = [];

  constructor(private modalController: ModalController) {
    this.items = [
      { category: 'meat', name: 'beef', checked: false },
      { category: 'meat', name: 'chicken', checked: true },
      { category: 'meat', name: 'pork', checked: false },
      { category: 'dairy', name: 'milk', checked: false },
      { category: 'dairy', name: 'cheese', checked: true },
      { category: 'dairy', name: 'yogurt', checked: true },
      { category: 'starch', name: 'potato', checked: false },
      { category: 'starch', name: 'rice', checked: false },
      { category: 'starch', name: 'pasta', checked: false },
      { category: 'carbs', name: 'bread', checked: false },
      { category: 'carbs', name: 'cereal', checked: true },
      { category: 'fruits', name: 'apple', checked: true },
      { category: 'fruits', name: 'banana', checked: true },
      { category: 'fruits', name: 'orange', checked: true },
      { category: 'fruits', name: 'grapes', checked: false },
      { category: 'vegetables', name: 'carrot', checked: false },
      { category: 'vegetables', name: 'broccoli', checked: false },
      { category: 'vegetables', name: 'spinach', checked: false },
      { category: 'snacks', name: 'chips', checked: false },
      { category: 'snacks', name: 'pretzels', checked: false },
      { category: 'snacks', name: 'nuts', checked: false },
      { category: 'beverages', name: 'water', checked: false },
      { category: 'beverages', name: 'juice', checked: false },
      { category: 'beverages', name: 'soda', checked: false },
    ];

    this.filteredItems = this.items
  }

  onCheckboxChange(item: Item) {
    item.checked = !item.checked; // Toggle the checked status
    console.log('Item state >>>', item);
    
    // this.apiService.updateItemCheckedStatus(item).subscribe(
    //   () => {
    //     console.log('Item status updated successfully.');
    //   },
    //   error => {
    //     console.error('Error updating item status:', error);
    //   }
    // );
  }

  onCategoryChange() {
    // Filter items based on the selected category
    this.filteredItems = this.selectedCategory === 'All' ? this.items : this.items.filter(item => item.category === this.selectedCategory);
    console.log('Filtered items >>>', this.filteredItems);
    
  }

  async openFilterModal() {
    const modal = await this.modalController.create({
      component: FilterModalComponent
    });

    modal.onDidDismiss().then(data => {
      console.log('Data >>>', data);
      const selectedCategory = data.data;
      console.log('Selected category >>>', selectedCategory)
      if (selectedCategory) {
        this.selectedCategory = selectedCategory;
        this.onCategoryChange();
      }
    });

    return await modal.present();
  }
}
