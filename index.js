
function MyTime() {
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    // AM and PM set
    var AmPm= document.getElementById("sub");
    if (h>=12) {
        AmPm.innerHTML="PM";
    } else{
        AmPm.innerHTML="AM";
    }
    // 12 hours format
    if (h==0) {
        h=12;
    } else if (h>12) {
        h=h-12;
    } else{
        h=h;
    }
    // 0 attached with less than 10 number
    var hr = (h<10)? "0"+ h: h;
    var min = (m<10)? "0"+ m: m;
    var sec = (s<10)? "0"+ s: s;
    //Set time in inner HTML
    document.getElementById("hr").innerHTML = hr;
    document.getElementById("mnt").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    //Interval
   setInterval(MyTime, 1000);
}
MyTime();
//Date function
function MyDate() {
    var date= new Date();
    var dd = date.getDate();
    var mm = date.getMonth();
    var yy = date.getFullYear();
    // Month exicution with ternary oparator
    (mm==0) ? mm="January" : (mm==1) ? mm="February" :  (mm==2) ? mm="March" :  (mm==3) ? mm="April" :  (mm==4) ? mm="May" :  (mm==5) ? mm="June" :
    (mm==6) ? mm="July" : (mm==7) ? mm="August" : (mm==8) ? mm="September" : (mm==9) ? mm="October" : (mm==10) ? mm="November" : mm="December";

    //Set date in inner HTML
    document.getElementById("day").innerHTML = dd;
    document.getElementById("mnth").innerHTML = mm;
    document.getElementById("year").innerHTML = yy;
}
MyDate();