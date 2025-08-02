console.log(localStorage);




const setArray = ( ) => {
  let itemsArray;
  if (localStorage.getItem("item") == null) {
    itemsArray = [];
  } else {
    itemsArray = JSON.parse(localStorage.getItem("item"));
  }
  console.log(localStorage.getItem("item"))
  return itemsArray;
}
const itemsArray = setArray();

(() => {
    console.log("GeeksforGeeks");
})();

console.log(itemsArray == true);
console.log(itemsArray)

function cleanStorage () {
  localStorage.clear()
  location.reload()
}

function ShopItems(items) {
  this.item = items;
}

class SuperShopItems {
  constructor(name, number) {
    this.name = name;
    this.num = number;
  }
  
  
}

const itemsArrayTest = ["apple","banaa","apple","apple","banaa"]

let space = document.querySelector('.adding-content');

let tempList = {}
let price_tempMap = new Map()




const tempMap = new Map();


itemsArray.forEach((item) => {
  if (tempMap.has(item)) {
    tempMap.set(item, tempMap.get(item)+1)
  }
  else {
    tempMap.set(item, 1)
  }
})

console.log(tempMap, "OVER HERE")

itemsArray.forEach((item) => {
  if (price_tempMap.has(item)) {
    price_tempMap.set(item, price_tempMap.get(item)+1)
  }
  else {
    price_tempMap.set(item, 1)
  }
})

console.log(tempMap)

const iterator1 = tempMap.keys();
const iterator2 = tempMap.values();

// Expected output: "bar"





const map2 = new Map();
map2.set('bar', 'foo');

console.log(map2.get('bar'));
// Expected output: "foo"

console.log(map2.get('baz'));

console.log(map2)

map2.set('bar', 23)

console.log(map2.get('bar'))
// Expected output: undefined




const holder = document.getElementById("holder")
const trashhh = document.querySelector(".trash-btn")
let x = iterator1.next().value
const trash = document.getElementById('trash')
const summaryText = document.querySelector('.summary-report-text')

  let totalPrice_holder_Div = document.createElement("div")
  totalPrice_holder_Div.className = "col-md-3 total-price-sum-manip"

function formatify(str) {
  return str.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
}


const priceVar2 = localStorage.getItem(x).replace(/$|,/g, "")
let priceVar;
const priceVar3 = localStorage.getItem(x).replace(/$|,/g, "")
const priceVar4 = localStorage.getItem(x).replace(/$|,/g, "")



let totalPrice = 0;
while (x!==undefined) {
  console.log(x)
  console.log(tempMap)
  let holderDiv = document.createElement("div"); 
  let text_holderDiv = document.createElement("div"); 
  let price_holderDiv = document.createElement("div")
  let num_holderDiv = document.createElement("div");
  let priceVar = localStorage.getItem(x).replace(/$|,/g, "")
  
  let num_holderGroup = document.createElement("div")
  
  let decrementValueSign = document.createElement("i")
  let incrementValueSign = document.createElement("i")

  decrementValueSign.className = ("fa-solid fa-minus")
  incrementValueSign.className = ("fa-solid fa-plus")
  
  decrementValueSign.style.color = "#ff8080"
  incrementValueSign.style.color = "#63E63B"

  console.log('hiiii')
  
  holderDiv.className = "container adding-content row";
  text_holderDiv.className = "col-md-6 text-sum-manip";
  price_holderDiv.className = "col-md-3 price-sum-manip";
  num_holderDiv.className = "num-sum-manip";
  num_holderGroup.className = "col-md-3 num-group-manip"
  text_holderDiv.textContent = x;
  // price_holderDiv.textContent = '$' + (tempMap.get(x) * Number(localStorage.getItem(x).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","))).toFixed(2)
  price_holderDiv.textContent = '$' + formatify(((tempMap.get(x) * Number(priceVar)).toFixed(2)).toString())

  totalPrice += tempMap.get(x)*Number(priceVar)
  num_holderDiv.textContent = tempMap.get(x)


  
  num_holderGroup.append(num_holderDiv)
  num_holderDiv.before(decrementValueSign)
  num_holderDiv.after(incrementValueSign)
  
  // Add the new element to the DOM (e.g., inside the <body>)
  holderDiv.append(text_holderDiv)
  holderDiv.append(price_holderDiv)
  holderDiv.append(num_holderGroup)
  console.log(trash)
  

  
  summaryText.before(holderDiv)
  console.log(x)
  x = iterator1.next().value
  
    
  // Optionally set attributes
  
  
  
}

function updateNumbers() {
  let containerOfItems = document.querySelectorAll(".adding-content")
  totalPrice = 0
  console.log(containerOfItems)

  for (var i=0; i < tempMap.size; i++) {
    let productHolder = containerOfItems[i]
    let productName = productHolder.querySelector(".text-sum-manip").innerHTML
    let priceVar = localStorage.getItem(productName).replace(/$|,/g, "")

    console.log(productName)
    productHolder.querySelector(".price-sum-manip").innerHTML = '$' + formatify(((tempMap.get(productName) * Number(priceVar)).toFixed(2)).toString())
    totalPrice += tempMap.get(productName)*Number(priceVar)
    console.log(productName)
  }
  document.querySelector(".subtotal").innerHTML = "$" + formatify(`${totalPrice.toFixed(2)}`)
  document.querySelector(".taxed-amount").innerHTML = "$" + formatify(`${(totalPrice*.06).toFixed(2)}`)
  document.querySelector(".total").innerHTML = "$" + formatify(`${(totalPrice + totalPrice*.06).toFixed(2)}`)
}

console.log(totalPrice)
totalPrice_holder_Div = '$' + totalPrice

const subtotal = Number(totalPrice)

const taxedAmount = Number((totalPrice * .06).toFixed(2))

const total = (taxedAmount + subtotal).toFixed(2)


const subtotalText = document.querySelector(".subtotal")
const taxedAmountText = document.querySelector(".taxed-amount")
const realTotalText = document.querySelector(".total")

subtotalText.innerHTML += formatify(`${subtotal.toFixed(2)}`)
taxedAmountText.innerHTML += formatify(`${taxedAmount.toFixed(2)}`)
realTotalText.innerHTML += formatify(`${total}`)


let signs = document.querySelectorAll('.fa-minus, .fa-plus')
console.log(signs)


signs.forEach((item) => {
  item.addEventListener("click", (event) => {
    let num = event.target.parentNode.querySelector(".num-sum-manip")
    let text = event.target.parentNode.parentNode.querySelector(".text-sum-manip").innerHTML
    
    let sign = event.target.className.replace(/fa-solid|\s/g, "")
    let minus = event.target.parentNode.children[0]
    if (sign === "fa-plus") {
      minus.className = minus.className.replace(/fa-trash/g, "fa-minus")
      num.innerHTML = String(Number(num.textContent) + 1)
      itemsArray.push(text)
      tempMap.set(text, tempMap.get(text)+1)

    } else if (sign === "fa-minus") {
      var a = itemsArray.indexOf(text)
      if (a >= 0) {
        num.innerHTML = String(Number(num.textContent) - 1)
        itemsArray.splice(a, 1)
        tempMap.set(text, tempMap.get(text)-1)

      }  
      
    } else {
      text.parentNode.remove()
      tempMap.delete(text)
    }
    if (itemsArray.indexOf(text)==-1) {
        event.target.classList.add("fa-trash")
        event.target.classList.remove("fa-minus")
      } else {
        if (sign=="fa-trash") {

          event.target.classList.remove("fa-trash")
          event.target.classList.add("fa-minus")
        }
      }
    localStorage.setItem("item", JSON.stringify(itemsArray));
    updateNumbers()
  })
})