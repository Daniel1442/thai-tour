package com.thaitour.thaitourapi.application.config;


import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.csrf.CsrfFilter;

@Configuration
@AllArgsConstructor
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final WebSecurityCorsFilter webSecurityCorsFilter;

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {


        httpSecurity
                .csrf()
                .disable()
                .authorizeRequests()
                .antMatchers("/")
                .authenticated()
                .anyRequest()
                .permitAll()
                .and()
                .addFilterAfter(webSecurityCorsFilter, CsrfFilter.class).cors();
    }
}
