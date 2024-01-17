var counter = 0;
function increase(){
    counter++;
document.getElementById("counter-value").innerHTML = counter
}
function decrease(){
    counter--;
document.getElementById("counter-value").innerHTML = counter
}


var counter1 = 0;
function increase1(){
    counter1++;
document.getElementById("counter-value1").innerHTML = counter1
}
function decrease1(){
    counter1--;
document.getElementById("counter-value1").innerHTML = counter1
}


var counter2 = 0;
function increase2(){
    counter2++;
document.getElementById("counter-value2").innerHTML = counter2
}
function decrease2(){
    counter2--;
document.getElementById("counter-value2").innerHTML = counter2
}


var counter3 = 0;
function increase3(){
    counter3++;
document.getElementById("counter-value3").innerHTML = counter3
}
function decrease3(){
    counter3--;
document.getElementById("counter-value3").innerHTML = counter3
}

function submit(){
    let qrContentInput = document.getElementById("qr-content");
    let qrGenerationForm = 
    document.getElementById("qr-generation-form");
    let qrCode;
     
    function generateQrCode(qrContent) {
      return new QRCode("qr-code", {
        text: qrContent,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    }
     
    // Event listener for form submit event
    qrGenerationForm.addEventListener("submit", function (event) {
      // Prevent form submission
      event.preventDefault();
      let qrContent = qrContentInput.value;
      if (qrCode == null) {
           
        // Generate code initially
        qrCode = generateQrCode(qrContent);
      } else {
           
        // If code already generated then make 
        // again using same object
        qrCode.makeCode(qrContent);
      }
    })}