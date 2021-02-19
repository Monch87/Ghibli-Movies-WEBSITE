new autoComplete({
  data: {
    src: async () => {
      const query = document.querySelector("#autoComplete").value
      try {
        const source = await fetch(`/api/search?title=${query}`)
        const data = await source.json()
        return data
      } catch (err) {
        console.error(err)
      }
    },
    key: ["title"],
    cache: false,
  },
  resultsList: {
    container: source => {
      source.setAttribute("id", "movies-search-results")
    },
    destination: "#autoComplete",
    position: "afterend",
    className: "autocomplete-list",
    element: "ul",
  },
  resultItem: {
    content: (data, source) => {
      source.innerHTML = `<a href="/search/movie/${data.value.id}">${data.match}</a>`
    },
    element: "li",
  },
  sort: (a, b) => {
    if (a.match < b.match) return -1
    if (a.match > b.match) return 1
    return 0
  },
  threshold: 3,
  debounce: 300,
  searchEngine: "strict",
  onSelection: result => {
    console.log(result.selection.value.id)
  },
})
