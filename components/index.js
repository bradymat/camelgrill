import html from 'yo-yo'
import nav from './nav'
import footer from './footer'

module.exports = (state, dispatch) => html`
    <div>
      <div id="wrapper">
      <header id="header">
        <div class="content">
          <div class="inner">
          <img id="logo" src="https://user-images.githubusercontent.com/20106637/42538183-4fb20666-84eb-11e8-8ed9-16e1f3f43364.png">
            <p>Camel Grill brings a combination of mouth watering flavors of the middle east to Wellington.</p>
            <p>Quality hand made food with authentic spices and fresh ingredients.</p>
          </div>
        </div>
        ${nav(state, dispatch)}
      </header>

        ${footer(state, dispatch)}
      </div>
    </div>
  `
