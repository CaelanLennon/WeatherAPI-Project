const url =`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`;
const lat =`51.507351`;
const lon =`-0.127758`;
const APIKey =`9868a05f51bc962072d8220918dad9e2`; 

async function getWeather() {
    try{
        const response = await fetch(url)

        if(!response.ok){
            throw new Error(" :( Could not fetch the weather! ")
        }

        const result = await response.json();

        console.log(result);
    }
    catch(error){
        console.error("Error:",error);
    }
}

getWeather();

//DONT PUSH CODE TILL API KEY HIDDEN

//Next steps: Hide API Key, Update Boxes