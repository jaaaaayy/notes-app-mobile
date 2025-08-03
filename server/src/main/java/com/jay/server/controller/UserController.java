package com.jay.server.controller;

import com.jay.server.dto.UserDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {
    @GetMapping("/user")
    public ResponseEntity<UserDto> getUser(@AuthenticationPrincipal OAuth2User principal, OAuth2AuthenticationToken authToken) {
        String provider = authToken.getAuthorizedClientRegistrationId();

        String name = principal.getAttribute("name");
        String email = principal.getAttribute("email");
        String avatarUrl = switch (provider) {
            case "google" -> principal.getAttribute("picture");
            case "github" -> principal.getAttribute("avatar_url");
            default -> null;
        };

        UserDto user = new UserDto(name, email, avatarUrl);
        return ResponseEntity.ok(user);
    }
}
