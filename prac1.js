<!Doctype html>
<html>
<head>
<meta charset="utf-8">
<title> Javascript current day and time <?title>
</head>
<body>  </body>
</html>

var today=new Date();
var day=today.getDay();
var daylist=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log("Today is:"+daylist[day]+".");
var hours=today.getHours();
var minute+today.getMinutes();
var second=taoday.getSecongds();
var prepand=(hour>=12)?"PM":"AM";
hour=(hour>=12)? hours-12:hour;
if (hour===0 && prepand==='PM')
{
if (minute===0 && second===0)
{
hours=12;
prepand='noon';
}
else
{
hour=12;
prepand='PM';
}
}
if(hour===0 && prepand==='AM')
{
if(minute===0 && second===00)
{
hour=12;
prepand='Midnight';
}
else
{
hour=12;
prepand='AM';
}
}
console.log("Current time:"+hour+prepand+":"+minute+":"=+second);
