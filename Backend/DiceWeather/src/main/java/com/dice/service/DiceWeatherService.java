package com.dice.service;

import org.springframework.http.ResponseEntity;

public interface DiceWeatherService {
	
		
		public ResponseEntity<String> getForecastSummaryByLocationName(String city);
		public ResponseEntity<String> getHourlyForecastByLocationName(String city);

	
}
