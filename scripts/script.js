var totalPrices = 0
var removalExtra = false
prices = []

$(document).on("click", ".btn-prices", function () {
  if (removalExtra) {
    prices.push(parseInt($(this).attr("price")) + parseInt($(this).attr("removal-price")))
  } else {
    prices.push(parseInt($(this).attr("price")))
  }
  if ($(this).hasClass("removal-tinting")) {
    removalExtra = true
  }
  console.log(prices)
  if (prices.length == 2) {
    for (let i = 0; i < prices.length; i++) {

      totalPrices = totalPrices + prices[i]
    }
  }
  $(this).closest(".tinting-options").removeClass("active")
  $(".tinting-options").eq(prices.length).addClass("active")
  $(".total-price").each(function () {
    $(this).text("$" + (totalPrices + parseInt($(this).attr("price"))))
  });
})

$(document).on("click", ".removal", function () {
  $(".tinting-options").removeClass("active")
  $(".removal-options").addClass("active")
})



$(document).on("click", ".car-size-card", function () {
  $(".car-icons-film").attr("src", "icons/" + $(this).attr("size") + "-cars.svg")
});

$(document).on("click", ".restart", function () {
  console.log("ASd")
  $(".tinting-options.active").removeClass("active")
  $(".removal-options.active").removeClass("active")
  prices = []
  removalExtra = false
  totalPrices = 0
  $(document).find(".tinting-options").eq(0).addClass("active")
})