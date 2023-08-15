import { json_data } from "./data.mjs";
const { destinations } = json_data;

const destination_data_html_obj = {};

const destination_data_html = destinations.map((item) => {
  const { name, images, description, distance, travel } = item;
  const { webp } = images;

  const destination_image_html = `
        <img src="${webp}" alt="image of ${name}" class="add_animation_from_x"/>
    `;

  const destination_info_html = `
        <div class="destination_name text_7 uppercase">${name}</div>
        <div class="destination_desc text_2">${description}</div>
        <div class="destination_data">
          <div class="average_distance">
            <div class="text_1 uppercase grey_text">average distance</div>
            <div class="text_3 uppercase">${distance}</div>
          </div>
          <div class="est_travel_time">
            <div class="text_1 uppercase grey_text">est. travel time</div>
            <div class="text_3 uppercase ">${travel}</div>
          </div>
        </div>
    `;

  if (!destination_data_html_obj[name]) {
    destination_data_html_obj[name] = {
      destination_image_html,
      destination_info_html,
    };
  }
});

const destination_section_image_div = document.querySelector(
  ".destination_section_image"
);
const destination_section_info_div = document.querySelector(
  ".destination_section_info"
);
const destination_switchers_div = document.querySelector(
  ".destination_switchers"
);

function getDestinationSwitchers() {
  destinations.forEach((item) => {
    const { name } = item;
    const button_element = document.createElement("button");
    button_element.innerText = name;
    button_element.id = name;

    button_element.classList.add("stock_button");

    destination_switchers_div.appendChild(button_element);
    button_element.addEventListener("click", () => {
      updateDestinationInfo(name);
      button_element.classList.add("active_button");
    });
  });
}
getDestinationSwitchers();

let current_active_button = "Moon";

function updateDestinationInfo(id) {
  const { destination_image_html, destination_info_html } =
    destination_data_html_obj[id];

  destination_section_image_div.innerHTML = destination_image_html;
  destination_section_info_div.innerHTML = destination_info_html;

  document
    .getElementById(current_active_button)
    .classList.toggle("active_button");
  current_active_button = id;
}
updateDestinationInfo("Moon");
