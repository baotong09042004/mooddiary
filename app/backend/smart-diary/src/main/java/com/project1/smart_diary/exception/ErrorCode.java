package com.project1.smart_diary.exception;


import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;

@Getter
public enum ErrorCode {
    UNCATEGORIZEO_EXCEPTION(9999, "uncategorized error", HttpStatus.INTERNAL_SERVER_ERROR),
    INVALID_KEY(1001, "Uncategorized error", HttpStatus.BAD_REQUEST),
    USERNAME_INVALID(1003, "username is invalid", HttpStatus.BAD_REQUEST),
    PASSWORD_INVALID(1004, "password is invalid", HttpStatus.BAD_REQUEST),
    UNAUTHENTICATED(1006, "unauthenticated", HttpStatus.UNAUTHORIZED),
    UNAUTHORIZED(1007, "you to not add permission", HttpStatus.FORBIDDEN),
    USER_NOT_FOUND(2001, "User not found", HttpStatus.NOT_FOUND),
    EMAIL_AND_PASSWORD_NOT_EXISTED(1005, "Email và mật khẩu không chính xác", HttpStatus.NOT_FOUND),
    EMAIL_EXISTED(1002, "Email đã tồn tại", HttpStatus.BAD_REQUEST),
    EMAIL_NOT_EXISTED(1005, "Email không chính xác", HttpStatus.NOT_FOUND),
    PASSWORD_NOT_EXISTED(1005, "Mật khẩu không chính xác", HttpStatus.NOT_FOUND),
    EMAIL_NOT_FOUND(1006, "Email không tồn tại", HttpStatus.NOT_FOUND),
    PASSWORD_MISMATCH(1009, "Mật khẩu và xác nhận mật khẩu không khớp.", HttpStatus.BAD_REQUEST),
    INVALID_RESET_TOKEN(1008, "Mã đặt lại không hợp lệ hoặc đã hết hạn.", HttpStatus.BAD_REQUEST),
    ;

    ErrorCode(int code, String message, HttpStatusCode httpStatusCode) {
        this.message = message;
        this.code = code;
        this.httpStatusCode = httpStatusCode;
    }

    private int code;
    private String message;
    private HttpStatusCode httpStatusCode;

}