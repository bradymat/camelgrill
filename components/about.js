import html from 'yo-yo'
import footer from './footer'
import back from './buttons/back'

module.exports = (state, dispatch) => html`
    <div>
      <div id="wrapper">
      <div id="main">
      <article>
      ${back(dispatch)}
      <h2 class="major">About</h2>
      <p>Hello! The Camel Grill is a company set up by Abdalla Tammam to share his skills as a chef.
        Originally we opened as a food carvan but now we have our own kitchen on Dixon Street!
        We would love to take the chance to welcome you into our kitchen.
        Outside of running the business, I love to spend time messing around in my kitchen at home creating new dishes and sharing food with family and friends.</p>
      <span class="image main"><img src="https://user-images.githubusercontent.com/20106637/42531699-c26e2cf6-84d8-11e8-95f7-0cc82a9eb046.jpg" alt="" /></span>
      <p>Abdalla cooking up a feast for Cuba Dupa</p>
      <span class="image main"><img src="https://user-images.githubusercontent.com/20106637/42531706-c7e7c8f4-84d8-11e8-9d59-33e5a82ad901.jpg" alt="" /></span>
      <p>Humble beginnings as Abdalla paints his food caravan</p>
      </article>
      </div>
        ${footer(state, dispatch)}
      </div>
    </div>
  `
