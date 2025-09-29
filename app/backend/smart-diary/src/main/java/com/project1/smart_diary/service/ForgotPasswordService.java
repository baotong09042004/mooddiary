package com.project1.smart_diary.service;


import com.project1.smart_diary.dto.request.ForgotPasswordRequest;
import com.project1.smart_diary.dto.request.ResetPasswordRequest;
import com.project1.smart_diary.entity.UserEntity;
import com.project1.smart_diary.exception.ApplicationException;
import com.project1.smart_diary.exception.ErrorCode;
import com.project1.smart_diary.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ForgotPasswordService {

    private final UserRepository userRepository;
    private final EmailService emailService;
    private final PasswordEncoder passwordEncoder;
    private final RedisService redisService;

    public void sendResetPasswordEmail(ForgotPasswordRequest request) {

        if (!userRepository.existsByEmail(request.getEmail())) {
            throw new ApplicationException(ErrorCode.EMAIL_NOT_FOUND);
        }


        String token = redisService.createResetToken(request.getEmail());


        emailService.sendResetPasswordEmail(request.getEmail(), token);
    }

    public void resetPassword(ResetPasswordRequest request) {

        if (!request.getNewPassword().equals(request.getConfirmPassword())) {
            throw new ApplicationException(ErrorCode.PASSWORD_MISMATCH);
        }

        String email = redisService.getEmailByToken(request.getToken());
        if (email == null) {
            throw new ApplicationException(ErrorCode.INVALID_RESET_TOKEN);
        }

        UserEntity user = userRepository.findByEmail(email);
        if (user == null) {
            throw new ApplicationException(ErrorCode.EMAIL_NOT_EXISTED);
        }

        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        userRepository.save(user);


        redisService.deleteToken(request.getToken());
    }
}
