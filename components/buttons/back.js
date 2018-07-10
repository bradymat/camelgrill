import html from 'yo-yo'
import handler from '../handlers/back'

export default (dispatch) => html`<div class="close" onclick=${() => handler(dispatch)} ></div>`
