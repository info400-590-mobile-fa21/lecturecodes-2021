  const API_KEY = "01db2ead9a994354bfbb6adaff45411c"

  export const getForWeather = async(cityname)=>{
    const response = await fetch("https://api.weatherbit.io/v2.0/forecast/daily?units=i&city=" + cityname + "&key=" + API_KEY);
    const result = await response.json();

    console.log(result)
    return result
  }

  export const getWeather = async(cityname)=>{
    const response = await fetch("https://api.weatherbit.io/v2.0/current?city=" + cityname + "&key=" + API_KEY + "&units=i");
    const result = await response.json();

    return result
  }