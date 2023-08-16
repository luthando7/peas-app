import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})
export class FilterModalComponent  implements OnInit {
  uniqueCategories: string[] = ['All', 'meat', 'dairy', 'starch', 'carbs'];
  selectedCategory: string = 'All'; // Default selected category

  constructor(private modalController: ModalController) {}

  onCategoryChange() {
    // No need to do anything here, we're just using this to trigger the filter when selection changes
  }

  closeModal() {
    this.modalController.dismiss(this.selectedCategory);
  }

  ngOnInit() {}

}
