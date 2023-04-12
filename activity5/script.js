function addText() {

const container = document.querySelector('.container');
const input =   document.createElement('input');
input.setAttribute("type", "text");
input.setAttribute("value", "some texts here");

container.appendChild(input);
}