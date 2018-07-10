import html from 'yo-yo'
import footer from './footer'
import back from './buttons/back'

module.exports = (state, dispatch) => html`
    <div>
      <div id="wrapper">
      <div id="main">
      <article>
        ${back(dispatch)}
        <h1 class="major">Menu</h1>
        <h2>Sharwarma Wraps</h2>
          <table>
          <tbody>
          <tr>
          <td></td>
          <td>Wrap</td>
          <td>Combo</td>
          </tr>
          <tr>
          <td>Chicken</td>
          <td>$10</td>
          <td>$15</td>
          </tr>
          <tr>
          <td>Lamb</td>
          <td>$10</td>
          <td>$15</td>
          </tr>
          <tr>
          <td>Mixed</td>
          <td>$12</td>
          <td>$17</td>
          </tr>
          <tr>
          <td>Beef Kofta</td>
          <td>$12</td>
          <td>$17</td>
          </tr>
          <tr>
          <td>Prawn</td>
          <td>$11</td>
          <td>$16</td>
          </tr>
          </tbody>
          </table>

        <h2>Vege Wraps</h2>

        <h3>Halloumi</h3>
        <h4>$10 | Combo $15</h4>
        <p>Grilled Sweet Potatoes, Eggplant, Halloumi Cheese, Hummus, Paprika Aioli, Balsamic Reduction.</p>

        <h3>Falafel</h3>
        <h4>$10 | Combo $15</h4>
        <p>We make our own falafel from broad beans, chickpeas, corriander, parsley, garlic, onions, toasted seasame, cumin and caraway seeds.</p>


        <h2>Shish Kebabs</h2>
        <p>Marinated lamb, chicken or beef with house made spices served with seasonal salad, hummus and your choice of chips or rice.</p>

          <table>
          <tbody>
          <tr>
          <td>Lamb</td>
          <td>$15</td>
          </tr>
          <tr>
          <td>Beef</td>
          <td>$15</td>
          </tr>
          <tr>
          <td>Chicken</td>
          <td>$15</td>
          </tr>
          <tr>
          <td>Prawn</td>
          <td>$15</td>
          </tr>
          </tbody>
          </table>


        <span class="image main"><img src="https://user-images.githubusercontent.com/20106637/42531731-d4eec106-84d8-11e8-9a8d-3e493feec289.jpg" alt="" /></span>
        Wrap

        <span class="image main"><img src="https://user-images.githubusercontent.com/20106637/42531716-ce7b3fd4-84d8-11e8-9f8e-0de6282ff035.jpg" alt="" /></span>
        Shish Kebabs
      </article>
      </div>
        ${footer(state, dispatch)}
      </div>
    </div>
  `
