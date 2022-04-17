package com.example.backend.domain.user;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter @RequiredArgsConstructor
public enum UserType {

    // 스프링 시큐리티에서는 권한 코드에 항상 ROLE_이 있어야함
    // 나중에 스프링 시큐리티 쓸 걸 대비해서 붙임
    GUEST("ROLE_NORMAL", "일반소비자"),
    USER("ROLE_ADMIN", "관리자");

    private final String key;
    private final String title;
}
