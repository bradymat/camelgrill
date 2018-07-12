export default () => {
  return {

    title: 'Camel Grill',
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
        {name: 'Falafel', price: 10, picture: '', description: 'We make our own falafel from broad beans, chickpeas, corriander, parsley, garlic, onions, toasted seasame, cumin and caraway seeds.'},
        {name: 'Halloumi', price: 10, picture: '', description: 'Grilled Sweet Potatoes, Eggplant, Halloumi Cheese, Hummus, Paprika Aioli, Balsamic Reduction.'},
        {name: 'Chicken', price: 10, picture: '', description: 'We make our own falafel from broad beans, chickpeas, corriander, parsley, garlic, onions, toasted seasame, cumin and caraway seeds.'},
        {name: 'Lamb', price: 10, picture: '', description: 'We make our own falafel from broad beans, chickpeas, corriander, parsley, garlic, onions, toasted seasame, cumin and caraway seeds.'},
        {name: 'Mixed', price: 12, picture: '', description: 'We make our own falafel from broad beans, chickpeas, corriander, parsley, garlic, onions, toasted seasame, cumin and caraway seeds.'},
        {name: 'Beef', price: 12, picture: '', description: 'We make our own falafel from broad beans, chickpeas, corriander, parsley, garlic, onions, toasted seasame, cumin and caraway seeds.'},
        {name: 'Prawn', price: 11, picture: '', description: 'We make our own falafel from broad beans, chickpeas, corriander, parsley, garlic, onions, toasted seasame, cumin and caraway seeds.'}
      ]},
      {name: 'Shish', varriants: [
        {name: 'Lamb', price: 15, picture: '', description: 'blah'},
        {name: 'Beef', price: 15, picture: '', description: 'blah'},
        {name: 'Chicken', price: 15, picture: '', description: 'blah'},
        {name: 'Prawn', price: 15, picture: '', description: 'blah'}
      ]},
      // {name: 'Burger', varriants: [
      //   {name: 'Calander', price: '$', picture: '', description: 'blah'}
      // ]},
      {name: 'Sides', varriants: [
        {name: 'Chips', price: '$', picture: '', description: 'blah'}
      ]},
    ]

  }



}
