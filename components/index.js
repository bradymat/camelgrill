import html from 'yo-yo'
import nav from './nav'
import footer from './footer'

module.exports = (state, dispatch) => html`
    <div>
      <div id="wrapper">
      <header id="header">
        <div class="content">
          <div class="inner">
          <img id="logo" src="${state.logo2}">
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
