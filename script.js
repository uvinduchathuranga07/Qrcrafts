let img = document.getElementById("img");
let qrImg = document.getElementById("qrImg");
let qrtext = document.getElementById("input5");
let qrLink = document.getElementById("input1");
let download = document.getElementById("download");


const div1Button = document.getElementById('tab1');
const div2Button = document.getElementById('tab3');
const div3Button = document.getElementById('tab4');
const div4Button = document.getElementById('tab5');
const div5Button = document.getElementById('tab6');
const div6Button = document.getElementById('tab7');
const div7Button = document.getElementById('tab8');
const div8Button = document.getElementById('tab9');


const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
const div5 = document.getElementById('div5');
const div6 = document.getElementById('div6');
const div7 = document.getElementById('div7');
const div8 = document.getElementById('div8');



div1.style.display = 'block';

div1Button.addEventListener('click', () => {
    div1.style.display = 'block';
    div2.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'none';
    div6.style.display = 'none';
    div7.style.display = 'none';
    div8.style.display = 'none';
  });
  
  div2Button.addEventListener('click', () => {
    div1.style.display = 'none';
    div2.style.display = 'block';
    div3.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'none';
    div6.style.display = 'none';
    div7.style.display = 'none';
    div8.style.display = 'none';
  });
  
  div3Button.addEventListener('click', () => {
    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'block';
    div4.style.display = 'none';
    div5.style.display = 'none';
    div6.style.display = 'none';
    div7.style.display = 'none';
    div8.style.display = 'none';
  });

  div4Button.addEventListener('click', () => {
    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'block';
    div5.style.display = 'none';
    div6.style.display = 'none';
    div7.style.display = 'none';
    div8.style.display = 'none';
  });


  div5Button.addEventListener('click', () => {
    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'block';
    div6.style.display = 'none';
    div7.style.display = 'none';
    div8.style.display = 'none';
  });
  div6Button.addEventListener('click', () => {
    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'none';
    div6.style.display = 'block';
    div7.style.display = 'none';
    div8.style.display = 'none';
  });

  div7Button.addEventListener('click', () => {
    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'none';
    div6.style.display = 'none';
    div7.style.display = 'block';
    div8.style.display = 'none';
  });

  div8Button.addEventListener('click', () => {
    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'none';
    div6.style.display = 'none';
    div7.style.display = 'none';
    div8.style.display = 'block';
  });

function generateQR(){
  if (qrtext.value.length > 0) {
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?data=" + qrtext.value + "&size=200x200";
    }else{
      alert("Please fill in the Text field before generating the QR code.");
    }
}

function generateQRLink(){
    
  if (qrLink.value.length > 0) {
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?data="+qrLink.value+"&size=200x200";  
    }else{
      alert("Please fill in the Text field before generating the QR code.");
    }
  
    }

function generateQRNumber(){
    var contryCode = document.getElementById("input6").value;
    var qrNumber = document.getElementById("input7").value;
    var phoneNumber= contryCode + qrNumber;
 
    if (qrNumber.length > 0  ) {
      qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?data="+ phoneNumber +"&size=200x200";
      }else{
        alert("Please fill in the Text fields before generating the QR code.");
      }  


   
}

function generateQRWhatsapp(){
  var contryCodewp = document.getElementById("input11").value;
  var qrWpNumber = document.getElementById("input12").value;
  var qrWpMessage = document.getElementById("input13").value;

  var phoneNumber= contryCodewp + qrWpNumber;
  var WpMessage = "https://wa.me/"+phoneNumber+"/?text="+qrWpMessage;

  if (qrWpNumber.length > 0 && qrWpMessage.length > 0 ) {
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?data="+ WpMessage +"&size=200x200";
    }else{
      alert("Please fill in the Text fields before generating the QR code.");
    }  


  
}

function  generateQREmail(){
  var qrEmail = document.getElementById("input2").value;
  var qrEmailSub = document.getElementById("input3").value;
  var qrEmailMessage = document.getElementById("input4").value;

  var Email = "MATMSG:TO:"+qrEmail+";SUB:"+qrEmailSub+";BODY:"+qrEmailMessage+";;";

  if (qrEmail.length > 0 && qrEmailMessage.length > 0 ) {
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?data="+ Email +"&size=200x200";
    }else{
      alert("Please fill in the Text fields before generating the QR code.");
    }  


  
}

function  generateQRSms(){
  var contryCdMsg = document.getElementById("input8").value;
  var qrNumberSms = document.getElementById("input9").value;
  var qrSmsMessage = document.getElementById("input10").value;

  var phoneNumberSms= contryCdMsg + qrNumberSms;
  var Email = "SMSTO:"+phoneNumberSms+":"+qrSmsMessage;

  if (qrNumberSms.length > 0 && qrSmsMessage.length > 0 ) {
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?data="+ Email +"&size=200x200";
    }else{
      alert("Please fill in the Text fields before generating the QR code.");
    }  

  
}



function generateWifi(){
  var wifiId = document.getElementById("input14").value;
  var networkType = document.getElementById("input15").value;
  var wifiPassword = document.getElementById("input16").value;
  var hidden = document.getElementById("input17").value;

  var wifi ="WIFI:S:"+wifiId+";T:"+networkType+";P:"+wifiPassword+";H:"+hidden+";;";

  if (wifiId.length > 0 && networkType.length > 0 && wifiPassword.length > 0 ) {
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?data="+ wifi +"&size=200x200"
    }else{
      alert("Please fill in the Text fields before generating the QR code.");
    }  


}


function generateQbit(){
  var address = document.getElementById("input19").value;
  var bitType = document.getElementById("input18").value;
  var amount = document.getElementById("input20").value;


  var bit =""+bitType+":"+address+"?amount="+amount+"";

  if (address.length > 0 && bitType.length > 0 && amount.length > 0 ) {
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?data="+ bit +"&size=200x200"
    }else{
      alert("Please fill in the Text fields before generating the QR code.");
    }  
 
}
