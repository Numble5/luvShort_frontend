package com.example.backend.domain.user;

import com.example.backend.domain.BaseEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity @Getter @NoArgsConstructor
public class User extends BaseEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idx;

    private String email;
    private String nickname;

    @Enumerated
    private UserType userType; // 각 사용자의 권한을 관리할 Enum 클래스

    @Embedded UserInfo userInfo;

}
