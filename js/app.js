//  Data de restaurantes
var restaurants = [
    {
		"name": "Goethe-Institut Mexiko",
		"img": "assets/img/GIMexiko.jpg",
        "address": "Tonalá 43, Roma Nte., 06700 Ciudad de México, CDMX",
        "category": "Mexicana",
		"price": "$",
        "coordinates": {
            lng: -99.1637556,
		    lat: 19.4201687
        }
    },
    {
		"name": "Huset",
		"img": "assets/img/huset_roma.jpg",
        "address": "Colima 256, Roma Nte., 06700 Ciudad de México, CDMX",
        "category": "Gourmet",
		"price": "$$",
        "coordinates": {
            lng: -99.1640023,
		    lat: 19.4192023
        }
    },
    {
		"name": "Yuban",
		"img": "assets/img/yuban-m.jpg",
        "address": "Colima 268, Roma Nte., 06700 Ciudad de México, CDMX",
        "category": "Mexicana",
		"price": "$$$",
        "coordinates": {
            lng: -99.1640023,
			lat: 19.4192023
        }
    },
    {
		"name": "Butcher & Sons Roma",
		"img": "assets/img/butcher1.jpg",
        "address": "Orizaba 87, Roma Nte., 06700 Ciudad de México, CDMX",
        "category": "Hamburguesería",
		"price": "$$$",
        "coordinates": {
            lng: -99.1611437,
		    lat: 19.4193863
        }
    },
    {
		"name": "Pan D'Monium Antojeria Vegana",
		"img": "assets/img/pan.jpeg",
        "address": "Orizaba s/n, Roma Norte, Roma Nte., 06700 Cuauhtémoc, CDMX",
        "category": "Vegana",
		"price": "$$",
        "coordinates": {
            lng: -99.1610123,
		    lat: 19.4197784
        }
    },
    {
		"name": "Burro De Oro",
		"img": "assets/img/burrooro.jpg",
        "address": "Orizaba y Colima, Roma Norte, Cuauhtémoc, 06700 Ciudad de México, D.F., Roma Nte., 06700 Ciudad de México, CDMX",
        "category": "Burritos",
		"price": "$",
        "coordinates": {
            lng: -99.1606958,
		    lat: 19.41986
		}
	}
]

function loadPage() {
    setInterval(function(){
        //location.replace("views/view-2.html");
        $('#splash').hide();
        $('#principal').removeAttr('class');
      }, 500);
    showRestaurants(restaurants);
    $("#search").keyup(filterRestaurants);
}

// Pinta en el HTML la plantilla con la info de los restaurantes
function showRestaurants (array) {
	// Plantilla para hacer la tarjeta de restaurantes en el html
	array.forEach(function(restaurant) {
		var $container = $(".item-restaurante");
		var $divCol =  $("<div />", {'class': "col s12 m12"});
		var $divCard = $("<div />", {'class': "card horizontal"});
		var $divCardImg = $("<div />", {'class': "card-image"});
		var $img = $("<img>", {'class': "responsive-image"});
		$img.attr("src", restaurant.img);
		var $divCardStacked = $("<div />", {'class': "card-stacked"});
		var $divCardContent = $("<div />", {'class': "card-content"});
		var $name =  $("<h5 />");
		var $p =  $("<p />");
		var $divCardAction = $("<div />", {'class': "card-action"});
		var $link = $("<a />", {'class': "modales"});
		$link.attr("href", "#modal1");
		$link.attr("data-lat", restaurant['coordinates']['lat']);
		$link.attr("data-lng", restaurant['coordinates']['lng']);
		$link.attr("data-name", restaurant.name);
		// $link.attr("data-src", restaurant.img);
		$link.attr("data-price", restaurant.price);
		$link.attr("data-category", restaurant.category);
		$link.attr("data-address", restaurant.address);
		$link.addClass("cambiarMapa");
		$link.addClass("modal-trigger");

		$divCardAction.append($link);
		$divCardStacked.append($divCardAction);
		$divCardStacked.append($divCardContent);
		$divCardContent.append($name.text(restaurant.name));
		$divCardImg.append($img);
		$divCard.append($divCardImg);
		$divCard.append($divCardStacked);
		$divCol.append($divCard);
		$container.append($divCol);
	})
	

		// var template = '<article class="item-restaurante">' +
		//       '<div class="col s12 m12">' +
		//           '<div class="card horizontal">' +
		//               '<div class="card-image">' +
		//                   '<img class="responsive-img" src="__src__">' +
		//               '</div>' +
		//               '<div class="card-stacked">' +
		//                   '<div class="card-content">' +
		//                       '<h5>__name__</h5>' +
		//                     '<p>Comida __category__</p>' +
		//                   '</div>' +
  //                     '<div class="card-action">' +
  //                     //en los atributos data guardamos toda la información que más adelante queremos ocupar para nuestros  modales o para la API de Google Maps
		//                 '<a href="#modal1" class="modales" data-lat="__lat__" data-lng="__lng__" data-name="__name__" data-src="__src__" data-price="__price__" data-category="__category__" data-address="__address__" class="cambiarMapa modal-trigger">Ver detalles</a>' +
		//              '</div>' +
		//               '</div>' +
		//           '</div>' +
		//       '</div>' +
		//    '</article>';

		// var finalTemplate = "";
		// array.forEach(function (restaurant) {
		// 	finalTemplate += template.replace("__src__", restaurant.img)
		// 						  .replace("__name__", restaurant.name)
		//                           .replace("__category__", restaurant.category)
		//                           .replace("__lat__", restaurant.coordinates.lat)
		// 						  .replace("__lng__", restaurant.coordinates.lng)
		// 						  .replace("__name__", restaurant.name)
		// 						  .replace("__src__", restaurant.img)
		// 						  .replace("__price__", restaurant.price)
		// 						  .replace("__category__", restaurant.category)
		// 						  .replace("__address__", restaurant.address);

		// });

		// $("#restaurants-list").html(finalTemplate);
}

// Hace el filtro por restaurantes (lo devuleve en arreglo)
function filterRestaurants () {
	if ($("#search").val().trim().length > 0) {
		var searchedRestaurants = $("#search").val().toLowerCase();
		var filteredRestaurant = restaurants.filter(function(item) { /* filter devuelve un arreglo*/
		return item.name.toLowerCase().indexOf(searchedRestaurants) >= 0;
	})
	showRestaurants (item);
}
};
// Pintar modal con detalles de cada restaurant
var paintModal = function() {

}


$(document).ready(loadPage);