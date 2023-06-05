const search = document.getElementById("search");
const renderInput = function (value) {
  search.innerHTML = `<input class="search" type="text" value="${value}">`;
};

ReactDOM.render(
    // renderInput("foo"),
    // Change value to "bar"?
    renderInput("bar"),
    document.getElementById("root")
);