// QR CODE
$("#qrcode").hide();
$("#qrcode1").hide();
$("#qrcode2").hide();
$("#qrcode5").hide();
$("#qrcode6").hide();
$("#qrcode4").hide();
var qrdata = document.getElementById('qr-data');
var qrcode = new QRCode(document.getElementById('qrcode'))
var qrcode1 = new QRCode(document.getElementById('qrcode1'))
var qrcode2 = new QRCode(document.getElementById('qrcode2'))
var qrcode5 = new QRCode(document.getElementById('qrcode5'))
var qrcode6 = new QRCode(document.getElementById('qrcode6'))
var qrcode4 = new QRCode(document.getElementById('qrcode4'))




$(".artist1").click(function() {
    $("#qrcode").hide();
    $("#qrcode2").hide();
    $("#qrcode6").hide();
    $("#qrcode5").hide();
    $("#qrcode4").hide();
    $("#qrcode1").show();
    $("#qr-data").change(function() {
        var data = qrdata.value;
        qrcode1.makeCode(data);
    });


})
$(".artist2").click(function() {
    $("#qrcode1").hide();
    $("#qrcode2").hide();
    $("#qrcode6").hide();
    $("#qrcode4").hide();
    $("#qrcode").show();
    $("#qrcode5").hide();

    $("#qr-data").change(function() {
        var data = qrdata.value;
        qrcode.makeCode(data);
    });

})
$(".artist3").click(function() {
    $("#qrcode1").hide();
    $("#qrcode").hide();
    $("#qrcode6").hide();
    $("#qrcode4").hide();
    $("#qrcode2").show();
    $("#qrcode5").hide();
    $("#qr-data").change(function() {
        var data = qrdata.value;
        qrcode2.makeCode(data);
    });


})
$(".artist4").click(function() {
    $("#qrcode1").hide();
    $("#qrcode").hide();
    $("#qrcode2").hide();
    $("#qrcode6").hide();
    $("#qrcode4").show();
    $("#qrcode5").hide();
    $("#qr-data").change(function() {
        var data = qrdata.value;
        qrcode4.makeCode(data);
    });

})

$(".artist5").click(function() {
    $("#qrcode1").hide();
    $("#qrcode").hide();
    $("#qrcode2").hide();
    $("#qrcode6").hide();
    $("#qrcode5").show();
    $("#qrcode4").hide();
    $("#qr-data").change(function() {
        var data = qrdata.value;
        qrcode5.makeCode(data);
    });

})
$(".artist6").click(function() {
    $("#qrcode1").hide();
    $("#qrcode").hide();
    $("#qrcode2").hide();
    $("#qrcode5").hide();
    $("#qrcode6").show();
    $("#qrcode4").hide();
    $("#qr-data").change(function() {
        var data = qrdata.value;
        qrcode6.makeCode(data);
    });

})