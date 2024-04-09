# DiceWeatherApp

# Weather Forecast API with User Registration

## Description

This project is a simple Spring Boot application that provides APIs for user registration and weather forecast retrieval. Users can register with their name, email, and password, mobile number then after he can get weather forecasts for specific locations.

## How can you get data
1. You to clone this repository to your any local folder.
2. Than take from this backend folder in your any IDE (in that you runs your java like project).
3. Than after you have to run this application on localhost:8080
4. Click on (https://6614f5b83fbea77e9d0bdb81--tubular-duckanoo-0ae1e4.netlify.app/) 
5. First You have Signup and than you will redirect to our login page that you have to login.
6. After all you are at home screen. Than you can fetch data based on city name.

## Features

1. **User Registration**: Users can register by providing their name, email, mobile_number and password.
2. **User Authentication**: After registration, users can log by providing email and password.
3. **Weather Forecast Retrieval**: Users can retrieve weather forecasts for specific locations.

## Technologies Used

- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- RESTful APIs
- OpenWeatherMap API
- Html
- CSS
- JS


## Usage

1. **User Registration**:
- Register Through form.
  
2. **User Login**:
- Login by providing email and password.
   

3. **Weather Forecast Retrieval**:
   - Endpoints:
     - `GET /Location/summary?city={city}`
     - `GET /Location/hourly?city={city}`
   - Parameters: `city` - The name of the city for which weather forecast is requested.
   - Response: Returns weather forecast data for the specified location.

## Contact

For any inquiries or issues, please contact rakeshrauniyara1234@gmail.com.
