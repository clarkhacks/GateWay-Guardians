

function getData(nco, oldCount){
  $.getJSON("https://www.instagram.com/" + nco + "/?__a=1", function(result){
	var user = result.graphql.user;
	$("#tf-" + nco).append(user.edge_followed_by.count);
	console.log(user.edge_follow_by.count);
	$("#f-" + nco).append(user.edge_followed_by.count - oldCount);
	$("#photo-" + nco).attr("src", user.profile_pic_url);
    	$("#name-" + nco).append(user.username);
  });

}

// Kumke
getData("sgt__kumke", 60);
// Corn
getData("ilng_joshc", 151)
//Davey
getData("sergeant_seth", 0)
//Hedger
getData("ssghedgehog", 0)
//Gentille
getData("sfc_hulk", 0);
//Schumacher
getData("sgt_schu", 70);
// Saenz
getData("sfc_super_mario", 0)
// Branz
getData("sgt_branz", 2235)
//womack
getData("goguardorgohome", 3253)
//weckmann
getData("spc_weckmann", 728)