//Код для модального окна cart-modal и интерактивности кнопки Купить в карточке товара

var buyButton = document.querySelectorAll(".figure-btn-buy");
var tabButton = document.querySelectorAll(".figure-btn-tab");
var cartModal = document.querySelector(".cart-modal");
var closeCartModalCross = cartModal.querySelector(".close-pop-up");
var closeCartModalButton = cartModal.querySelector(".btn-main-keepshop");
var tabCounter = document.querySelector(".tab-counter");
var tab = document.querySelector(".tab");
var basketCounter = document.querySelector(".basket-counter");
var basket = document.querySelector(".basket");

for (i = 0; i < buyButton.length; i++) {
  buyButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    cartModal.classList.add("cart-modal-show");
    var newBasket = parseInt(basketCounter.innerHTML);
    newBasket++;
    basketCounter.innerHTML = newBasket.toString();

    if (!basket.classList.contains("counter-active")) {
      basket.classList.add("counter-active");
    }
  });
}

for (var i = 0; i < tabButton.length; i++) {
  tabButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    var newTab = parseInt(tabCounter.innerHTML);
    newTab++;
    tabCounter.innerHTML = newTab.toString();

    if (!tab.classList.contains("counter-active")) {
      tab.classList.add("counter-active");
    }
  });
}

closeCartModalCross.addEventListener("click", function(event) {
  event.preventDefault();
  cartModal.classList.remove("cart-modal-show");
});

closeCartModalButton.addEventListener("click", function(event) {
  event.preventDefault();
  cartModal.classList.remove("cart-modal-show");
});

//Код для модального окна с картой
var markerCenter=new google.maps.LatLng(59.9386382,30.3230122);
var blockCenter=new google.maps.LatLng(59.940276,30.315562);

function initialize()
{
var mapProp = {
  center:blockCenter,
  zoom:16,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("map"),mapProp);

var marker=new google.maps.Marker({
  position:markerCenter,
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

//Код для модального окна write-us

var contanctsLink = document.querySelector(".contacts-btn-main");
var writeUsModal = document.querySelector(".write-us");
var closeWriteUs = writeUsModal.querySelector(".close-pop-up");
var nameField = writeUsModal.querySelector("[name=name]");
var eMail = writeUsModal.querySelector("[name=e-mail]");
var textArea = writeUsModal.querySelector("textarea");
var form = writeUsModal.querySelector("form");
var storageName = localStorage.getItem("name");
var storageMail = localStorage.getItem("email");

contanctsLink.addEventListener("click", function(event) {
  event.preventDefault();
  writeUsModal.classList.add("show-modal");
  nameField.focus();
  if (storageName) {
    name.value = storageName;
    eMail.focus();
  }

  if (storageMail) {
    eMail.value = storageMail;
    textArea.focus();
  }
});

closeWriteUs.addEventListener("click", function(event) {
  event.preventDefault();
  writeUsModal.classList.remove("show-modal");
  writeUsModal.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
  if (!name.value || !eMail.value || !textArea.value) {
    event.preventDefault();
    writeUsModal.classList.remove("modal-error");
    writeUsModal.offsetWidth = writeUsModal.offsetWidth;
    writeUsModal.classList.add("modal-error");
  } else {
    localStorage.setItem("name", name.value);
    localStorage.setItem("email", eMail.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (writeUsModal.classList.contains("show-modal")) {
      writeUsModal.classList.remove("show-modal");
      writeUsModal.classList.remove("modal-error");
    }

    if(map.classList.contains("show-map")) {
      map.classList.remove("show-map");
    }

    if(cartModal.classList.contains("cart-modal-show")) {
      cartModal.classList.remove("cart-modal-show");
    }
  }
});

//Код для модального окна map

var mapPic = document.querySelector(".map-picture");
var map = document.querySelector(".map-wrapper");
var closeMap = map.querySelector(".close-pop-up");

mapPic.addEventListener("click", function(event) {
  event.preventDefault();
  map.classList.add("show-map");
});

closeMap.addEventListener("click", function(event) {
  event.preventDefault();
  map.classList.remove("show-map");
});
