// Tia Truong 05/27/2024

function greeting(store_name) {
  console.log(`Thank you for visiting ${store_name}, we hope you have a great time shopping with us!`);
}

// let items = ['wintermelon', 'mango', 'brown sugar'];

function shop() {
  const store_details = {
    items: ['golden milk', 'banana', 'guava'],
    sales: 0,
    
    add_item(item) {
      this.items.push(item);
    },

    bought_item(item) {
      if(this.items.indexOf(item) == -1) {
        console.log('This item does not exist.');
      } else {
        this.items.splice(this.items.indexOf(item),1);
        this.sales++;
      }
    }
  };

  store_details.add_item("strawberry");
  store_details.add_item('lychee');
  store_details.add_item('durian');
  store_details.add_item('passion fruit');
  store_details.add_item('dragon fruit');

  store_details.bought_item('lychee');
  store_details.bought_item('honey lemon');

  console.log(`Today we had ${store_details.sales} sales!`);
  console.log('Thank you for shopping!');
}

function app() {
  for(let i = 0; i < 5; i++) {
    greeting("Tia's Tea Shop");
  }
}
app();
shop();