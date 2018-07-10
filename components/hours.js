import html from 'yo-yo'
import footer from './footer'
import back from './buttons/back'

module.exports = (state, dispatch) => html`
    <div>
      <div id="wrapper">
      <div id="main">
      <article>
      ${back(dispatch)}
      <h2 class="major">Hours</h2>
      <table>
        <tbody>
        <tr>
        <td>Monday</td>
        <td>Closed</td>
        </tr>
        <tr>
        <td>Tuesday</td>
        <td>12 PM - 12 AM</td>
        </tr>
        <tr>
        <td>Wednesday</td>
        <td>12 PM - 2 AM</td>
        </tr>
        <tr>
        <td>Thursday</td>
        <td>12 PM - 2 AM</td>
        </tr>
        <tr>
        <td>Friday</td>
        <td>12 PM - 4 AM</td>
        </tr>
        <tr>
        <td>Saturday</td>
        <td>3 PM - 5 AM</td>
        </tr>
        <tr>
        <td>Sunday</td>
        <td>3 PM - 8 PM</td>
        </tr>
        </tbody>
        </table>
      </article>
      </div>
        ${footer(state, dispatch)}
      </div>
    </div>
  `
