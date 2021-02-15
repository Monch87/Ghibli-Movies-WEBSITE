new autoComplete({
  data: {
    src: async () => {
      const query = document.querySelector("#autoComplete").value;
      try {
        const source = await fetch(`/api/search?title=${query}`);
        const data = await source.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    },
    key: ["title"],
    cache: false
  },
  resultsList: {
    container: (source) => {
      source.setAttribute("id", "title");
    },
    destination: "#autoComplete",
    position: "afterend",
    element: "ul"
  },
  resultItem: {
    content: (data, source) => {
      source.innerHTML = data.match;
    },
    element: "li"
  },
  threshold: 3,
  debounce: 300,
  searchEngine: "strict",
  onSelection: (feedback) => console.log(feedback)
});
