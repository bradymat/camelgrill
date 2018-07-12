import html from 'yo-yo'
import footer from './footer'
import back from './buttons/back'

module.exports = (state, dispatch) => {
  return html`
    <div>
      <div id="wrapper">
      <div id="main">
      <article>
      ${back(dispatch)}
      <h1 class="major">Hours</h1>
      ${createHours()}
      </article>
      </div>
        ${footer(state, dispatch)}
      </div>
    </div>
  `
  function createHours () {
    return html`<table>
      <tbody>
      ${state.hours.map(function(day){
        return html`
        <tr>
        <td>${day.name}</td>
        <td>${day.hours}</td>
        </tr>
        `
      })}
      </tbody>
      </table>`
  }
}
