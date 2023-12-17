package com.thaitour.thaitourapi.application.service;

import com.thaitour.thaitourapi.domain.dto.catalog.place.ReservationPayload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderService {
    @Autowired
    private JavaMailSender mailSender;

    public void sendSimpleEmail(ReservationPayload payload) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("daniel.jantulik@gmail.com");
        message.setTo("daniel.jantulik@etyka.cz");
        message.setText(payload.getText());
        message.setSubject(payload.getSubject());
        mailSender.send(message);
    }
}
