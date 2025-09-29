package com.project1.smart_diary.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${app.ngrok.fontend-url-public}")
    private String Fontend_Url_public;

    @Value("${spring.mail.username}")
    private String fromEmail;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendResetPasswordEmail(String email, String token) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(fromEmail);
            message.setTo(email);
            message.setSubject("Đặt lại mật khẩu - Smart Diary");

            String resetUrl = Fontend_Url_public + "/reset-password?token=" + token;
            String emailBody = String.format("""
            Chào bạn ,
            
            Bạn đã yêu cầu đặt lại mật khẩu cho Smart Diary.
            
            Vui lòng nhấp vào liên kết bên dưới để đặt lại mật khẩu của bạn :
            %s                   
            
            Liên kết này sẽ hết hạn trong 10 phút.
            
            
            
            Nếu bạn không yêu cầu đặt lại mật khẩu này, xin vui lòng bỏ qua email này.
            
            Trân trọng,
            Smart Diary Team
            """, resetUrl);

            message.setText(emailBody);

            mailSender.send(message);
            log.info("Email đặt lại mật khẩu đã được gửi đến: {}", email);

        } catch (Exception e) {
            log.error("Không thể gửi email đặt lại mật khẩu đến: {}", email, e);
            throw new RuntimeException("Gửi email không thành công.");
        }
    }
}
