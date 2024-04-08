package com.dice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;
@OpenAPIDefinition(info = @Info(title = "REST API", version = "1.1"),
servers = {
		@Server(url = "/", description = "Default Server URL")
	    	}
)
@SpringBootApplication
public class DiceWeatherApplication {

	public static void main(String[] args) {
		SpringApplication.run(DiceWeatherApplication.class, args);
	}

}
