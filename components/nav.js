import html from 'yo-yo'

module.exports = ({ title, navigation }, dispatch) => {
  return html`
  ${nav(navigation)}
`
  function nav (menuItems) {
    return html`
    <nav>
      <ul>
        ${menuItems.map(function({route, label}, i) {
            return html`<li key={i} onclick=${() => changePage(route)} ><a>${label}</a></li>`
        })}
      </ul>
    </nav>
    `
  }
  function changePage (route) {
    dispatch({type: 'CHANGE_ROUTE', payload: route})
  }
}
