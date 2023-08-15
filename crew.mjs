import { json_data } from "./data.mjs";

const { crew: crew_data } = json_data;

const crew_switcher_buttons_div = document.querySelector(
  ".crew_switcher_buttons"
);
const crew_info_div = document.querySelector(".crew_info");
const crew_image_div = document.querySelector(".crew_image");

const crew_data_html = crew_data.map((crew_data) => {
  const { name, role: cred, bio: description, images: images_src } = crew_data;
  const { png: png_image_src, webp: wepb_image_src } = images_src;

  const crew_data_info_html = `
              <div class="text_5 uppercase grey_text text_align_center">${cred}</div>
              <div class="text_7 uppercase text_align_center">${name}</div>
              <div class="text_2 mb_2 text_align_center">${description}</div>
  `;

  const crew_data_image_html = `
        <img src=${wepb_image_src} alt="${name} image" class="add_animation_from_y "/>      
  `;

  return {
    crew_info_html: crew_data_info_html,
    crew_image_html: crew_data_image_html,
  };
});

// add buttons
function addCrewButtons() {
  crew_data.map((crew_data, index) => {
    const new_button = document.createElement("button");
    new_button.id = `btn_${index}`;
    new_button.className = "crew_switcher_button";
    // new_button.innerText = `${index}`;

    new_button.addEventListener("click", () => {
      showCrewInfo(index);
      new_button.classList.toggle("active_crew_switcher_button");
    });

    crew_switcher_buttons_div.appendChild(new_button);
  });
}
addCrewButtons();

let active_button_state = 0;

function showCrewInfo(id) {
  const crew_info_index = Number(id);
  const selected_crew_html_obj = crew_data_html[crew_info_index];
  const { crew_image_html, crew_info_html } = selected_crew_html_obj;

  crew_info_div.innerHTML = crew_info_html;
  crew_image_div.innerHTML = crew_image_html;

  const curr_btn = document.querySelector(`#btn_${crew_info_index}`);
  const prev_btn = document.querySelector(`#btn_${active_button_state}`);
  active_button_state = crew_info_index;

  prev_btn.classList.toggle("active_crew_switcher_button");
}
showCrewInfo(0);
