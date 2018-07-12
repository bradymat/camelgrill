export default () => {
  return {

    title: 'Camel Grill',
    logo: 'https://user-images.githubusercontent.com/20106637/42647972-96591ba8-8659-11e8-94ff-db3df60e1e33.png',
    logo2: 'https://user-images.githubusercontent.com/20106637/42647958-8cb00ee0-8659-11e8-9d88-93fa5fa7e30b.png',
    logo3: 'https://user-images.githubusercontent.com/20106637/42647819-254994ba-8659-11e8-8e13-1dea7abea36b.png',
    route: '/',
    routeHistory: [],
    navigation: [
      {route: '/menu', label: 'Menu'},
      {route: '/about', label: 'About'},
      {route: '/location', label: 'Location'},
      {route: '/hours', label: 'Hours'},
      {route: '/contact', label: 'Contact'}
    ],
    foodMenu: [
      {name: 'Wraps', varriants: [
        {name: 'Falafel (vegan)', price: 10, picture: '', description: 'Our own falafel is blended from broad beans, chickpeas, corriander, parsley, garlic, onions, toasted seasame, cumin and caraway seeds'},
        {name: 'Halloumi', price: 10, picture: '', description: 'Grilled sweet potatoes, eggplant, halloumi cheese, hummus, paprika, aioli, balsamic reduction'},
        {name: 'Chicken', price: 10, picture: '', description: 'Marinated chicken with house made spices served with seasonal salad, hummus'},
        {name: 'Lamb', price: 10, picture: '', description: 'Marinated lamb with house made spices served with seasonal salad, hummus'},
        {name: 'Mixed', price: 12, picture: '', description: 'Marinated lamb and chiken with house made spices served with seasonal salad, hummus'},
        {name: 'Beef', price: 12, picture: '', description: 'Marinated beef kofta with house made spices served with seasonal salad, hummus'},
        {name: 'Prawn', price: 11, picture: '', description: 'Prawns with house made spices served with seasonal salad, hummus'}
      ]},
      {name: 'Pizza', varriants: [
        {name: 'Garlic Bread', price: 5, picture: '', description: 'Garlic butter, parsley, corriander, mozzarella cheese'},
        {name: 'Smoked chicken', price: 7, picture: '', description: 'Mushrooms, red onion, mozzarella cheese, olive oil fusion'},
        {name: 'Smoked salmon', price: 7, picture: '', description: 'Cherry tomatoes, capers, mozzarella cheese, basil dressing'},
        {name: 'Smoked beef', price: 7, picture: '', description: 'Cherry tomatoes, mushrooms, mozzarella cheese, tzatziki dressing'},
        {name: 'Margherita', price: 7, picture: '', description: 'Fresh tomatoes, buffalo cheese, basil pesto, olive oil fusion'}


      ]},
      {name: 'Shish', varriants: [
        {name: 'Lamb', price: 15, picture: '', description: 'Marinated lamb with house made spices served with seasonal salad, hummus and chips or rice'},
        {name: 'Beef', price: 15, picture: '', description: 'Marinated beef with house made spices served with seasonal salad, hummus and chips or rice'},
        {name: 'Chicken', price: 15, picture: '', description: 'Marinated chicken with house made spices served with seasonal salad, hummus and chips or rice'},
        {name: 'Prawn', price: 15, picture: '', description: 'Prawns with house made spices served with seasonal salad, hummus and chips or rice'}
      ]},
      {name: 'Sides', varriants: [
        {name: 'Spicy Chips', price: 5, picture: '', description: 'Chips with spicy aioli'},
        {name: 'Salad', price: 4, picture: '', description: 'Seasonal salad'}

      ]}
    ],
    hours:[
      {name: 'Monday', hours: 'Closed'},
      {name: 'Tuesday', hours: '12 PM - 12 AM'},
      {name: 'Wednesday', hours: '12 PM - 2 AM'},
      {name: 'Thursday', hours: '12 PM - 2 AM'},
      {name: 'Friday', hours: '12 PM - 4 AM'},
      {name: 'Saturday', hours: '3 PM - 5 AM'},
      {name: 'Sunday', hours: '3 PM - 8 PM'}

    ]
  }



}
