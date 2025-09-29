package com.project1.smart_diary.controller;

import com.nimbusds.jose.JOSEException;
import com.project1.smart_diary.dto.LoginGoogleDTO;
import com.project1.smart_diary.dto.request.LoginRequest;
import com.project1.smart_diary.dto.request.RefreshTokenRequest;
import com.project1.smart_diary.dto.request.UserCreateRequest;
import com.project1.smart_diary.dto.response.AuthenticationResponse;
import com.project1.smart_diary.dto.response.UserResponse;
import com.project1.smart_diary.service.AuthService;
import com.project1.smart_diary.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.experimental.NonFinal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.text.ParseException;
import java.time.LocalDateTime;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserService userService;
    @Autowired
    private AuthService authService;
    @NonFinal
    @Value("${app.ngrok.fontend-url-public}")
    protected String Fontend_Url_public;

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody LoginRequest loginRequest) {
        return ResponseEntity.ok(authService.authenticate(loginRequest));
    }

    @PostMapping("/register")
    public ResponseEntity<UserResponse> register(@Valid @RequestBody UserCreateRequest userCreateRequest) {
        UserResponse userResponse = userService.createUser(userCreateRequest);
        return ResponseEntity.ok(userResponse);
    }


    @GetMapping("/login/google")
    public void loginGoogle(@AuthenticationPrincipal OAuth2User principal, HttpServletResponse response) throws IOException {
        Map<String, Object> attributes = principal.getAttributes();
        String email = (String) attributes.get("email");
        String name = (String) attributes.get("name");
        String picture = (String) attributes.get("picture");
        String sub = (String) attributes.get("sub");
        //
        LoginGoogleDTO loginGoogleDTO = new LoginGoogleDTO();
        loginGoogleDTO.setEmail(email);
        loginGoogleDTO.setFullName(name);
        loginGoogleDTO.setAvatarUrl(picture);
        loginGoogleDTO.setCreatedAt(LocalDateTime.now());
        loginGoogleDTO.setProviderId(sub);
        userService.createUserWithGoogle(loginGoogleDTO);


        AuthenticationResponse authResponse = authService.loginWithGoogle(loginGoogleDTO);
        String token = authResponse.getToken();
        String frontendUrl = Fontend_Url_public + "/gg-login-success?token=" + token;
        response.sendRedirect(frontendUrl);
    }

    @PostMapping("/refresh")
    public ResponseEntity<AuthenticationResponse> refreshToken(@Valid @RequestBody RefreshTokenRequest refreshTokenRequest) throws ParseException, JOSEException {
        var res = authService.refreshToken(refreshTokenRequest);
        return ResponseEntity.ok(res);
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request) {
        authService.logout(request);
        return ResponseEntity.ok("Logout successful");
    }
}
