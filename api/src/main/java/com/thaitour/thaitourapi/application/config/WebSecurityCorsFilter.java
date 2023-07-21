package com.thaitour.thaitourapi.application.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
@WebFilter("/*")
@Slf4j
public class WebSecurityCorsFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletResponse res = (HttpServletResponse) response;

        res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
        res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type, Accept, x-requested-with, Cache-Control");

        if ("OPTIONS".equalsIgnoreCase(((HttpServletRequest) request).getMethod())) {
            res.setStatus(HttpServletResponse.SC_OK);
            res.setHeader("Access-Control-Allow-Origin", "*");
        } else {
            chain.doFilter(request, res);
        }

    }
    @Override
    public void destroy() {
    }
}
