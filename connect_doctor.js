function sendMessage(chattext) {
    /*alert('Message sent');*/
var translatedtext =document.getElementById("CHATVALUE").value;
document.getElementById("CHATVALUE").value="";
if (translatedtext==chattext)
{
var newtext = "<p>"+chattext+"</p>";
}
else
{
var newtext = "<p>"+translatedtext +" ("+chattext+")</p>";
}

/*alert(chattext);*/
 var jwttoken =  document.getElementById('JWT').value;
var myHeaders = new Headers();
myHeaders.append("authority", "spacesapis.avayacloud.com");
myHeaders.append("accept", "application/json");
myHeaders.append("authorization", jwttoken);
myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36");
myHeaders.append("content-type", "application/json");
myHeaders.append("origin", "https://spaces.avayacloud.com");
myHeaders.append("sec-fetch-site", "same-site");
myHeaders.append("sec-fetch-mode", "cors");
myHeaders.append("sec-fetch-dest", "empty");
/* myHeaders.append("referer", "https://spaces.avayacloud.com/spaces/5e5e821f89fc6d7ffeaa8472"); */  
myHeaders.append("referer", "https://spaces.avayacloud.com/spaces/5e5e538d89fc6dc77aaa1fa1");
myHeaders.append("accept-language", "en-US,en;q=0.9");
 
 var postchaturl =     "https://spacesapis.avayacloud.com/api/spaces/"+ document.getElementById('SPACESID').value+"/chats"    ;
/*alert('Post Messages '+document.getElementById('SPACESID').value); */

var raw = JSON.stringify({"content":{"bodyText":newtext}});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(postchaturl, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    
      myMessages();
  }
 
function myMessages()  {
document.getElementById("messagecontainer").innerHTML="";
var myHeaders = new Headers();
myHeaders.append("authority", "spacesapis.avayacloud.com");
myHeaders.append("accept", "application/json");
myHeaders.append("authorization", "jwt eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkX3NpZyI6Ilp0bkJjWVRoWnFpNnQwSXBiSUQ5MzdnbWpDQWxXSF9HSHBFTk91VEE2LTQiLCJwcm9kdWN0X3R5cGUiOiJhY2NvdW50cyIsImxhc3R1cGRhdGV0aW1lIjoiMjAyMC0wMi0yN1QxODozNzoyNy45NjIiLCJpc3MiOiJhdmF5YWNsb3VkLmNvbSIsInB1YmxpY2tleWlkIjoiYWd4emZtOXVaWE51WVRJd01UUnlHZ3NTRFVkS2QzUlFkV0pzYVdOTFpYa1lnSURRaFpmdXVBa00iLCJleHAiOjE1OTY4NzkyNzUsInVzZXJfaWQiOiJhZ3h6Zm05dVpYTnVZVEl3TVRSeUVRc1NCRlZ6WlhJWWdJRGdwLXI4aGdzTSIsInZlciI6IjIuMCJ9.aeRVhoHinG0mEgrt-9J4kXmUuhJd78VxhWqMhw2XToYFUA1_IZhwiY5Piz9JTlScxo2SkCnr6eayLQXuDT3etZixOsWwVIU3khd5HFaF054wxAOJWU7vKUfZ09zp01qBcRs-J-JuIinlwCDj9m_RzBFdSm0PC6k73L-_JCAAVGt4-fO_kxD9RRArFQqPPxrFEznXMODV-Kj0PsdRgjDU6yniGgh-S5kVflXx56gpNx4uOS1o89cFpk1GhJPjJohpOipsLci_yWZVV4JH5hyrqUehz1vsQZks9cnOI50FvjltLH9myj1xW_rp6B02L0qpMhwgiIGZ3sY0eGzSOoTeuw");

/*myHeaders.append("authorization", "jwt eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkX3NpZyI6IkNFNG5HUFF1ODI5Q25hekRVMXhTOGRFX3hEa0dTYVZmbmxZM0RjQTA2aTAiLCJwcm9kdWN0X3R5cGUiOiJhY2NvdW50cyIsImxhc3R1cGRhdGV0aW1lIjoiMjAyMC0wMy0xNlQxMDoyOTo0OS43MTkiLCJpc3MiOiJ6YW5nLmlvIiwicHVibGlja2V5aWQiOiJhZ3h6Zm05dVpYTnVZVEl3TVRSeUdnc1NEVWRLZDNSUWRXSnNhV05MWlhrWWdJRFF5ZHFJa2dnTSIsImV4cCI6MTU5NjEyMTcxNSwidXNlcl9pZCI6ImFneHpmbTl1WlhOdVlUSXdNVFJ5RVFzU0JGVnpaWElZZ0lEUXVPUFB6UWdNIiwidmVyIjoiMi4wIn0.plO7e7c32oFeY8JeXhiNWEojLKxe7C6h1mwlwmGQ1FN2PyBOJjQTmBIQ7Y0m-rMTIJVBqTkyNGHh_8P-kyLLPKKX8bjijHYW8lyNhtqHhB_jpBPeGJ9JFlHyFLqlq_n3FH4dF--3G40uJXfXrBKMIO-N-mYSpGGQPZy2iFQyHIdAF12avDnDwG3tBrsUo0bFiumGKvmejQ7OcVyfrVuOjJhHtJkqvmyoGv6j1atJuUrFSFw39GQOd1vmYck80hoq0wcsXnpaYYGGNnrl9_9eRqbiDS_aWlAFYXeEeYGeUJ8M9XiZTR58QanY9zXqpgsE25NKd0lVYWvblIa-AQEfig");*/
myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36");
myHeaders.append("content-type", "application/json");
myHeaders.append("origin", "https://spaces.avayacloud.com");
myHeaders.append("sec-fetch-site", "same-site");
myHeaders.append("sec-fetch-mode", "cors");
myHeaders.append("sec-fetch-dest", "empty");
myHeaders.append("referer", "https://spaces.avayacloud.com/spaces/5f0c736c1e182a13e22d1295");
myHeaders.append("accept-language", "en-US,en;q=0.9");
var spacesurl =    "https://spacesapis.avayacloud.com/api/spaces/"+document.getElementById('SPACESID').value+"/messages/query?refTime=&direction=after";
/*alert('Get messages '+document.getElementById('SPACESID').value); */
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(spacesurl, requestOptions)
  .then(response => response.json())
  .then(function(data) {
    console.log(data.data[0].content.bodyText);
	var str1 = "";
	var res ="";
	for(let i = 0; i < data.data.length; i++){
console.log(data.data[i].content.bodyText);
/* str1=document.getElementById("messagecontainer").innervalue   document.getElementById("messagecontainer").value=res;*/
str1 =document.getElementById('messagecontainer').innerHTML+"";
var message="";
var str2 = data.data[i].content.bodyText;
var timestamp =data.data[0].content.startTime;
var user=data.data[i].sender.displayname;
message ="<div><b><span style=\"color:darkgray\">"+ timestamp+" -</b></span><span style=\"color:darkgray\"> <i>"+ user+": </i></span><span style=\"color:red\">"+str2+"</span></div>"

res = str1.concat(message);

 document.getElementById('messagecontainer').innerHTML=res;
/*document.write("<div>"+str2+"</div>");*/
/*
<div class="message"><div class="name">Stephen R</div><div class="message-body-wrap"><div class="message-body chat-message"><div class="autoShrinkedCard-root"><div class="autoShrinkedCard-text-body isMainSpace"><div class="rich-editor-wrapper read-only-editor hidePlaceholder"><div class="DraftEditor-root"><div class="DraftEditor-editorContainer"><div aria-describedby="placeholder-3t95f" class="public-DraftEditor-content" contenteditable="false" spellcheck="true" style="outline: none; user-select: text; white-space: pre-wrap; overflow-wrap: break-word;"><div data-contents="true"><div class="" data-block="true" data-editor="3t95f" data-offset-key="4osn5-0-0"><div data-offset-key="4osn5-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="4osn5-0-0"><span data-text="true">khkhkj</span></span></div></div></div></div></div></div></div></div></div></div><div class="corner"></div></div><div class="chat-datetime">Jul 08, 11:15 AM</div></div>
<textarea id="message" name="message" rows="31" cols="50">
blank
</textarea>
*/
}
  })
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  document.getElementById("post").addEventListener("click", function(){
    myMessages();} );
  }


function inviteToSpace(spacename,inviteemail) {
var spacename =document.getElementById("NEWSPACE").value;
document.getElementById("NEWSPACE").value="";
var inviteemail =document.getElementById("INVITEE").value;
document.getElementById("INVITEE").value="";
var jwttoken =  document.getElementById('JWT').value;
var myHeaders = new Headers();
myHeaders.append("authority", "spacesapis.avayacloud.com");
myHeaders.append("accept", "application/json");
myHeaders.append("authorization", jwttoken);
myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36");
myHeaders.append("content-type", "application/json");
myHeaders.append("origin", "https://spaces.avayacloud.com");
myHeaders.append("sec-fetch-site", "same-site");
myHeaders.append("sec-fetch-mode", "cors");
myHeaders.append("sec-fetch-dest", "empty");
/* myHeaders.append("referer", "https://spaces.avayacloud.com/spaces/5e5e821f89fc6d7ffeaa8472"); */
myHeaders.append("referer", "https://spaces.avayacloud.com/spaces/5f0c736c1e182a13e22d1295");
myHeaders.append("accept-language", "en-US,en;q=0.9");

 var postinviteurl =     "https://spacesapis.avayacloud.com/api/spaces/invite"    ;

var raw = JSON.stringify({  "topic": {
    "id": null,
    "title": spacename,
    "description": "",
    "type": "group"
  },
  "invitees": [{
    "inviteeType": "email",
    "invitee": inviteemail,
    "role": "member"
  }],
  "informChannel": "server"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(postinviteurl, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }

function membersInSpace()  {
document.getElementById("membercontainer").innerHTML="";
var myHeaders = new Headers();
myHeaders.append("authority", "spacesapis.avayacloud.com");
myHeaders.append("accept", "application/json");
myHeaders.append("authorization", "jwt eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkX3NpZyI6Ilp0bkJjWVRoWnFpNnQwSXBiSUQ5MzdnbWpDQWxXSF9HSHBFTk91VEE2LTQiLCJwcm9kdWN0X3R5cGUiOiJhY2NvdW50cyIsImxhc3R1cGRhdGV0aW1lIjoiMjAyMC0wMi0yN1QxODozNzoyNy45NjIiLCJpc3MiOiJhdmF5YWNsb3VkLmNvbSIsInB1YmxpY2tleWlkIjoiYWd4emZtOXVaWE51WVRJd01UUnlHZ3NTRFVkS2QzUlFkV0pzYVdOTFpYa1lnSURRaFpmdXVBa00iLCJleHAiOjE1OTY4NzkyNzUsInVzZXJfaWQiOiJhZ3h6Zm05dVpYTnVZVEl3TVRSeUVRc1NCRlZ6WlhJWWdJRGdwLXI4aGdzTSIsInZlciI6IjIuMCJ9.aeRVhoHinG0mEgrt-9J4kXmUuhJd78VxhWqMhw2XToYFUA1_IZhwiY5Piz9JTlScxo2SkCnr6eayLQXuDT3etZixOsWwVIU3khd5HFaF054wxAOJWU7vKUfZ09zp01qBcRs-J-JuIinlwCDj9m_RzBFdSm0PC6k73L-_JCAAVGt4-fO_kxD9RRArFQqPPxrFEznXMODV-Kj0PsdRgjDU6yniGgh-S5kVflXx56gpNx4uOS1o89cFpk1GhJPjJohpOipsLci_yWZVV4JH5hyrqUehz1vsQZks9cnOI50FvjltLH9myj1xW_rp6B02L0qpMhwgiIGZ3sY0eGzSOoTeuw");

/*myHeaders.append("authorization", "jwt eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkX3NpZyI6IkNFNG5HUFF1ODI5Q25hekRVMXhTOGRFX3hEa0dTYVZmbmxZM0RjQTA2aTAiLCJwcm9kdWN0X3R5cGUiOiJhY2NvdW50cyIsImxhc3R1cGRhdGV0aW1lIjoiMjAyMC0wMy0xNlQxMDoyOTo0OS43MTkiLCJpc3MiOiJ6YW5nLmlvIiwicHVibGlja2V5aWQiOiJhZ3h6Zm05dVpYTnVZVEl3TVRSeUdnc1NEVWRLZDNSUWRXSnNhV05MWlhrWWdJRFF5ZHFJa2dnTSIsImV4cCI6MTU5NjEyMTcxNSwidXNlcl9pZCI6ImFneHpmbTl1WlhOdVlUSXdNVFJ5RVFzU0JGVnpaWElZZ0lEUXVPUFB6UWdNIiwidmVyIjoiMi4wIn0.plO7e7c32oFeY8JeXhiNWEojLKxe7C6h1mwlwmGQ1FN2PyBOJjQTmBIQ7Y0m-rMTIJVBqTkyNGHh_8P-kyLLPKKX8bjijHYW8lyNhtqHhB_jpBPeGJ9JFlHyFLqlq_n3FH4dF--3G40uJXfXrBKMIO-N-mYSpGGQPZy2iFQyHIdAF12avDnDwG3tBrsUo0bFiumGKvmejQ7OcVyfrVuOjJhHtJkqvmyoGv6j1atJuUrFSFw39GQOd1vmYck80hoq0wcsXnpaYYGGNnrl9_9eRqbiDS_aWlAFYXeEeYGeUJ8M9XiZTR58QanY9zXqpgsE25NKd0lVYWvblIa-AQEfig");*/
myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36");
myHeaders.append("content-type", "application/json");
myHeaders.append("origin", "https://spaces.avayacloud.com");
myHeaders.append("sec-fetch-site", "same-site");
myHeaders.append("sec-fetch-mode", "cors");
myHeaders.append("sec-fetch-dest", "empty");
myHeaders.append("referer", "https://spaces.avayacloud.com/spaces/5f0c736c1e182a13e22d1295");
myHeaders.append("accept-language", "en-US,en;q=0.9");
var memspacesurl =    "https://spacesapis.avayacloud.com/api/spaces/"+document.getElementById('SPACESID').value+"/members";
/*alert('Members '+document.getElementById('SPACESID').value); */

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

var members="";
var memberlist = "";
    
 members = "<div>Doctor Makeyouwell</div>";
    memberlist = memberlist.concat(members);
      members = "<div>Patient </div>";
    memberlist = memberlist.concat(members);


fetch(memspacesurl, requestOptions)
  .then(response => response.json())
  .then(function(data) {
    console.log(data);
    for(let i = 0; i < data.data.length; i++){
	console.log(data.data[i].displayname);
	members = "<div>"+data.data[i].displayname+"</div>";
	memberlist = memberlist.concat(members);
    /*alert(memberlist);*/

}    document.getElementById('membercontainer').innerHTML=memberlist;

})

  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }

document.getElementById("post").addEventListener("click", function(){
    membersInSpace();} );



function spaceDetails()  {
document.getElementById("spacecontainer").innerHTML="";
var myHeaders = new Headers();
myHeaders.append("authority", "spacesapis.avayacloud.com");
myHeaders.append("accept", "application/json");
myHeaders.append("authorization", "jwt eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkX3NpZyI6Ilp0bkJjWVRoWnFpNnQwSXBiSUQ5MzdnbWpDQWxXSF9HSHBFTk91VEE2LTQiLCJwcm9kdWN0X3R5cGUiOiJhY2NvdW50cyIsImxhc3R1cGRhdGV0aW1lIjoiMjAyMC0wMi0yN1QxODozNzoyNy45NjIiLCJpc3MiOiJhdmF5YWNsb3VkLmNvbSIsInB1YmxpY2tleWlkIjoiYWd4emZtOXVaWE51WVRJd01UUnlHZ3NTRFVkS2QzUlFkV0pzYVdOTFpYa1lnSURRaFpmdXVBa00iLCJleHAiOjE1OTY4NzkyNzUsInVzZXJfaWQiOiJhZ3h6Zm05dVpYTnVZVEl3TVRSeUVRc1NCRlZ6WlhJWWdJRGdwLXI4aGdzTSIsInZlciI6IjIuMCJ9.aeRVhoHinG0mEgrt-9J4kXmUuhJd78VxhWqMhw2XToYFUA1_IZhwiY5Piz9JTlScxo2SkCnr6eayLQXuDT3etZixOsWwVIU3khd5HFaF054wxAOJWU7vKUfZ09zp01qBcRs-J-JuIinlwCDj9m_RzBFdSm0PC6k73L-_JCAAVGt4-fO_kxD9RRArFQqPPxrFEznXMODV-Kj0PsdRgjDU6yniGgh-S5kVflXx56gpNx4uOS1o89cFpk1GhJPjJohpOipsLci_yWZVV4JH5hyrqUehz1vsQZks9cnOI50FvjltLH9myj1xW_rp6B02L0qpMhwgiIGZ3sY0eGzSOoTeuw");

/*myHeaders.append("authorization", "jwt eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkX3NpZyI6IkNFNG5HUFF1ODI5Q25hekRVMXhTOGRFX3hEa0dTYVZmbmxZM0RjQTA2aTAiLCJwcm9kdWN0X3R5cGUiOiJhY2NvdW50cyIsImxhc3R1cGRhdGV0aW1lIjoiMjAyMC0wMy0xNlQxMDoyOTo0OS43MTkiLCJpc3MiOiJ6YW5nLmlvIiwicHVibGlja2V5aWQiOiJhZ3h6Zm05dVpYTnVZVEl3TVRSeUdnc1NEVWRLZDNSUWRXSnNhV05MWlhrWWdJRFF5ZHFJa2dnTSIsImV4cCI6MTU5NjEyMTcxNSwidXNlcl9pZCI6ImFneHpmbTl1WlhOdVlUSXdNVFJ5RVFzU0JGVnpaWElZZ0lEUXVPUFB6UWdNIiwidmVyIjoiMi4wIn0.plO7e7c32oFeY8JeXhiNWEojLKxe7C6h1mwlwmGQ1FN2PyBOJjQTmBIQ7Y0m-rMTIJVBqTkyNGHh_8P-kyLLPKKX8bjijHYW8lyNhtqHhB_jpBPeGJ9JFlHyFLqlq_n3FH4dF--3G40uJXfXrBKMIO-N-mYSpGGQPZy2iFQyHIdAF12avDnDwG3tBrsUo0bFiumGKvmejQ7OcVyfrVuOjJhHtJkqvmyoGv6j1atJuUrFSFw39GQOd1vmYck80hoq0wcsXnpaYYGGNnrl9_9eRqbiDS_aWlAFYXeEeYGeUJ8M9XiZTR58QanY9zXqpgsE25NKd0lVYWvblIa-AQEfig");*/
myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36");
myHeaders.append("content-type", "application/json");
myHeaders.append("origin", "https://spaces.avayacloud.com");
myHeaders.append("sec-fetch-site", "same-site");
myHeaders.append("sec-fetch-mode", "cors");
myHeaders.append("sec-fetch-dest", "empty");
myHeaders.append("referer", "https://spaces.avayacloud.com/spaces/5f0c736c1e182a13e22d1295");
myHeaders.append("accept-language", "en-US,en;q=0.9");
var getspacesurl =    "https://spacesapis.avayacloud.com/api/spaces/"+document.getElementById('SPACESID').value;
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

var spacename="";


fetch(getspacesurl, requestOptions)
  .then(response => response.json())
  .then(function(data) {
    console.log(data.title);
	spacename = data.title;
    /*alert(spacename);*/

document.getElementById('spacecontainer').innerHTML=spacename;
})

  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }

  document.getElementById("post").addEventListener("click", function(){
    spaceDetails();} );

  document.getElementById("refresh").addEventListener("click", function(){
    myMessages();} );

  document.getElementById("refreshmem").addEventListener("click", function(){
    membersInSpace();} );

document.getElementById("refreshmem").addEventListener("click", function(){
    spaceDetails();} );

function spaceList()  {
document.getElementById("membercontainer").innerHTML="";
var myHeaders = new Headers();
myHeaders.append("authority", "spacesapis.avayacloud.com");
myHeaders.append("accept", "application/json");
myHeaders.append("authorization", "jwt eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkX3NpZyI6Ilp0bkJjWVRoWnFpNnQwSXBiSUQ5MzdnbWpDQWxXSF9HSHBFTk91VEE2LTQiLCJwcm9kdWN0X3R5cGUiOiJhY2NvdW50cyIsImxhc3R1cGRhdGV0aW1lIjoiMjAyMC0wMi0yN1QxODozNzoyNy45NjIiLCJpc3MiOiJhdmF5YWNsb3VkLmNvbSIsInB1YmxpY2tleWlkIjoiYWd4emZtOXVaWE51WVRJd01UUnlHZ3NTRFVkS2QzUlFkV0pzYVdOTFpYa1lnSURRaFpmdXVBa00iLCJleHAiOjE1OTY4NzkyNzUsInVzZXJfaWQiOiJhZ3h6Zm05dVpYTnVZVEl3TVRSeUVRc1NCRlZ6WlhJWWdJRGdwLXI4aGdzTSIsInZlciI6IjIuMCJ9.aeRVhoHinG0mEgrt-9J4kXmUuhJd78VxhWqMhw2XToYFUA1_IZhwiY5Piz9JTlScxo2SkCnr6eayLQXuDT3etZixOsWwVIU3khd5HFaF054wxAOJWU7vKUfZ09zp01qBcRs-J-JuIinlwCDj9m_RzBFdSm0PC6k73L-_JCAAVGt4-fO_kxD9RRArFQqPPxrFEznXMODV-Kj0PsdRgjDU6yniGgh-S5kVflXx56gpNx4uOS1o89cFpk1GhJPjJohpOipsLci_yWZVV4JH5hyrqUehz1vsQZks9cnOI50FvjltLH9myj1xW_rp6B02L0qpMhwgiIGZ3sY0eGzSOoTeuw");

/*myHeaders.append("authorization", "jwt eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkX3NpZyI6IkNFNG5HUFF1ODI5Q25hekRVMXhTOGRFX3hEa0dTYVZmbmxZM0RjQTA2aTAiLCJwcm9kdWN0X3R5cGUiOiJhY2NvdW50cyIsImxhc3R1cGRhdGV0aW1lIjoiMjAyMC0wMy0xNlQxMDoyOTo0OS43MTkiLCJpc3MiOiJ6YW5nLmlvIiwicHVibGlja2V5aWQiOiJhZ3h6Zm05dVpYTnVZVEl3TVRSeUdnc1NEVWRLZDNSUWRXSnNhV05MWlhrWWdJRFF5ZHFJa2dnTSIsImV4cCI6MTU5NjEyMTcxNSwidXNlcl9pZCI6ImFneHpmbTl1WlhOdVlUSXdNVFJ5RVFzU0JGVnpaWElZZ0lEUXVPUFB6UWdNIiwidmVyIjoiMi4wIn0.plO7e7c32oFeY8JeXhiNWEojLKxe7C6h1mwlwmGQ1FN2PyBOJjQTmBIQ7Y0m-rMTIJVBqTkyNGHh_8P-kyLLPKKX8bjijHYW8lyNhtqHhB_jpBPeGJ9JFlHyFLqlq_n3FH4dF--3G40uJXfXrBKMIO-N-mYSpGGQPZy2iFQyHIdAF12avDnDwG3tBrsUo0bFiumGKvmejQ7OcVyfrVuOjJhHtJkqvmyoGv6j1atJuUrFSFw39GQOd1vmYck80hoq0wcsXnpaYYGGNnrl9_9eRqbiDS_aWlAFYXeEeYGeUJ8M9XiZTR58QanY9zXqpgsE25NKd0lVYWvblIa-AQEfig");*/
myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36");
myHeaders.append("content-type", "application/json");
myHeaders.append("origin", "https://spaces.avayacloud.com");
myHeaders.append("sec-fetch-site", "same-site");
myHeaders.append("sec-fetch-mode", "cors");
myHeaders.append("sec-fetch-dest", "empty");
myHeaders.append("referer", "https://spaces.avayacloud.com/spaces/5f0c736c1e182a13e22d1295");
myHeaders.append("accept-language", "en-US,en;q=0.9");
var getspacelisturl =    "https://spacesapis.avayacloud.com/api/users/me/spaces";
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

var spacelist="";
var space="";
var optn=[];
var el = "";
select.innerHTML = "";

fetch(getspacelisturl, requestOptions)
  .then(response => response.json())
  .then(function(data) {
    console.log(data);
    for(let i = 0; i < data.data.length; i++){
	console.log(data.data[i].title);
	space = [data.data[i].title];
	spacelist = spacelist.concat(space);
	optn = data.data[i].title;
	el = document.createElement("option");
	el.textContent = optn;
	el.value = optn;
    select.appendChild(el);
}
/*document.getElementById('spacelist').innerHTML = spacelist;
document.getElementById('spacelistcontainer').innerHTML=spacelist;*/
})

  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }


  var select = document.getElementById("arr");


 function googleTranslate()
  {

	 var text =document.getElementById("CHATVALUE").value;
     var req = new XMLHttpRequest();
     var url = "";
   	 req.onreadystatechange = function() {
  	    if (req.readyState === 4) {
  	        var response = req.responseText;
  	        /*alert(response);*/
  	        sendMessage(response);
  	    }
  	};

  	url = "https://script.google.com/macros/s/AKfycbx3nKsKrpwhImMAQMahn8vIS8YRIAmPhsHXbW7Z1wLL1c_7xOge/exec?q="+text+"&target=en";
  	req.open('GET', url);
	req.send(null);

  }

function setSpace(spacevalue)  {

  if (spacevalue != null) {
    document.getElementById('SPACESID').value=spacevalue;
    myMessages();
      membersInSpace();
    
  }
}
