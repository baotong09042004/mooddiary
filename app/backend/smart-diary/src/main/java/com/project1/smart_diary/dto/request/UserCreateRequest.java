package com.project1.smart_diary.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserCreateRequest {

    @NotBlank(message = "Email not null")
    @Email(message = "Email is not in correct format")
    private String email;
    @NotBlank(message = "Password not null")
    private String password;
    @NotBlank(message = "Fullname not null")
    private String fullname;
}
