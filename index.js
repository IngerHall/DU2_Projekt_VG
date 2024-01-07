render_div_container(document.body);

render_header_structure();

const dropdown_filter = document.querySelector(".dropdown_filter");
render_type_filters(dropdown_filter);
render_country_filters(dropdown_filter);
render_price_filters(dropdown_filter);

render_bottom_container(filter_programmes());