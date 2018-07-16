import html from 'yo-yo'
import footer from './footer'
import back from './buttons/back'

module.exports = (state, dispatch) => html`
    <div>
      <div id="wrapper">
      <div id="main">
      <article>
      ${back(dispatch)}
      <h1 class="major">Contact</h1>
      <p>We'd love to hear from you! To get in touch or request catering message Camel Grill on <a href="https://www.facebook.com/pg/CamelGrillNZ" target="_">Facebook</a> or call us on <span><a href="tel:+6443846813">04-384 6813</a></span></p>
      <p>Like our Facebook page to stay up to date with our latest promotions and special menu items.</p>
      <span id="likeButton" >
      <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FCamelGrillNZ%2F&width=63&layout=button&action=like&size=large&show_faces=false&share=false&height=65&appId" width="63" height="65" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
      </span>
      <ul class="icons">
        <li><a href="https://www.facebook.com/pg/CamelGrillNZ" target="_" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
        <li><a href="https://www.google.co.nz/maps/place/Camel+Grill/@-41.2920375,174.7750122,17z/data=!3m1!4b1!4m5!3m4!1s0x6d38afd7471559d5:0xbb9b6a62c1b06ee4!8m2!3d-41.2920375!4d174.7772009" target="_" class="icon fa-map-marker"><span class="label">Address</span></a></li>
        <li><a href="tel:+6443846813" target="_" class="icon fa-phone"><span class="label">Call</span></a></li>
      </ul>
      <div id="map" class="map-responsive">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11991.093308127833!2d174.7772009!3d-41.2920375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbb9b6a62c1b06ee4!2sCamel+Grill!5e0!3m2!1sen!2snz!4v1530612206837" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
      </article>
      </div>
        ${footer(state, dispatch)}
      </div>
    </div>
  `
