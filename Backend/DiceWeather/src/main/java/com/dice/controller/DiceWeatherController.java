package com.dice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dice.service.DiceWeatherService;
@RestController
@RequestMapping("/Location")
public class DiceWeatherController {
	@Autowired
	private DiceWeatherService weatherService;
	
	@GetMapping("/summary")
	public ResponseEntity<String> getForecastSummaryByLocationName(@RequestParam String city){
		return weatherService.getForecastSummaryByLocationName(city);
	}
	
	@GetMapping("/hourly")
	public ResponseEntity<String> getHourlyForecastByLocationName(@RequestParam String city){
		return weatherService.getHourlyForecastByLocationName(city);
	}
}
