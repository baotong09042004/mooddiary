package com.project1.smart_diary.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoginRequest {
    @NotBlank(message = "Username not null")
    @Email(message = "Email is not in correct format")
    private String email;
    @NotBlank(message = "Password not null")
    private String password;

}
