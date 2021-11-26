//Hide Show Menu
let navLinks = document.getElementById("navLinks");
$("#showMenu").click(function() {
    navLinks.style.right = "0";
})
$("#hideMenu").click(function() {
    navLinks.style.right = "-200px";
})

var lastClicked;
$(".qr-code-options").hide();


$("#templates").click(function() {
    $(".templates-options").fadeIn(700);
    $(".qr-code-options").hide();

});

$("#code-qr").click(function() {
    $(".templates-options").hide();
    $(".qr-code-options").fadeIn(700);


});
$(".menu").click(function() {
    $(".text-Options").hide();
});

$(".text-Options").hide();


$("#inputAndLogo").click(function() {
    $(".text-Options").fadeIn(700);
    lastClicked = event.target;
});

$("#textarea-div").click(function() {
    $(".text-Options").fadeIn(700);
    lastClicked = event.target;
});
$("#textarea-div3").click(function() {
    $(".text-Options").fadeIn(700);
    lastClicked = event.target;
});
$("#textarea-div4").click(function() {
    $(".text-Options").fadeIn(700);
    lastClicked = event.target;
});
$("#textarea-div5").click(function() {
    $(".text-Options").fadeIn(700);
    lastClicked = event.target;
});
$("#textarea-div6").click(function() {
    $(".text-Options").fadeIn(700);
    lastClicked = event.target;
});

// Аn empty function, previously added if I remove it, spoils the design of the card
$(document).ready(function() {
    $("#changeTemplates").on('change', function() {
        console.log("changed");
    }).change();

});

//    ===============================  font style  ============================
$(".italic1").click(function() {
    if (lastClicked.id == 'nameInput') {
        if ($('#nameInput').css('fontStyle') == 'italic') {
            $('#nameInput').css('fontStyle', 'normal');
        } else {
            $('#nameInput').css('fontStyle', 'italic');
        }
    }
    if (lastClicked.id == 'website') {
        if ($('#website').css('fontStyle') == 'italic') {
            $('#website').css('fontStyle', 'normal');
        } else {
            $('#website').css('fontStyle', 'italic');
        }
    }
    if (lastClicked.id == 'phoneNumber') {
        if ($('#phoneNumber').css('fontStyle') == 'italic') {
            $('#phoneNumber').css('fontStyle', 'normal');
        } else {
            $('#phoneNumber').css('fontStyle', 'italic');
        }
    }
    if (lastClicked.id == 'emailAdress') {
        if ($('#emailAdress').css('fontStyle') == 'italic') {
            $('#emailAdress').css('fontStyle', 'normal');
        } else {
            $('#emailAdress').css('fontStyle', 'italic');
        }
    }
    if (lastClicked.id == 'professionInput') {
        if ($('#professionInput').css('fontStyle') == 'italic') {
            $('#professionInput').css('fontStyle', 'normal');
        } else {
            $('#professionInput').css('fontStyle', 'italic');
        }
    }
    if (lastClicked.id == 'galleryCode') {
        if ($('#galleryCode').css('fontStyle') == 'italic') {
            $('#galleryCode').css('fontStyle', 'normal');
        } else {
            $('#galleryCode').css('fontStyle', 'italic');
        }
    }

    // Template 1
    if (lastClicked.id == 'art1') {
        if ($('#art1').css('fontStyle') == 'italic') {
            $('#art1').css('fontStyle', 'normal');
        } else {
            $('#art1').css('fontStyle', 'italic');
        }
    }
    if (lastClicked.id == 'streetNum1') {
        if ($('#streetNum1').css('fontStyle') == 'italic') {
            $('#streetNum1').css('fontStyle', 'normal');
        } else {
            $('#streetNum1').css('fontStyle', 'italic');
        }
    }
    if (lastClicked.id == 'postcode1') {
        if ($('#postcode1').css('fontStyle') == 'italic') {
            $('#postcode1').css('fontStyle', 'normal');
        } else {
            $('#postcode1').css('fontStyle', 'italic');
        }
    }
    if (lastClicked.id == 'phoneNumber1') {
        if ($('#phoneNumber1').css('fontStyle') == 'italic') {
            $('#phoneNumber1').css('fontStyle', 'normal');
        } else {
            $('#phoneNumber1').css('fontStyle', 'italic');
        }
    }
    if (lastClicked.id == 'emailAdress1') {
        if ($('#emailAdress1').css('fontStyle') == 'italic') {
            $('#emailAdress1').css('fontStyle', 'normal');
        } else {
            $('#emailAdress1').css('fontStyle', 'italic');
        }
    }
    if (lastClicked.id == 'galleryCode1') {
        if ($('#galleryCode1').css('fontStyle') == 'italic') {
            $('#galleryCode1').css('fontStyle', 'normal');
        } else {
            $('#galleryCode1').css('fontStyle', 'italic');
        }
    }

    // Template 3
    if (lastClicked.id == 'nameInput3') {
        if ($('#nameInput3').css('fontStyle') == 'italic') {
            $('#nameInput3').css('fontStyle', 'normal');
        } else {
            $('#nameInput3').css('fontStyle', 'italic');
        }
    }
    if (lastClicked.id == 'postcode3') {
        if ($('#postcode3').css('fontStyle') == 'italic') {
            $('#postcode3').css('fontStyle', 'normal');
        } else {
            $('#postcode3').css('fontStyle', 'italic');
        }
    }
    if (lastClicked.id == 'address3') {
        if ($('#address3').css('fontStyle') == 'italic') {
            $('#address3').css('fontStyle', 'normal');
        } else {
            $('#address3').css('fontStyle', 'italic');
        }
    }
    if (lastClicked.id == 'phoneNumber3') {
        if ($('#phoneNumber3').css('fontStyle') == 'italic') {
            $('#phoneNumber3').css('fontStyle', 'normal');
        } else {
            $('#phoneNumber3').css('fontStyle', 'italic');
        }
    }
    if (lastClicked.id == 'website3') {
        if ($('#website3').css('fontStyle') == 'italic') {
            $('#website3').css('fontStyle', 'normal');
        } else {
            $('#website3').css('fontStyle', 'italic');
        }
    }
    if (lastClicked.id == 'galleryCode3') {
        if ($('#galleryCode3').css('fontStyle') == 'italic') {
            $('#galleryCode3').css('fontStyle', 'normal');
        } else {
            $('#galleryCode3').css('fontStyle', 'italic');
        }
    }
    // Template 4
    if (lastClicked.id == 'name4') {
        if ($('#name4').css('fontStyle') == 'italic') {
            $('#name4').css('fontStyle', 'normal');
        } else {
            $('#name4').css('fontStyle', 'italic');
        }
    }
    if (lastClicked.id == 'insta4') {
        if ($('#insta4').css('fontStyle') == 'italic') {
            $('#insta4').css('fontStyle', 'normal');
        } else {
            $('#insta4').css('fontStyle', 'italic');
        }
    }
    if (lastClicked.id == 'tittle4') {
        if ($('#tittle4').css('fontStyle') == 'italic') {
            $('#tittle4').css('fontStyle', 'normal');
        } else {
            $('#tittle4').css('fontStyle', 'italic');
        }
    }
    if (lastClicked.id == 'galleryCode4') {
        if ($('#galleryCode4').css('fontStyle') == 'italic') {
            $('#galleryCode4').css('fontStyle', 'normal');
        } else {
            $('#galleryCode4').css('fontStyle', 'italic');
        }
    }
    // Template 5
    if (lastClicked.id == 'name5') {
        if ($('#name5').css('fontStyle') == 'italic') {
            $('#name5').css('fontStyle', 'normal');
        } else {
            $('#name5').css('fontStyle', 'italic');
        }
    }
    if (lastClicked.id == 'insta5') {
        if ($('#insta5').css('fontStyle') == 'italic') {
            $('#insta5').css('fontStyle', 'normal');
        } else {
            $('#insta5').css('fontStyle', 'italic');
        }
    }
    if (lastClicked.id == 'tittle5') {
        if ($('#tittle5').css('fontStyle') == 'italic') {
            $('#tittle5').css('fontStyle', 'normal');
        } else {
            $('#tittle5').css('fontStyle', 'italic');
        }
    }
    if (lastClicked.id == 'galleryCode5') {
        if ($('#galleryCode5').css('fontStyle') == 'italic') {
            $('#galleryCode5').css('fontStyle', 'normal');
        } else {
            $('#galleryCode5').css('fontStyle', 'italic');
        }
    }
    // Template 6
    if (lastClicked.id == 'name6') {
        if ($('#name6').css('fontStyle') == 'italic') {
            $('#name6').css('fontStyle', 'normal');
        } else {
            $('#name6').css('fontStyle', 'italic');
        }
    }
    if (lastClicked.id == 'insta6') {
        if ($('#insta6').css('fontStyle') == 'italic') {
            $('#insta6').css('fontStyle', 'normal');
        } else {
            $('#insta6').css('fontStyle', 'italic');
        }
    }
    if (lastClicked.id == 'tittle6') {
        if ($('#tittle6').css('fontStyle') == 'italic') {
            $('#tittle6').css('fontStyle', 'normal');
        } else {
            $('#tittle6').css('fontStyle', 'italic');
        }
    }
    if (lastClicked.id == 'galleryCode6') {
        if ($('#galleryCode6').css('fontStyle') == 'italic') {
            $('#galleryCode6').css('fontStyle', 'normal');
        } else {
            $('#galleryCode6').css('fontStyle', 'italic');
        }
    }

});

$(".bold1").click(function() {
    if (lastClicked.id == 'nameInput') {
        if ($('#nameInput').css('font-weight') == '600') {
            $('#nameInput').css('font-weight', '100');
        } else {
            $('#nameInput').css('font-weight', '600');
        }
    }
    if (lastClicked.id == 'website') {
        if ($('#website').css('font-weight') == '600') {
            $('#website').css('font-weight', '100');
        } else {
            $('#website').css('font-weight', '600');
        }
    }
    if (lastClicked.id == 'phoneNumber') {
        if ($('#phoneNumber').css('font-weight') == '600') {
            $('#phoneNumber').css('font-weight', '100');
        } else {
            $('#phoneNumber').css('font-weight', '600');
        }
    }
    if (lastClicked.id == 'emailAdress') {
        if ($('#emailAdress').css('font-weight') == '600') {
            $('#emailAdress').css('font-weight', '100');
        } else {
            $('#emailAdress').css('font-weight', '600');
        }
    }
    if (lastClicked.id == 'professionInput') {
        if ($('#professionInput').css('font-weight') == '600') {
            $('#professionInput').css('font-weight', '100');
        } else {
            $('#professionInput').css('font-weight', '600');
        }
    }
    if (lastClicked.id == 'galleryCode') {
        if ($('#galleryCode').css('font-weight') == '600') {
            $('#galleryCode').css('font-weight', '100');
        } else {
            $('#galleryCode').css('font-weight', '600');
        }
    }

    // Template 1
    if (lastClicked.id == 'art1') {
        if ($('#art1').css('font-weight') == '600') {
            $('#art1').css('font-weight', '100');
        } else {
            $('#art1').css('font-weight', '600');
        }
    }
    if (lastClicked.id == 'streetNum1') {
        if ($('#streetNum1').css('font-weight') == '600') {
            $('#streetNum1').css('font-weight', '100');
        } else {
            $('#streetNum1').css('font-weight', '600');
        }
    }
    if (lastClicked.id == 'postcode1') {
        if ($('#postcode1').css('font-weight') == '600') {
            $('#postcode1').css('font-weight', '100');
        } else {
            $('#postcode1').css('font-weight', '600');
        }
    }
    if (lastClicked.id == 'phoneNumber1') {
        if ($('#phoneNumber1').css('font-weight') == '600') {
            $('#phoneNumber1').css('font-weight', '100');
        } else {
            $('#phoneNumber1').css('font-weight', '600');
        }
    }
    if (lastClicked.id == 'emailAdress1') {
        if ($('#emailAdress1').css('font-weight') == '600') {
            $('#emailAdress1').css('font-weight', '100');
        } else {
            $('#emailAdress1').css('font-weight', '600');
        }
    }
    if (lastClicked.id == 'galleryCode1') {
        if ($('#galleryCode1').css('font-weight') == '600') {
            $('#galleryCode1').css('font-weight', '100');
        } else {
            $('#galleryCode1').css('font-weight', '600');
        }
    }

    // Template 3
    if (lastClicked.id == 'nameInput3') {
        if ($('#nameInput3').css('font-weight') == '600') {
            $('#nameInput3').css('font-weight', '100');
        } else {
            $('#nameInput3').css('font-weight', '600');
        }
    }
    if (lastClicked.id == 'postcode3') {
        if ($('#postcode3').css('font-weight') == '600') {
            $('#postcode3').css('font-weight', '100');
        } else {
            $('#postcode3').css('font-weight', '600');
        }
    }
    if (lastClicked.id == 'address3') {
        if ($('#address3').css('font-weight') == '600') {
            $('#address3').css('font-weight', '100');
        } else {
            $('#address3').css('font-weight', '600');
        }
    }
    if (lastClicked.id == 'phoneNumber3') {
        if ($('#phoneNumber3').css('font-weight') == '600') {
            $('#phoneNumber3').css('font-weight', '100');
        } else {
            $('#phoneNumber3').css('font-weight', '600');
        }
    }
    if (lastClicked.id == 'website3') {
        if ($('#website3').css('font-weight') == '600') {
            $('#website3').css('font-weight', '100');
        } else {
            $('#website3').css('font-weight', '600');
        }
    }
    if (lastClicked.id == 'galleryCode3') {
        if ($('#galleryCode3').css('font-weight') == '600') {
            $('#galleryCode3').css('font-weight', '100');
        } else {
            $('#galleryCode3').css('font-weight', '600');
        }
    }
    // Template 4
    if (lastClicked.id == 'name4') {
        if ($('#name4').css('font-weight') == '600') {
            $('#name4').css('font-weight', '100');
        } else {
            $('#name4').css('font-weight', '600');
        }
    }
    if (lastClicked.id == 'insta4') {
        if ($('#insta4').css('font-weight') == '600') {
            $('#insta4').css('font-weight', '100');
        } else {
            $('#insta4').css('font-weight', '600');
        }
    }
    if (lastClicked.id == 'tittle4') {
        if ($('#tittle4').css('font-weight') == '600') {
            $('#tittle4').css('font-weight', '100');
        } else {
            $('#tittle4').css('font-weight', '600');
        }
    }
    if (lastClicked.id == 'galleryCode4') {
        if ($('#galleryCode4').css('font-weight') == '600') {
            $('#galleryCode4').css('font-weight', '100');
        } else {
            $('#galleryCode4').css('font-weight', '600');
        }
    }
    // Template 5
    if (lastClicked.id == 'name5') {
        if ($('#name5').css('font-weight') == '600') {
            $('#name5').css('font-weight', '100');
        } else {
            $('#name5').css('font-weight', '600');
        }
    }
    if (lastClicked.id == 'insta5') {
        if ($('#insta5').css('font-weight') == '600') {
            $('#insta5').css('font-weight', '100');
        } else {
            $('#insta5').css('font-weight', '600');
        }
    }
    if (lastClicked.id == 'tittle5') {
        if ($('#tittle5').css('font-weight') == '600') {
            $('#tittle5').css('font-weight', '100');
        } else {
            $('#tittle5').css('font-weight', '600');
        }
    }
    if (lastClicked.id == 'galleryCode5') {
        if ($('#galleryCode5').css('font-weight') == '600') {
            $('#galleryCode5').css('font-weight', '100');
        } else {
            $('#galleryCode5').css('font-weight', '600');
        }
    }
    // Template 6
    if (lastClicked.id == 'name6') {
        if ($('#name6').css('font-weight') == '600') {
            $('#name6').css('font-weight', '100');
        } else {
            $('#name6').css('font-weight', '600');
        }
    }
    if (lastClicked.id == 'insta6') {
        if ($('#insta6').css('font-weight') == '600') {
            $('#insta6').css('font-weight', '100');
        } else {
            $('#insta6').css('font-weight', '600');
        }
    }
    if (lastClicked.id == 'tittle6') {
        if ($('#tittle6').css('font-weight') == '600') {
            $('#tittle6').css('font-weight', '100');
        } else {
            $('#tittle6').css('font-weight', '600');
        }
    }
    if (lastClicked.id == 'galleryCode6') {
        if ($('#galleryCode6').css('font-weight') == '600') {
            $('#galleryCode6').css('font-weight', '100');
        } else {
            $('#galleryCode6').css('font-weight', '600');
        }
    }
});
$(".underline1").click(function() {
    if (lastClicked.id == 'nameInput') {
        if ($('#nameInput').css('text-decoration').indexOf("underline") != -1) {
            $('#nameInput').css('text-decoration', 'none');
        } else {
            $('#nameInput').css('text-decoration', 'underline');
        }
    }
    if (lastClicked.id == 'website') {
        if ($('#website').css('text-decoration').indexOf("underline") != -1) {
            $('#website').css('text-decoration', 'none');
        } else {
            $('#website').css('text-decoration', 'underline');
        }
    }
    if (lastClicked.id == 'phoneNumber') {
        if ($('#phoneNumber').css('text-decoration').indexOf("underline") != -1) {
            $('#phoneNumber').css('text-decoration', 'none');
        } else {
            $('#phoneNumber').css('text-decoration', 'underline');
        }
    }
    if (lastClicked.id == 'emailAdress') {
        if ($('#emailAdress').css('text-decoration').indexOf("underline") != -1) {
            $('#emailAdress').css('text-decoration', 'none');
        } else {
            $('#emailAdress').css('text-decoration', 'underline');
        }
    }
    if (lastClicked.id == 'professionInput') {
        if ($('#professionInput').css('text-decoration').indexOf("underline") != -1) {
            $('#professionInput').css('text-decoration', 'none');
        } else {
            $('#professionInput').css('text-decoration', 'underline');
        }
    }
    if (lastClicked.id == 'galleryCode') {
        if ($('#galleryCode').css('text-decoration').indexOf("underline") != -1) {
            $('#galleryCode').css('text-decoration', 'none');
        } else {
            $('#galleryCode').css('text-decoration', 'underline');
        }
    }
    // Template 1
    if (lastClicked.id == 'art1') {
        if ($('#art1').css('text-decoration').indexOf("underline") != -1) {
            $('#art1').css('text-decoration', 'none');
        } else {
            $('#art1').css('text-decoration', 'underline');
        }
    }
    if (lastClicked.id == 'streetNum1') {
        if ($('#streetNum1').css('text-decoration').indexOf("underline") != -1) {
            $('#streetNum1').css('text-decoration', 'none');
        } else {
            $('#streetNum1').css('text-decoration', 'underline');
        }
    }
    if (lastClicked.id == 'postcode1') {
        if ($('#postcode1').css('text-decoration').indexOf("underline") != -1) {
            $('#postcode1').css('text-decoration', 'none');
        } else {
            $('#postcode1').css('text-decoration', 'underline');
        }
    }
    if (lastClicked.id == 'phoneNumber1') {
        if ($('#phoneNumber1').css('text-decoration').indexOf("underline") != -1) {
            $('#phoneNumber1').css('text-decoration', 'none');
        } else {
            $('#phoneNumber1').css('text-decoration', 'underline');
        }
    }
    if (lastClicked.id == 'emailAdress1') {
        if ($('#emailAdress1').css('text-decoration').indexOf("underline") != -1) {
            $('#emailAdress1').css('text-decoration', 'none');
        } else {
            $('#emailAdress1').css('text-decoration', 'underline');
        }
    }
    if (lastClicked.id == 'galleryCode1') {
        if ($('#galleryCode1').css('text-decoration').indexOf("underline") != -1) {
            $('#galleryCode1').css('text-decoration', 'none');
        } else {
            $('#galleryCode1').css('text-decoration', 'underline');
        }
    }
    // Template 3
    if (lastClicked.id == 'nameInput3') {
        if ($('#nameInput3').css('text-decoration').indexOf("underline") != -1) {
            $('#nameInput3').css('text-decoration', 'none');
        } else {
            $('#nameInput3').css('text-decoration', 'underline');
        }
    }
    if (lastClicked.id == 'postcode3') {
        if ($('#postcode3').css('text-decoration').indexOf("underline") != -1) {
            $('#postcode3').css('text-decoration', 'none');
        } else {
            $('#postcode3').css('text-decoration', 'underline');
        }
    }
    if (lastClicked.id == 'address3') {
        if ($('#address3').css('text-decoration').indexOf("underline") != -1) {
            $('#address3').css('text-decoration', 'none');
        } else {
            $('#address3').css('text-decoration', 'underline');
        }
    }
    if (lastClicked.id == 'phoneNumber3') {
        if ($('#phoneNumber3').css('text-decoration').indexOf("underline") != -1) {
            $('#phoneNumber3').css('text-decoration', 'none');
        } else {
            $('#phoneNumber3').css('text-decoration', 'underline');
        }
    }
    if (lastClicked.id == 'website3') {
        if ($('#website3').css('text-decoration').indexOf("underline") != -1) {
            $('#website3').css('text-decoration', 'none');
        } else {
            $('#website3').css('text-decoration', 'underline');
        }
    }
    if (lastClicked.id == 'galleryCode3') {
        if ($('#galleryCode3').css('text-decoration').indexOf("underline") != -1) {
            $('#galleryCode3').css('text-decoration', 'none');
        } else {
            $('#galleryCode3').css('text-decoration', 'underline');
        }
    }
    // Template 4
    if (lastClicked.id == 'name4') {
        if ($('#name4').css('text-decoration').indexOf("underline") != -1) {
            $('#name4').css('text-decoration', 'none');
        } else {
            $('#name4').css('text-decoration', 'underline');
        }
    }
    if (lastClicked.id == 'insta4') {
        if ($('#insta4').css('text-decoration').indexOf("underline") != -1) {
            $('#insta4').css('text-decoration', 'none');
        } else {
            $('#insta4').css('text-decoration', 'underline');
        }
    }
    if (lastClicked.id == 'tittle4') {
        if ($('#tittle4').css('text-decoration').indexOf("underline") != -1) {
            $('#tittle4').css('text-decoration', 'none');
        } else {
            $('#tittle4').css('text-decoration', 'underline');
        }
    }
    if (lastClicked.id == 'galleryCode4') {
        if ($('#galleryCode4').css('text-decoration').indexOf("underline") != -1) {
            $('#galleryCode4').css('text-decoration', 'none');
        } else {
            $('#galleryCode4').css('text-decoration', 'underline');
        }
    }
    // Template 5
    if (lastClicked.id == 'name5') {
        if ($('#name5').css('text-decoration').indexOf("underline") != -1) {
            $('#name5').css('text-decoration', 'none');
        } else {
            $('#name5').css('text-decoration', 'underline');
        }
    }
    if (lastClicked.id == 'insta5') {
        if ($('#insta5').css('text-decoration').indexOf("underline") != -1) {
            $('#insta5').css('text-decoration', 'none');
        } else {
            $('#insta5').css('text-decoration', 'underline');
        }
    }
    if (lastClicked.id == 'tittle5') {
        if ($('#tittle5').css('text-decoration').indexOf("underline") != -1) {
            $('#tittle5').css('text-decoration', 'none');
        } else {
            $('#tittle5').css('text-decoration', 'underline');
        }
    }
    if (lastClicked.id == 'galleryCode5') {
        if ($('#galleryCode5').css('text-decoration').indexOf("underline") != -1) {
            $('#galleryCode5').css('text-decoration', 'none');
        } else {
            $('#galleryCode5').css('text-decoration', 'underline');
        }
    }
    // Template 6
    if (lastClicked.id == 'name6') {
        if ($('#name6').css('text-decoration').indexOf("underline") != -1) {
            $('#name6').css('text-decoration', 'none');
        } else {
            $('#name6').css('text-decoration', 'underline');
        }
    }
    if (lastClicked.id == 'insta6') {
        if ($('#insta6').css('text-decoration').indexOf("underline") != -1) {
            $('#insta6').css('text-decoration', 'none');
        } else {
            $('#insta6').css('text-decoration', 'underline');
        }
    }
    if (lastClicked.id == 'tittle6') {
        if ($('#tittle6').css('text-decoration').indexOf("underline") != -1) {
            $('#tittle6').css('text-decoration', 'none');
        } else {
            $('#tittle6').css('text-decoration', 'underline');
        }
    }
    if (lastClicked.id == 'galleryCode6') {
        if ($('#galleryCode6').css('text-decoration').indexOf("underline") != -1) {
            $('#galleryCode6').css('text-decoration', 'none');
        } else {
            $('#galleryCode6').css('text-decoration', 'underline');
        }
    }
});

$(".fontCase1").click(function() {
    if (lastClicked.id == 'nameInput') {
        if ($('#nameInput').css('text-transform') == 'uppercase') {
            $('#nameInput').css('text-transform', 'none');
        } else {
            $('#nameInput').css('text-transform', 'uppercase');
        }
    }
    if (lastClicked.id == 'website') {
        if ($('#website').css('text-transform') == 'uppercase') {
            $('#website').css('text-transform', 'none');
        } else {
            $('#website').css('text-transform', 'uppercase');
        }
    }
    if (lastClicked.id == 'phoneNumber') {
        if ($('#phoneNumber').css('text-transform') == 'uppercase') {
            $('#phoneNumber').css('text-transform', 'none');
        } else {
            $('#phoneNumber').css('text-transform', 'uppercase');
        }
    }
    if (lastClicked.id == 'emailAdress') {
        if ($('#emailAdress').css('text-transform') == 'uppercase') {
            $('#emailAdress').css('text-transform', 'none');
        } else {
            $('#emailAdress').css('text-transform', 'uppercase');
        }
    }
    if (lastClicked.id == 'professionInput') {
        if ($('#professionInput').css('text-transform') == 'uppercase') {
            $('#professionInput').css('text-transform', 'none');
        } else {
            $('#professionInput').css('text-transform', 'uppercase');
        }
    }
    if (lastClicked.id == 'galleryCode') {
        if ($('#galleryCode').css('text-transform') == 'uppercase') {
            $('#galleryCode').css('text-transform', 'none');
        } else {
            $('#galleryCode').css('text-transform', 'uppercase');
        }
    }
    // Template 1
    if (lastClicked.id == 'art1') {
        if ($('#art1').css('text-transform') == 'uppercase') {
            $('#art1').css('text-transform', 'none');
        } else {
            $('#art1').css('text-transform', 'uppercase');
        }
    }
    if (lastClicked.id == 'streetNum1') {
        if ($('#streetNum1').css('text-transform') == 'uppercase') {
            $('#streetNum1').css('text-transform', 'none');
        } else {
            $('#streetNum1').css('text-transform', 'uppercase');
        }
    }
    if (lastClicked.id == 'postcode1') {
        if ($('#postcode1').css('text-transform') == 'uppercase') {
            $('#postcode1').css('text-transform', 'none');
        } else {
            $('#postcode1').css('text-transform', 'uppercase');
        }
    }
    if (lastClicked.id == 'phoneNumber1') {
        if ($('#phoneNumber1').css('text-transform') == 'uppercase') {
            $('#phoneNumber1').css('text-transform', 'none');
        } else {
            $('#phoneNumber1').css('text-transform', 'uppercase');
        }
    }
    if (lastClicked.id == 'emailAdress1') {
        if ($('#emailAdress1').css('text-transform') == 'uppercase') {
            $('#emailAdress1').css('text-transform', 'none');
        } else {
            $('#emailAdress1').css('text-transform', 'uppercase');
        }
    }
    if (lastClicked.id == 'galleryCode1') {
        if ($('#galleryCode1').css('text-transform') == 'uppercase') {
            $('#galleryCode1').css('text-transform', 'none');
        } else {
            $('#galleryCode1').css('text-transform', 'uppercase');
        }
    }
    // Template 3
    if (lastClicked.id == 'nameInput3') {
        if ($('#nameInput3').css('text-transform') == 'uppercase') {
            $('#nameInput3').css('text-transform', 'none');
        } else {
            $('#nameInput3').css('text-transform', 'uppercase');
        }
    }
    if (lastClicked.id == 'postcode3') {
        if ($('#postcode3').css('text-transform') == 'uppercase') {
            $('#postcode3').css('text-transform', 'none');
        } else {
            $('#postcode3').css('text-transform', 'uppercase');
        }
    }
    if (lastClicked.id == 'address3') {
        if ($('#address3').css('text-transform') == 'uppercase') {
            $('#address3').css('text-transform', 'none');
        } else {
            $('#address3').css('text-transform', 'uppercase');
        }
    }
    if (lastClicked.id == 'phoneNumber3') {
        if ($('#phoneNumber3').css('text-transform') == 'uppercase') {
            $('#phoneNumber3').css('text-transform', 'none');
        } else {
            $('#phoneNumber3').css('text-transform', 'uppercase');
        }
    }
    if (lastClicked.id == 'website3') {
        if ($('#website3').css('text-transform') == 'uppercase') {
            $('#website3').css('text-transform', 'none');
        } else {
            $('#website3').css('text-transform', 'uppercase');
        }
    }
    if (lastClicked.id == 'galleryCode3') {
        if ($('#galleryCode3').css('text-transform') == 'uppercase') {
            $('#galleryCode3').css('text-transform', 'none');
        } else {
            $('#galleryCode3').css('text-transform', 'uppercase');
        }
    }
    // Template 4
    if (lastClicked.id == 'name4') {
        if ($('#name4').css('text-transform') == 'uppercase') {
            $('#name4').css('text-transform', 'none');
        } else {
            $('#name4').css('text-transform', 'uppercase');
        }
    }
    if (lastClicked.id == 'insta4') {
        if ($('#insta4').css('text-transform') == 'uppercase') {
            $('#insta4').css('text-transform', 'none');
        } else {
            $('#insta4').css('text-transform', 'uppercase');
        }
    }
    if (lastClicked.id == 'tittle4') {
        if ($('#tittle4').css('text-transform') == 'uppercase') {
            $('#tittle4').css('text-transform', 'none');
        } else {
            $('#tittle4').css('text-transform', 'uppercase');
        }
    }
    if (lastClicked.id == 'galleryCode4') {
        if ($('#galleryCode4').css('text-transform') == 'uppercase') {
            $('#galleryCode4').css('text-transform', 'none');
        } else {
            $('#galleryCode4').css('text-transform', 'uppercase');
        }
    }
    // Template 5
    if (lastClicked.id == 'name5') {
        if ($('#name5').css('text-transform') == 'uppercase') {
            $('#name5').css('text-transform', 'none');
        } else {
            $('#name5').css('text-transform', 'uppercase');
        }
    }
    if (lastClicked.id == 'insta5') {
        if ($('#insta5').css('text-transform') == 'uppercase') {
            $('#insta5').css('text-transform', 'none');
        } else {
            $('#insta5').css('text-transform', 'uppercase');
        }
    }
    if (lastClicked.id == 'tittle5') {
        if ($('#tittle5').css('text-transform') == 'uppercase') {
            $('#tittle5').css('text-transform', 'none');
        } else {
            $('#tittle5').css('text-transform', 'uppercase');
        }
    }
    if (lastClicked.id == 'galleryCode5') {
        if ($('#galleryCode5').css('text-transform') == 'uppercase') {
            $('#galleryCode5').css('text-transform', 'none');
        } else {
            $('#galleryCode5').css('text-transform', 'uppercase');
        }
    }
    // Template 6
    if (lastClicked.id == 'name6') {
        if ($('#name6').css('text-transform') == 'uppercase') {
            $('#name6').css('text-transform', 'none');
        } else {
            $('#name6').css('text-transform', 'uppercase');
        }
    }
    if (lastClicked.id == 'insta6') {
        if ($('#insta6').css('text-transform') == 'uppercase') {
            $('#insta6').css('text-transform', 'none');
        } else {
            $('#insta6').css('text-transform', 'uppercase');
        }
    }
    if (lastClicked.id == 'tittle6') {
        if ($('#tittle6').css('text-transform') == 'uppercase') {
            $('#tittle6').css('text-transform', 'none');
        } else {
            $('#tittle6').css('text-transform', 'uppercase');
        }
    }
    if (lastClicked.id == 'galleryCode6') {
        if ($('#galleryCode6').css('text-transform') == 'uppercase') {
            $('#galleryCode6').css('text-transform', 'none');
        } else {
            $('#galleryCode6').css('text-transform', 'uppercase');
        }
    }
});




//   ======================   show templates in menu    ===================
$(document).ready(function() {
    $("#templates-select").on('change', function() {
        $(".t").hide();
        $("." + $(this).val()).fadeIn(700);
    }).change();

});

// ========================== font size  ===================

$(document).ready(function() { // Added var lastClicked; because it is global
    $("#fontSizeSelect").on('change', function() {
        $(lastClicked).css("font-size", $(this).val());
    }).change();

});


// ========= font family ============
$(document).ready(function() { // New code for Font Family
    $("#fontFamily").change(function() {
        $(lastClicked).css("font-family", $(this).val());
    }).change();
});


// // =================== delete text box  ===================
// $(".fa-trash").click(function() {
//     $(lastClicked).hide();


// });


// ==================  show template on card   ====================

$(".example1").hide();
$(".example2").hide();
$(".example3").hide();
$(".example4").hide();
$(".example5").hide();
$(".example6").hide();
$("#create1").hide()

$(".artist1").click(function() {
    $(".create").addClass('bg1');
    $(".example1").show();
    $(".create").removeClass('bg3');
    $(".create").removeClass('bg2');
    $(".create").removeClass('bg4');
    $(".create").removeClass('bg6');
    $(".create").removeClass('bg5');
    $(".example2").hide();
    $(".example3").hide();
    $(".example4").hide();
    $(".example5").hide();
    $(".example6").hide();
    $(".create").show();
    $("#create1").hide();
    $(".text-Options").hide();
})

$(".artist2").click(function() {
    $(".create").addClass('bg2');
    $(".create").removeClass('bg1')
    $(".create").removeClass('bg3')
    $(".create").removeClass('bg4');
    $(".create").removeClass('bg6');
    $(".create").removeClass('bg5');
    $(".example3").hide();
    $(".example2").show();
    $(".example1").hide();
    $(".example4").hide();
    $(".example5").hide();
    $(".example6").hide();
    $(".create").show();
    $("#create1").hide();
    $(".text-Options").hide();

})

$(".artist3").click(function() {
    $(".create").addClass('bg3');
    $(".create").removeClass('bg1')
    $(".create").removeClass('bg2')
    $(".create").removeClass('bg4');
    $(".create").removeClass('bg6');
    $(".create").removeClass('bg5');
    $(".create").show();
    $(".example1").hide();
    $(".example2").hide();
    $(".example3").show();
    $(".example4").hide();
    $(".example5").hide();
    $(".example6").hide();
    $("#create1").hide();
    $(".text-Options").hide();

})

$(".artist4").click(function() {
    $(".example4").show();

    $(".create").removeClass('bg1');
    $(".create").removeClass('bg2');
    $(".create").removeClass('bg3');
    $(".create").removeClass('bg5');
    $(".create").removeClass('bg6');
    $(".example1").hide();
    $(".example2").hide();
    $(".example3").hide();
    $(".example5").hide();
    $(".example6").hide();
    $("#create1").show();
    $(".create").hide();
    $(".text-Options").hide();

})
$(".artist5").click(function() {
    $(".example5").show();
    $(".create").addClass('bg5');
    $(".create").removeClass('bg1');
    $(".create").removeClass('bg2');
    $(".create").removeClass('bg3');
    $(".create").removeClass('bg4');
    $(".create").removeClass('bg6');
    $(".example1").hide();
    $(".example2").hide();
    $(".example3").hide();
    $(".example4").hide();
    $(".example6").hide();
    $("#create1").hide();
    $(".create").show();
    $(".text-Options").hide();

})
$(".artist6").click(function() {
    $(".example6").show();
    $(".create").addClass('bg6');
    $(".create").removeClass('bg1');
    $(".create").removeClass('bg2');
    $(".create").removeClass('bg3');
    $(".create").removeClass('bg4');
    $(".create").removeClass('bg5');
    $(".example1").hide();
    $(".example2").hide();
    $(".example3").hide();
    $(".example4").hide();
    $(".example5").hide();
    $("#create1").hide();
    $(".create").show();
    $(".text-Options").hide();

})