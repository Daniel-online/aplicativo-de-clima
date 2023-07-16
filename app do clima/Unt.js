import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {

    const fetchWeatherData = async () => {
      try {
        const apiKey = 'YOUR_API_KEY';
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=your_location`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  if (!weatherData) {
    return (
      <View>
        <Text>Loading weather data...</Text>
      </View>
    );
  }

  const { location, current } = weatherData;

  return (
    <View>
      <Text>Location: {location.name}</Text>
      <Text>Temperature: {current.temp_c}°C</Text>
      <Text>Condition: {current.condition.text}</Text>
    </View>
  );
};

export default WeatherComponent;

