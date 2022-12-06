const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

const renderTable = (data) => {
  let content = "";

  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      content += `
        <button class="color-button ${data[i]} active" onClick="changeColor('${data[i]}')"></button>
        `;
    }
    content += `
    <button class="color-button ${data[i]} " onClick="changeColor('${data[i]}')"></button>
    `;
  }

  document.getElementById("colorContainer").innerHTML = content;
};

const changeColor = (color) => {
  document.getElementById("house").classList.add(color);
  let btn = document.getElementsByClassName("color-button");
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }

      this.className += " active";
    });
  }
};

renderTable(colorList);
