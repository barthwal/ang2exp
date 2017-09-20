import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.modal';


@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
	ingredient: Ingredient[] = [
		new Ingredient('Apples', 20),
		new Ingredient('Timatoes', 5)
	];

	constructor() { }

	ngOnInit() {
	}

}
