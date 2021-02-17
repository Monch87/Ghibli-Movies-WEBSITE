$(function () {
  $("#saveRating").click(function () {
    const mysave = $("#rateYo").rateYo("rating");
    $("#rating").val(mysave);
  });
});

$("#rateYo").rateYo({
  rating: 0,
  halfStar: true
});

const allRates = document.querySelectorAll(".stars");
allRates.forEach((rateElement) => {
  const rate = rateElement.getAttribute("rate");
  rateElement.innerHTML = getStars(rate);
});

function getStars(rating) {
  // Round to nearest half
  rating = Math.round(rating * 2) / 2;
  let output = [];

  // Append all the filled whole stars
  for (var i = rating; i >= 1; i--)
    output.push(
      '<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;'
    );

  // If there is a half a star, append it
  if (i == 0.5)
    output.push(
      '<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;'
    );

  // Fill the empty stars
  for (let i = 5 - rating; i >= 1; i--)
    output.push(
      '<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;'
    );

  return output.join("");
}
