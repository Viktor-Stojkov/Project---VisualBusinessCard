
function downloadFunction(){
if ($(document.getElementById("create1")).is(":visible")) {
     

        html2canvas(document.getElementById("create1"),
            {
                allowTaint: true,
                useCORS: true
            }).then(function (canvas) {
                var anchorTag = document.createElement("a");
                document.body.appendChild(anchorTag);
                document.getElementById("previewImg").appendChild(canvas);
                anchorTag.download = "card.png";
                anchorTag.href = canvas.toDataURL();
                anchorTag.target = '_blank';
                anchorTag.click();
            });
}

else if ($(document.getElementById("invoice")).is(":visible")) {

        html2canvas(document.getElementById("invoice"),
            {
                allowTaint: true,
                useCORS: true
            }).then(function (canvas) {
                var anchorTag = document.createElement("a");
                document.body.appendChild(anchorTag);
                document.getElementById("previewImg").appendChild(canvas);
                anchorTag.download = "card.png";
                anchorTag.href = canvas.toDataURL();
                anchorTag.target = '_blank';
                anchorTag.click();
            });}
}




// if ($(document.getElementById("invoice1")).is(":visible")) {
//     document.getElementById("btn_convert").addEventListener("click", function() {

//         html2canvas(document.getElementById("invoice1"),
//             {
//                 allowTaint: true,
//                 useCORS: true
//             }).then(function (canvas) {
//                 var anchorTag = document.createElement("a");
//                 document.body.appendChild(anchorTag);
//                 document.getElementById("previewImg").appendChild(canvas);
//                 anchorTag.download = "card.png";
//                 anchorTag.href = canvas.toDataURL();
//                 anchorTag.target = '_blank';
//                 anchorTag.click();
//             });
//     });
// }

