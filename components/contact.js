import html from 'yo-yo'
import footer from './footer'
import back from './buttons/back'

module.exports = (state, dispatch) => html`
    <div>
      <div id="wrapper">
      <div id="main">
      <article>
      ${back(dispatch)}
      <h2 class="major">Contact</h2>
      <p>We'd love to hear from you! To get in touch or request catering email Abdalla at <a href="mailto:abdol4gud@gmail.com" target="_">abdol4gud@gmail.com</a> or call us on <span><a href="tel:+6443846813">04-384 6813</a></span></p>
      <p>Like our Facebook page to stay up to date with our latest promotions and special menu items.</p>
      <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FCamelGrillNZ%2F&width=63&layout=button&action=like&size=large&show_faces=false&share=false&height=65&appId" width="63" height="65" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>

      <ul class="icons">
        <li><a href="https://www.facebook.com/pg/CamelGrillNZ" target="_" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
        <li><a href="mailto:abdol4gud@gmail.com" target="_" class="icon fa-envelope"><span class="label">Mail</span></a></li>
        <li><a href="tel:+6443846813" target="_" class="icon fa-phone"><span class="label">Call</span></a></li>
      </ul>
      </article>
      </div>
        ${footer(state, dispatch)}
      </div>
    </div>
  `
