setInterval(()=> {
    d = new Date();
    hrs = d.getHours();
    mins = d.getMinutes();
    sec = d.getSeconds();
    hrot = 30*hrs + mins/2;
    mrot = 6*mins;
    srot = 6*sec;
    hour.style.transform=`rotate(${hrot}deg)`;
    minute.style.transform=`rotate(${mrot}deg)`;
    second.style.transform=`rotate(${srot}deg)`;
},1000);