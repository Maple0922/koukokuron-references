var app = new Vue({
  el: '#app',
  data: {
    references: [
      {id: 1, num: 3, photos: 13, selected: true },
      {id: 2, num: 4, photos: 15, selected: false },
      {id: 3, num: 6, photos: 10, selected: false },
      {id: 4, num: 8, photos: 11, selected: false },
      {id: 5, num: 10, photos: 12, selected: false },
      {id: 6, num: 11, photos: 12, selected: false },
      {id: 7, num: 12, photos: 8, selected: false },
      {id: 8, num: 13, photos: 13, selected: false },
      {id: 9, num: 16, photos: 9, selected: false },
      {id: 10, num: 17, photos: 11, selected: false },
      {id: 11, num: 19, photos: 11, selected: false },
      {id: 12, num: 20, photos: 14, selected: false },
      {id: 13, num: 21, photos: 18, selected: false },
      {id: 14, num: 22, photos: 9, selected: false },
      {id: 15, num: 23, photos: 21, selected: false },
      {id: 16, num: 26, photos: 23, selected: false },
      {id: 17, num: 27, photos: 18, selected: false },
      {id: 18, num: 7, photos: 11, selected: false }
    ],
    imageCount: 13,
    selectedClass: 1,
    selectedNumber: 1,
    imageUrl: 'images/1/1.jpg'
  },
  methods: {
    classSelect: function(e){
      const listItemsNode = document.querySelectorAll('.class-select li');
      const listItems = [].slice.call(listItemsNode);
      const clickedItem = e.target;
      const index = listItems.indexOf(clickedItem);
      const numberListItemsNode = document.querySelectorAll('.number-select li');
      for (var i = 0; i < this.references.length; i++) {
        this.references[i].selected = false;
      }
      for (var i = 0; i < this.imageCount; i++) {
          numberListItemsNode[i].classList.remove('selected');
      }
      for (var i = 0; i < this.imageCount; i++) {
        numberListItemsNode[i].classList.remove('selected');
      }
      numberListItemsNode[0].classList.add('selected');
      this.references[index].selected = !this.references[index].selected;
      this.imageCount = this.references[index].photos;
      this.selectedClass = index + 1;
      this.selectedNumber = 1;

      this.imageUrl = 'images/' + String(this.selectedClass) + '/' + String(this.selectedNumber) + '.jpg';
    },

    numberSelect: function(e){
      const listItemsNode = document.querySelectorAll('.number-select li');
      const listItems = [].slice.call(listItemsNode);
      const clickedItem = e.target;
      const index = listItems.indexOf(clickedItem);
      for (var i = 0; i < this.imageCount; i++) {
        listItemsNode[i].classList.remove('selected');
      }
      listItemsNode[index].classList.add('selected');
      this.selectedNumber = index + 1;

      this.imageUrl = 'images/' + String(this.selectedClass) + '/' + String(this.selectedNumber) + '.jpg';
    }
  }
});
