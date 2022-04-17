package com.example.backend.domain.video;

import com.example.backend.domain.BaseEntity;
import com.example.backend.domain.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@NoArgsConstructor
@Entity
@Table
public class Video extends BaseEntity {

    @Id
    @Column(name = "video_idx")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idx;

    private String title;
    private String content;
    private Long hits;
    private String thumbnailUrl;
    private String videoUrl;

}
