export default class CategoryView {
	constructor() {
		this.categoryList = document.querySelector('.list-categories');
	}

	renderCategoryList(categories) {
		categories.forEach(category => {
			const li = document.createElement('li');
			const a = document.createElement('a');
			a.classList.add('item-categories');
			a.href = 'javascript:void(0)';
			a.textContent = category;
			li.appendChild(a);
			this.categoryList.appendChild(li);
		});
	}
}
