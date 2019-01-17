package com.example.Configs;


import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelsMapping {

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }

}
