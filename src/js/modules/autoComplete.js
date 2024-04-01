import autoComplete from "@tarekraafat/autocomplete.js";
import countries from "./../helpers/countryList.js";

function autoCompleteFunc() {
  const autoCompleteJS = new autoComplete({
    selector: "#autocompleteCountry",
    placeHolder: "e.g Bali, Indonesia",
    data: {
      src: countries,
      cache: true,
    },

    resultItem: {
      highlight: true,
    },

    events: {
      input: {
        selection: (event) => {
          const selection = event.detail.selection.value;
          autoCompleteJS.input.value = selection;
        },
      },
    },

    resultsList: {
      maxResults: 3,
    },

    searchEngine: "strict",
  });
}

export default autoCompleteFunc;
