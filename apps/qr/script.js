function generateLink(){

  $('#qr').empty();
  $('#link').empty();
  var longUrl = $('#longLink').val();
  if (!/^https?:\/\//i.test(longUrl)) {
    longUrl = 'http://' + longUrl;
}
  $.getJSON( "https://api.rebrandly.com/v1/links/new?apikey=853e4a9799574008910da117afbf8f0f&destination=" + longUrl + "&domain[fullName]=link.gatewayguards.com", function( data ) {
    $("#qr").qrcode(data.shortUrl);
    $("<p>", {text: "Right click to save QR"}).appendTo('#qr');
$('<a>',{
    text: "https://" + data.shortUrl,
    href: "https://" + data.shortUrl,
}).appendTo('#link');
});
  
}