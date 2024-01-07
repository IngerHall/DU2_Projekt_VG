"use strict";

// Funktion som renderar headerns inre struktur
function render_header_structure() {
  const header_container = document.querySelector("header");
  header_container.innerHTML = `<h1>LOONEY LACES</h1>
                                
                                <div id="filter">
                                  <div>
                                    <div id="filter_title">FILTER</div>
                                  </div>
                                  <div class="dropdown_filter hide">
                                  </div>
                                </div>

                                <div id="sort">
                                  <div>
                                    <div id="sort_title">SORT</div>
                                  </div>
                                  <div class="dropdown_sort hide">
                                  </div>
                                </div>

                                <div id="about_us">
                                  <div>
                                    <div id="about_us_title">ABOUT US</div>
                                  </div>
                                  <div class="about_us_box hide">
                                  </div>
                                </div>
                                
                                <div id="cart">
                                  <div class="cart">
                                    <div id="cart_title">CART</div>
                                  </div>
                                </div>`;

  // Filter
  
  const filter_title = document.querySelector("#filter_title");
  const dropdown_filter = document.querySelector(".dropdown_filter");

  filter_title.addEventListener("click", function () {
    dropdown_filter.classList.toggle("hide");
  });

  // Sort

  const sort_title = document.querySelector("#sort_title");
  const dropdown_sort = document.querySelector(".dropdown_sort")
  
  sort_title.addEventListener("click", function () {
    dropdown_sort.classList.toggle("hide");
  })

  // About us

  const about_us_title = document.querySelector("#about_us_title");
  const about_us_box = document.querySelector(".about_us_box");

  about_us_title.addEventListener("click", function () {
    about_us_box.classList.toggle("hide");
  });
}

// FIXA: 
/*
  window.addEventListener("click", (e) => {
    if (e.target !== arrow_two) {
      popup_box.classList.add("hide");
    }
  });
  */

