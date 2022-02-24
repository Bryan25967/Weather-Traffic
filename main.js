// code for CORS issues
//  https://accesscontrolalloworiginall.herokuapp.com/

// const weatherUrl = `https://accesscontrolalloworiginall.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?&units=imperial&zip=${userInput}&appid=${weatherApi}`;
// const roadConditionsUrl = `https://accesscontrolalloworiginall.herokuapp.com/https://roads.dot.ca.gov/roadinfo/${roadConditions}`;
// const mapquest = `http://www.mapquestapi.com/traffic/v2/incidents?key=neAaErZ37s3y4rJn4hznLv58jdVkI9ag&boundingBox=${lat1},${lon1},${lat2},${lon2}&filters=construction,incidents,congestion`;

const weatherApi = 'f9e1684585f31f3ee4a8b4b9f3395a92';

const mainArticleContainer = document.querySelector('#main');
const infoArticleContainer = document.querySelector('#weatherInfo');
const secondaryArticleContainer = document.querySelector('#secondary');
const imagesArticleContainer = document.querySelector('#weatherImages')

let source1Button = document.querySelector('section button');
let source2Button = document.querySelector ('section a');
let source3Button = document.querySelector('section button');

source2Button.addEventListener("click", refreshPage);

/* --------below code make the "enter button" send the request same as "click" then removes the previous text in search feild ---------------*/

const searchSection1 = document.querySelector("#text1");

const searchSection2 = document.querySelector("#text2");

const searchSection3 = document.querySelector("#text3");



searchSection1.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    searchBarZip(event);
searchSection1.value = "";
  }else(source1Button.addEventListener("click", searchBarZip)) 
});

searchSection2.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    searchBarCity(event);
searchSection2.value = "";
  }else(source3Button.addEventListener("click", searchBarCity))
});

searchSection3.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    searchBarCity(event);
searchSection3.value = "";
  }else(source3Button.addEventListener("click", searchBarCity))
});



/* ------------ below uses zip code to find weather api data and uses coord to create boundry box for mapquest traffic api-------------- */

function searchBarZip(userInput) {
  var str = document.getElementById("text1").value;
  
 const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?&units=imperial&zip=${str}&appid=${weatherApi}`;
  
 mainArticleContainer.innerHTML = "";
  
  fetch(weatherUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data)

    let noZip = data.message
    if(noZip > '0') {
      let newArticleNode = document.createElement('div')
      newArticleNode.innerHTML =  `<article class="noIssues">
           <section class="noIssuesContent">
          <a href="#" style="color: black; text-decoration: none"><h2>Oops!... ${noZip}, please try again.</h2></a>
      </section>
      </article>`
      mainArticleContainer.append(newArticleNode);
      console.log(newArticleNode);
    };
  
    /* this portion rounds temp and wind speed*/
    let clouds= (data.weather[0].description);
    let dataTemp= Math.floor(Math.round(data.main.temp));
    let windSpeed= Math.floor(Math.round(data.wind.speed));
    let time= (data.dt);
    let sunrise= (data.sys.sunrise); 
    let sunset=  (data.sys.sunset);

  
  if(time > sunrise && time < sunset) {
    if (clouds === "clear sky") {
      let cloudArticleNode = document.createElement('div')
      cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/clearday.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
      }} else if(time > sunrise && time < sunset) {
      let cloudArticleNode = document.createElement('div')
      cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/day.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }

     if(time > sunset || time < sunrise){
      if(clouds === "clear sky") {
       let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/clearnight.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }} else  if(time > sunset || time < sunrise) {  
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/night.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }   

    if(clouds === "clouds" ) {
            let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/clouds.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }

     if(clouds === "scattered clouds") {
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
         <section class= "image">
           <img src="./images/clouds.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }

    if(clouds === "overcast clouds") {
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/clouds.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }

     if(clouds === "few clouds") {
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/clouds.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }

     if(clouds === "broken clouds") {
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/clouds.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }

     if(clouds === "snow") {
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/snowfall.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }

     if(clouds === "moderate snow") {
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/snowfall.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }

     if(clouds === "light snow") {
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/snowfall.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }

     if(clouds === "heavy snow") {
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/snowfall.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }

     if(clouds === "light rain") {
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/rain.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }

     if(clouds === "heavy rain") {
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/rain.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }

     if(clouds === "moderate rain") {
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/rain.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }

     if(clouds === "rain") {
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/rain.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }

    if(dataTemp > 80 ) {
      let tempArticleNode = document.createElement('div')
     tempArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/hot.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(tempArticleNode);
        console.log(tempArticleNode);
     }

     if(dataTemp < 40 ) {
      let tempArticleNode = document.createElement('div')
     tempArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
         <img src="./images/coldtemp.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(tempArticleNode);
        console.log(tempArticleNode);
     }
  
    if(windSpeed > 5 ) {
      let windArticleNode = document.createElement('div')
     windArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/wind.png" alt="" width="50" height= "50" />
          </section>
      </article>`
      imagesArticleContainer.append(windArticleNode);
        console.log(windArticleNode);
     }
     
   
   let newArticleNode = document.createElement('div');
      newArticleNode.innerHTML =  `<article id= "weatherInformation" class="weatherInformation">  
      <section class="weatherContentInformation">
          <a href="#"><h3 style="color: red">In ${data.name}, the Tempature is ${dataTemp}F, with a windspeed of ${windSpeed}mph and ${data.weather[0].description}.</h3></a>
      </section>
      </article>
      </section>`
      infoArticleContainer.append(newArticleNode);
        console.log(newArticleNode);
   
    /*lat1 top , lon1 left , lat2 bottom, lon2 right */
  
    const lon1 = (data.coord.lon - .25);
    const lat1 = (data.coord.lat - .25);
    const lon2 = (lon1 + .5);
    const lat2 = (lat1 - .5);

    const mapquest = `https://www.mapquestapi.com/traffic/v2/incidents?key=neAaErZ37s3y4rJn4hznLv58jdVkI9ag&boundingBox=${lat1},${lon1},${lat2},${lon2}&filters=incidents,congestion`;
  
    fetch(mapquest)
      .then(response => response.json())
      .then(result => {
          
        /* below has a quick message show up if there are no incidents reported for the area. */
    
        let incidents = result.incidents 
          if(incidents < '0') {
                   
          let newArticleNode = document.createElement('div');
           
          newArticleNode.innerHTML =  `<article id= "noIssues" class="noIssues">
               <section class="noIssuesContent">
              <a href="#" style="color: black"><h2>No traffic... drive fast and make some :)</h2></a>
          </section>
          </article>`
          secondaryArticleContainer.append(newArticleNode);
          console.log(newArticleNode);
            };

        incidents.sort((a, b) => (a['severity'] < b['severity']) ? 1 : -1);
        
        incidents.forEach((incidents) => {  
            severityOfincidents = incidents.severity;
            description = incidents.fullDesc;
          
          let newArticleNode = document.createElement('div')
        newArticleNode.innerHTML =  `<article id= "noIssues" class="noIssues">
            <section class="noIssuesContent">
            <a href="#" style="color: black"><h4>${description}</h4></a>
            </section>
            </article>`
            secondaryArticleContainer.append(newArticleNode);
            console.log(newArticleNode);
       })
    })
  })
}

/*----------- this function links "h1 title" as a button and refreshes back to defualt page with a clear console ------------------------*/

function refreshPage() {
  window.location.reload()
}



/* ----------------this portion below allows/  grabs city and state for api data ------------------------------------------------------*/

function searchBarCity(userInput) {
  var str1 = document.getElementById("text2").value;
  var str2 = document.getElementById("text3").value;
  
  const weatherUrlCity = `http://api.openweathermap.org/data/2.5/weather?units=imperial&q=${str1},${str2},US&appid=${weatherApi}`;
 
  mainArticleContainer.innerHTML = "";
  
  fetch(weatherUrlCity)
  .then(response => response.json())
  .then(data => {
  

    let noInput = data.message
    if(noInput > '0') {
      let newArticleNode = document.createElement('div')
       
      newArticleNode.innerHTML =  `<article class="noIssues">
           <section class="noIssuesContent">
          <a href="#" style="color: black; text-decoration: none"><h2>Oops!... ${noInput}, please try again.</h2></a>
      </section>
      </article>`
      mainArticleContainer.append(newArticleNode);
      console.log(newArticleNode);

    };
  
    /* this portion rounds temp and wind speed*/
    let clouds= (data.weather[0].description)
    let dataTemp= Math.floor(Math.round(data.main.temp));
    let windSpeed= Math.floor(Math.round(data.wind.speed))
    let time= (data.dt);
    let sunrise= (data.sys.sunrise); 
    let sunset=  (data.sys.sunset);
    console.log(data)
    
    if(time > sunrise && time < sunset) {
      if (clouds === "clear sky") {
        let cloudArticleNode = document.createElement('div')
        cloudArticleNode.innerHTML =  `<article class="weather">  
            <section class= "image">
            <img src="./images/clearday.png" alt="" width="50" height= "50"/>
            </section>
        </article>`
        imagesArticleContainer.append(cloudArticleNode);
          console.log(cloudArticleNode);
        }} else if(time > sunrise && time < sunset) {
        let cloudArticleNode = document.createElement('div')
        cloudArticleNode.innerHTML =  `<article class="weather">  
            <section class= "image">
            <img src="./images/day.png" alt="" width="50" height= "50"/>
            </section>
        </article>`
        imagesArticleContainer.append(cloudArticleNode);
          console.log(cloudArticleNode);
       }
  
       if(time > sunset || time < sunrise){
        if(clouds === "clear sky") {
         let cloudArticleNode = document.createElement('div')
       cloudArticleNode.innerHTML =  `<article class="weather">  
            <section class= "image">
            <img src="./images/clearnight.png" alt="" width="50" height= "50"/>
            </section>
        </article>`
        imagesArticleContainer.append(cloudArticleNode);
          console.log(cloudArticleNode);
       }} else  if(time > sunset || time < sunrise) {  
        let cloudArticleNode = document.createElement('div')
       cloudArticleNode.innerHTML =  `<article class="weather">  
            <section class= "image">
            <img src="./images/night.png" alt="" width="50" height= "50"/>
            </section>
        </article>`
        imagesArticleContainer.append(cloudArticleNode);
          console.log(cloudArticleNode);
       }   
  

    if(clouds === "clouds" ) {
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/clouds.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }

     if(clouds === "scattered clouds") {
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<table><tr><article class="weather">  
          <section class= "image">
          <img src="./images/clouds.png" alt="" width="50" height= "50"/>
          </section>
      </article></tr></table>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }

    if(clouds === "overcast clouds") {
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/clouds.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }

     if(clouds === "few clouds") {
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/clouds.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }

     if(clouds === "broken clouds") {
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/clouds.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     } 
     
     if(clouds === "snow") {
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/snowfall.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }

     if(clouds === "moderate snow") {
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/snowfall.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }


     if(clouds === "light snow") {
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/snowfall.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }

     if(clouds === "heavy snow") {
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/snowfall.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }

     if(clouds === "light rain") {
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/rain.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }

     if(clouds === "heavy rain") {
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/rain.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }

     if(clouds === "moderate rain") {
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/rain.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }

     if(clouds === "rain") {
      let cloudArticleNode = document.createElement('div')
     cloudArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/rain.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(cloudArticleNode);
        console.log(cloudArticleNode);
     }

    if(dataTemp > 80 ) {
      let tempArticleNode = document.createElement('div')
     tempArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/hot.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(tempArticleNode);
        console.log(tempArticleNode);
     }

     if(dataTemp < 40 ) {
      let tempArticleNode = document.createElement('div')
     tempArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/coldtemp.png" alt="" width="50" height= "50"/>
          </section>
      </article>`
      imagesArticleContainer.append(tempArticleNode);
        console.log(tempArticleNode);
     }
    
    if(windSpeed > 6 ) {
      let windArticleNode = document.createElement('div')
     windArticleNode.innerHTML =  `<article class="weather">  
          <section class= "image">
          <img src="./images/wind.png" alt="" width="50" height= "50" />
          </section>
      </article>`
      imagesArticleContainer.append(windArticleNode);
        console.log(windArticleNode);
     }
      
     let newArticleNode = document.createElement('div')
     newArticleNode.innerHTML =  `<article class="weatherInformation">  
     <section class="weatherContentInformation">
         <a href="#"><h3 style="color: red">In ${data.name}, the Tempature is ${dataTemp}F, with a windspeed of ${windSpeed}mph and ${data.weather[0].description}.</h3></a>
     </section>
     </article>`
     infoArticleContainer.append(newArticleNode);
       console.log(newArticleNode);
   
    /*lat1 top , lon1 left , lat2 bottom, lon2 right */
  
    const lon1 = (data.coord.lon - .25);
    const lat1 = (data.coord.lat - .25);
    const lon2 = (lon1 + .5);
    const lat2 = (lat1 - .5);

    const mapquest = `https://www.mapquestapi.com/traffic/v2/incidents?key=neAaErZ37s3y4rJn4hznLv58jdVkI9ag&boundingBox=${lat1},${lon1},${lat2},${lon2}&filters=incidents,congestion`;
  
    fetch(mapquest)
      .then(response => response.json())
      .then(result => {
          console.log(result);
        /* below has a quick message show up if there are no incidents reported for the area. */
    
        let incidents = result.incidents 
          if(incidents < '0') {
                   
          let newArticleNode = document.createElement('div')
       
          newArticleNode.innerHTML =  `<article class="noIssues">
               <section class="noIssuesContent">
              <a href="#" style="color: black"><h2>No traffic... drive fast and make some :)</h2></a>
          </section>
          </article>`
          secondaryArticleContainer.append(newArticleNode);
          console.log(newArticleNode);
            };

        incidents.sort((a, b) => (a['severity'] < b['severity']) ? 1 : -1);
        
        incidents.forEach((incidents) => {  
                          
            severityOfincidents = incidents.severity;
            description = incidents.fullDesc;
          
          let newArticleNode = document.createElement('div')
        newArticleNode.innerHTML =  `<article class="noIssues">
            <section class="noIssuesContent">
            <a href="#" style="color: black"><h4>${description}</h4></a>
            </section>
            </article>`
            secondaryArticleContainer.append(newArticleNode);
            console.log(newArticleNode);
       })
    })
   })
}


/*--------------- older code from cali DOT might still use-------------------------------------- */   

  // var str2 = document.getElementById("text2").value;
  // const roadConditionsUrl = `https://accesscontrolalloworiginall.herokuapp.com/https://roads.dot.ca.gov/roadinfo/${str2}`;
  // loaderDiv.classList.remove("hidden");
  // mainArticleContainer.innerHTML = "";


  // fetch(roadConditionsUrl)
  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));


  // let newArticleNode = document.createElement('div')
  // console.log(newArticleNode);