package com.nuridamteo.backend.configs.jwt;

import java.nio.charset.StandardCharsets;
import java.util.Date;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;

@Component
public class JWToken {
    private final SecretKey secretKey;

    public JWToken(@Value("${jwt.secret}") String secret) {
        this.secretKey = new SecretKeySpec(
                secret.getBytes(StandardCharsets.UTF_8),
                Jwts.SIG.HS256.key().build().getAlgorithm());
    }

    public String createToken(Long userId, String email) {
        Date now = new Date();

        return Jwts.builder()
                .claim("user_id", userId)
                .claim("user_email", email)
                .issuedAt(now)
                .signWith(secretKey)
                .compact();
    }

    public String getEmail(String token) {
        return Jwts.parser()
                .verifyWith(secretKey)
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .get("user_email", String.class);
    }

    public Long getUserId(String token) {
        return Jwts.parser()
                .verifyWith(secretKey)
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .get("user_id", Long.class);
    }

    public boolean isExpired(String token) {
        Date exp = Jwts.parser()
                .verifyWith(secretKey)
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .getExpiration();

        return exp.before(new Date());
    }
}