import { json_data } from "./data.mjs";
const { technology } = json_data;

const technology_data_html_obj = {};

const technology_data_html = technology.map((item, index) => {
  const { name, images, description } = item;
  const { portrait, landscape } = images;

  const technology_image_html = `
        <picture >
            <source media= "(max-width: 677px)" srcset="${landscape}">
            <source media= "(min-width: 678px)" srcset="${portrait}">
            <img class="add_animation_from_x" src="landscape" alt="image of ${name}">
        </picture>
    `;

  const technology_info_html = `
        <div class="text_6 md_2">${name}</div>
        <div class="text_2">${description}</div>
    `;

  if (!technology_data_html_obj[index + 1]) {
    technology_data_html_obj[index + 1] = {
      technology_image_html,
      technology_info_html,
    };
  }
});

const technology_section_image_div = document.querySelector(
  ".technology_section_image"
);
const technology_section_info_div = document.querySelector(
  ".technology_section_info"
);
const technology_switchers_div = document.querySelector(
  ".technology_switchers"
);

function gettechnologySwitchers() {
  technology.forEach((item, index) => {
    const button_element = document.createElement("button");
    button_element.innerText = index + 1;
    button_element.id = index + 1;

    button_element.classList.add("stock_button");

    technology_switchers_div.appendChild(button_element);
    button_element.addEventListener("click", () => {
      updatetechnologyInfo(index + 1);
      button_element.classList.add("active_button");
    });
  });
}
gettechnologySwitchers();

let current_active_button = "1";

function updatetechnologyInfo(id) {
  const { technology_image_html, technology_info_html } =
    technology_data_html_obj[id];

  technology_section_image_div.innerHTML = technology_image_html;
  technology_section_info_div.innerHTML = technology_info_html;

  document
    .getElementById(current_active_button)
    .classList.toggle("active_button");
  current_active_button = id;
}
updatetechnologyInfo("1");
