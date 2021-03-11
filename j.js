/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const list = [
  {
    id:1,
    title:"Random Quote Generator",
    org:"freeCodeCamp",
    stack:"Web stack: CSS, HTML, React.",
    url:"https://codepen.io/tahsin09/full/rNWWqYq"
  },{
    id:2,
    title:"Tribute Page",
    org:"freeCodeCamp",
    stack:"A short story on A. P. J Abdul Kalam. Information retrieved from Wikipedia..",
    url:"https://codepen.io/tahsin09/full/ZVRYBG"
  },{
    id:3,
    title:"Survey Form",
    org:"freeCodeCamp",
    stack:"A survey form Design for the RESPONSIVE WEB DESIGN Project.",
    url:"https://codepen.io/tahsin09/full/VqVYmw"
  },{
    id:4,
    title:"Product Landing Page",
    org:"freeCodeCamp",
    stack:"A Product Landing Page of HP SpectreX360.",
    url:"https://codepen.io/tahsin09/full/axXKJo"
  }
  ,{
    id:5,
    title:"Technical Documentation Page",
    org:"freeCodeCamp",
    stack:"A replication of CodeCademy.",
    url:"https://codepen.io/tahsin09/full/zXLWOm"
  }
];