
// location formatting 
function formatLocation(locationData) {
  return {
    formatted_query: locationData[0].display_name,
    latitude: locationData[0].lat,
    longitude: locationData[0].lon,
  };
}

function mungeWeather(weatherData) {
  const formattedResponse = weatherData.data.map(item => {
    return {
      forecast: item.weather.description,
      time: new Date(item.ts * 1000).toDateString(),
    };
  });

  const response = formattedResponse.slice(0, 7);
  return response;
}

module.exports = { formatLocation, mungeWeather };