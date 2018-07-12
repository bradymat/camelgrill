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
        <h2>Vege Wraps</h2>

        <h3>Halloumi</h3>
        <h4>$10 | Combo $15</h4>
        <p>Grilled Sweet Potatoes, Eggplant, Halloumi Cheese, Hummus, Paprika Aioli, Balsamic Reduction.</p>

        <h3>Falafel</h3>
        <h4>$10 | Combo $15</h4>
        <p>We make our own falafel from broad beans, chickpeas, corriander, parsley, garlic, onions, toasted seasame, cumin and caraway seeds.</p>

        <span class="image main"><img src="https://user-images.githubusercontent.com/20106637/42531731-d4eec106-84d8-11e8-9a8d-3e493feec289.jpg" alt="" /></span>
        Wrap

        <span class="image main"><img src="https://user-images.githubusercontent.com/20106637/42531716-ce7b3fd4-84d8-11e8-9f8e-0de6282ff035.jpg" alt="" /></span>
        Shish Kebabs
      </article>
      </div>
        ${footer(state, dispatch)}
      </div>
      <style>
body {font-family: Arial;}

/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  font-size: 17px;
  width: 33.33333%;
  border-radius: none;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
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
    ${foodMenu.map(function(catergory){
      return html`
        <button class="tablinks" onclick=${() => openMenuVarriant(event, catergory.name)} >${catergory.name}</button>
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
      console.log(varriant);
      console.log(document.getElementById(varriant));
      document.getElementById(varriant).style.display = "block";
      event.currentTarget.className += " active";
  }
}
