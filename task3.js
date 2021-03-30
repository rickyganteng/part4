const arkFood = (price, voucher, distance, tax) => {
  let diskon;
  let delivcost;
  const delivfirst = 5000


  if (voucher.toUpperCase() === "ARKAFOOD5") {
    diskon = diskon50(price)
  } else if (voucher.toUpperCase() === "DITRAKTIRDEMY") {
    diskon = diskon60(price)
  } else {
    diskon = 0

  }

  if (distance > 2) {
    delivcost = delivfirst + 3000 * (distance - 2)
  } else {
    delivcost = delivfirst
  }

  if (tax == true) {
    tax = price * 5 / 100
  } else {
    tax = 0
  }


  console.log("Harga        : Rp " + price)
  console.log("Potongan     : Rp " + diskon)
  console.log("Biaya Antar  : Rp " + delivcost)
  console.log("Pajak        : Rp " + tax)
  total = price - diskon + delivcost + tax
  console.log("Total        : Rp " + total)
}

function diskon50(price) {
  const maxdiskon = 50000

  if (price >= 50000) {
    diskon = (50 / 100) * price
    if (diskon >= maxdiskon) {
      diskon = maxdiskon
    }
  } else {
    diskon = 0
  }
  return diskon
}

function diskon60(price) {
  const maxdiskon = 30000;

  if (price >= 25000) {
    diskon = (60 / 100) * price
    if (diskon >= maxdiskon) {
      diskon = maxdiskon
    }
  } else {
    diskon = 0
  }
  return diskon
}

arkFood(75000, "DITRAKTIRDEMY", 5, true)