/* Definition */

var day;
var day2;
var day3;


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }


async function showPosition(position) {
var defaultt= await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`)
var defaulttt=await defaultt.json();
console.log(defaulttt.city)
getcurrent2(defaulttt.city)

}


var cityname=document.getElementById("location").value;


/* Default location */
async function getcurrent2(x){
    var cityname=document.getElementById("location").value;


     /*  Fetch the Data (APi) */
    var country= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4f004be0292b47f2a86141247230508&q=${x}&days=7`);
    var country2= await country.json();
    console.log(country2)


    /* Find the day */
    Day(country2.current.is_day);
    Day2(country2.current.is_day+1);
    Day3(country2.current.is_day+2);
    diplay(country2,x);

}


/* Search (location) */

async function getcurrent(){
    var cityname=document.getElementById("location").value;



     /*  Fetch the Data (APi) */
    var country= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4f004be0292b47f2a86141247230508&q=${cityname}&days=7`);
    var country2= await country.json();

    /* Find the day */
    Day(country2.current.is_day);
    Day2(country2.current.is_day+1);
    Day3(country2.current.is_day+2);
    diplay(country2,cityname);

}





/* Display function */
function diplay(country2,cityname){


    document.getElementById("row").innerHTML=`
    <div class="col-lg-4">
    <div class="card border-0 rounded-0">
      <div class="card-header border-0">
        <div >
          <span style="color: gray;" >${day}</span>
          <span style="color: gray;" class="float-end">${country2.current.last_updated} </span>
        </div>
      </div>
      <div class="card-body">
        
    <div>
      <p style="color: #bfc1c8;" class="fs-5">${cityname}</p>
      <div style="color: white;font-size: 90px;">
        <span>${country2.current.temp_c}<sup>o</sup> C</span>
        <img src=${country2.forecast.forecastday[0].day.condition} alt="sun" width="50" id="day1"/>
      </div>
      <p style="color: #009ad8;">${country2.current.condition.text}</p>
      <div class="icons pb-3" style="color: #bfc1c8;">
        <span>
          <img src="images/icon-umberella@2x.png" alt="umberella" width="21"/>
          20%
        </span>
        <span class="ps-4">
          <img src="images/icon-wind@2x.png" alt="wind" width="21"/>
          ${country2.current.wind_kph} km/h
        </span>
        <span class="ps-4">
          <img src="images/icon-compass@2x.png" alt="compass" width="21"/>
          ${country2.current.wind_dir}
        </span>
  
      </div>
    </div>
      </div>
    </div>
  </div>
  
  
  <div class="col-lg-4">
  <div class="card border-0 rounded-0" style="background-color: #262936;">
    <div class="card-header border-0" style="background-color: rgb(30, 32, 43);">
      <div class="text-center">
        <span style="color: gray;" >${day2}</span>
      </div>
    </div>
    <div class="card-body">
      
  <div class="text-center pt-5 ">
    <img src=${country2.forecast.forecastday[1].day.condition.icon} alt="sun" width="30" class="pb-4" />
    <div style="color: white;font-size: 30px;" class="pb-2">
      <span class="fw-bold">${country2.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup> C</span>
    </div>
    <span style="color: #bfc1c8;" >${country2.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></span>
  
    <p style="color: #009ad8;" class="pt-3 pb-4">${country2.forecast.forecastday[1].day.condition.text}</p>
   
  </div>
    </div>
  </div>
  </div>
  
  
  <div class="col-lg-4">
  <div class="card border-0 rounded-0">
    <div class="card-header border-0">
      <div class="text-center">
        <span style="color: gray;" >${day3}</span>
      </div>
    </div>
    <div class="card-body">
      
  <div class="text-center pt-5 ">
    <img src=${country2.forecast.forecastday[2].day.condition.icon} alt="sun" width="30" class="pb-4" />
    <div style="color: white;font-size: 30px;" class="pb-2">
      <span class="fw-bold">${country2.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup> C</span>
    </div>
    <span style="color: #bfc1c8;" >${country2.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></span>
  
    <p style="color: #009ad8;" class="pt-3 pb-4">${country2.forecast.forecastday[2].day.condition.text}</p>
   
  </div>
    </div>
  </div>
  
  
  
  
  
  
  
  
  
  
  
  
  </div>
  
  
  
    
    
    `
     
  
  
  
  


}

/* End of Display function */





/* Find the day function */
function Day(x){
   
    if(x===0){
        day="Saturday";

    }else if(x===1){
        day="Sunday";
    }
    else if(x===2){
        day="Monday";
    }
    else if(x===3){
        day="Tuesday";
    }
    else if(x===4){
        day="Wednesday";
    }
    else if(x===5){
        day="Thursday";
    }
    else if(x===6){
        day="friday";
    }

}

 function Day2(x){
    if(x===0){
        day2="Saturday";

    }else if(x===1){
        day2="Sunday";
    }
    else if(x===2){
        day2="Monday";
    }
    else if(x===3){
        day2="Tuesday";
    }
    else if(x===4){
        day2="Wednesday";
    }
    else if(x===5){
        day2="Thursday";
    }
    else if(x===6){
        day2="friday";
    }

 }

 function Day3(x){
    if(x===0){
        day3="Saturday";

    }else if(x===1){
        day3="Sunday";
    }
    else if(x===2){
        day3="Monday";
    }
    else if(x===3){
        day3="Tuesday";
    }
    else if(x===4){
        day3="Wednesday";
    }
    else if(x===5){
        day3="Thursday";
    }
    else if(x===6){
        day3="friday";
    }

 }


