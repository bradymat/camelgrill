import html from 'yo-yo'

module.exports = ({ title }, dispatch) => {
  window.scrollTo(0, 0);
  return html`
<footer id="footer">
  <p class="copyright">Developer: <a href="http://bradymat.com">bradymat</a></p>
</footer>
`
}
