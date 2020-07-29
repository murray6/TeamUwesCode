function sendEmail(email) {
var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic QUM3NzdjM2UzMjkzNzY2ZDYzYjIzMTRiZTdhMGI2MzdhNzoxNmQ1ODM1M2Y3MTk0MjJmYmQyNzY5YjkxMzQzYjk1Zg==");
myHeaders.append("accept", "application/json");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
   mode: 'no-cors',
  credentials: 'include'
};

fetch("https://workflow.zang.io/EngagementDesignerZang/wf/Admin/createThalliumInstance/send email using lfm avaya/5/AC777c3e3293766d63b2314be7a0b637a7", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }
  
  
  function processSignup(){
    var phonenumber =document.getElementById("P8_PHONE_NUMBER").value;
    var email =document.getElementById("P8_EMAIL").value;
    var fname=document.getElementById("P8_FIRST_NAME").value;
    var lastname=document.getElementById("P8_LAST_NAME").value;
        
        if(!fname || !lastname || !email || !phonenumber ){
           return false;  
           }else {sendSms(phonenumber);
		   sendEmail(email)
		   }
}

function sendSms(phonenumber) {
var myHeaders = new Headers();
 var toNum =phonenumber;
  
var fromNum ="+13033300023"

myHeaders.append("authorization", "Basic QUM3NzdjM2UzMjkzNzY2ZDYzYjIzMTRiZTdhMGI2MzdhNzoxNmQ1ODM1M2Y3MTk0MjJmYmQyNzY5YjkxMzQzYjk1Zg==");

/*myHeaders.append("authority", "spacesapis.avayacloud.com");
myHeaders.append("accept", "application/json");
myHeaders.append("user-agent","PostmanRuntime/7.26.1")
myHeaders.append("origin", "https://spaces.avayacloud.com");
myHeaders.append("sec-fetch-site", "same-site");
myHeaders.append("sec-fetch-mode", "no-cors");
myHeaders.append("sec-fetch-dest", "empty");
myHeaders.append("accept-language", "en-US,en;q=0.9");\
myHeaders.append("Cookie", "__cfduid=d001cb1a51a9cfa118579b03ae65d13a31594122981");
*/

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow',
   mode: 'no-cors',
  credentials: 'include'
};

  fetch("https://api.zang.io/v2/Accounts/AC777c3e3293766d63b2314be7a0b637a7/SMS/Messages.json?To="+toNum+"&From="+fromNum+"&Body=Welcome to Avaya Spaces. Your Pin is 12345", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}