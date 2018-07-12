import html from 'yo-yo'
import footer from './footer'
import back from './buttons/back'

module.exports = (state, dispatch) => html`
    <div>
      <div id="wrapper">
      <div id="main">
      <article>
      ${back(dispatch)}
      <h1 class="major">Location</h1>
      <p>We are located at <a href="https://www.google.co.nz/maps/place/Camel+Grill/@-41.2920375,174.7750122,17z/data=!3m1!4b1!4m5!3m4!1s0x6d38afd7471559d5:0xbb9b6a62c1b06ee4!8m2!3d-41.2920375!4d174.7772009" target="_">37b Dixon Street</a> in the heart of Wellington City</p>
      <span class="image main"><img src="https://user-images.githubusercontent.com/20106637/42534102-ecbf717a-84df-11e8-8d67-1307a4f55be5.jpg" alt="" /></span>
      <div id="map" class="map-responsive">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11991.093308127833!2d174.7772009!3d-41.2920375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbb9b6a62c1b06ee4!2sCamel+Grill!5e0!3m2!1sen!2snz!4v1530612206837" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
      </article>
      </div>
        ${footer(state, dispatch)}
      </div>
    </div>
  `
