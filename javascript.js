// -----------------------------header bars------------------

let bars=document.getElementById("bars");
let navigation=document.getElementById("main-nav");
bars.addEventListener("click", barsToggle);

function barsToggle() {
  if (navigation.className==="main-nav") {
    navigation.className+=" responsiv";
  } else {
    navigation.className="main-nav";
  }
};
