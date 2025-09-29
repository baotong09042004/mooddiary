package com.project1.smart_diary.controller;

import com.project1.smart_diary.dto.request.ForgotPasswordRequest;
import com.project1.smart_diary.dto.request.ResetPasswordRequest;
import com.project1.smart_diary.service.ForgotPasswordService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class ForgotPasswordController {

    private final ForgotPasswordService forgotPasswordService;

    @PostMapping("/forgot-password")
    public ResponseEntity<Map<String, String>> forgotPassword(@Valid @RequestBody ForgotPasswordRequest request) {
        forgotPasswordService.sendResetPasswordEmail(request);

        return ResponseEntity.ok(Map.of(
                "message", "Nếu email tồn tại, một liên kết đặt lại mật khẩu đã được gửi."
        ));
    }

    @PostMapping("/reset-password")
    public ResponseEntity<Map<String, String>> resetPassword(@Valid @RequestBody ResetPasswordRequest request) {
        forgotPasswordService.resetPassword(request);

        return ResponseEntity.ok(Map.of(
                "message", "Mật khẩu đã được đặt lại thành công."
        ));
    }
}
