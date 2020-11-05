const apiKey = "ecbc293668d0be3b2c5c155b191e46ad";

export const getWeatherByLocation = (location) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
  );
};
