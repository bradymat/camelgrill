import html from 'yo-yo'
import footer from './footer'
import back from './buttons/back'

module.exports = (state, dispatch) => {
  const { foodMenu } = state
  return html`
    <div>
      <div id="wrapper">
      <div id="main">
      <article>
        ${back(dispatch)}
        <h1 class="major">Menu</h1>
        ${createMenu()}
      </article>
      </div>
        ${footer(state, dispatch)}
      </div>
      <style>
        .tab {
          overflow: hidden;
          border: 1px solid #ccc;
        }
        .tab div {
          background-color: inherit;
          float: left;
          border: none;
          outline: none;
          cursor: pointer;
          transition: 0.3s;
          font-size: 17px;
          border-radius: none;
          padding: 10px;
          width: 25%;
          text-align: center;
          transition: background-color 0.3s ease-in-out;
          transition-property: background-color;
        }

        .tab div:hover {
          background-color: #aaa69d;
        }

        .tab div.active {
          background-color: #d1ccc0;
          color: #fff;
        }

        .tabcontent {
          display: none;
          padding: 6px 12px;
          border-top: none;
        }
        #tabbedContent div:nth-child(1){
        display: block;
        }
        #tabbedContent div:nth-child(1){
        display: block;
        }
      </style>
    </div>
  `
  function createMenu () {
    return html`
    <div id="menu">
    <div class="tab">
    ${foodMenu.map(function(catergory, i){
      if(i === 0) {
        return html`
          <div class="tablinks active" onclick=${() => openMenuVarriant(event, catergory.name)} >${catergory.name}</div>
          `
      }
      return html`
        <div class="tablinks" onclick=${() => openMenuVarriant(event, catergory.name)} >${catergory.name}</div>
        `
    })}
    </div>
    <div id="tabbedContent">
    ${foodMenu.map(function(catergory){
      return html `<div id="${catergory.name}" class="tabcontent">
        ${catergory.varriants.map(function(varriant){
          return html`
          <div>
            <h3>${varriant.name}</h3>
            <h4>$${varriant.price}</h4>
            <p>${varriant.description}</p>
            <hr>
          </div>`
          })}
        </div>`
      })}
      </div>
      </div>`
  }
  function openMenuVarriant(event, varriant) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(varriant).style.display = "block";
      event.currentTarget.className += " active";
  }
}
