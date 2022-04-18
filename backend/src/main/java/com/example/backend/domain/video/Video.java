package com.example.backend.domain.video;

import com.example.backend.domain.BaseEntity;
import com.example.backend.domain.user.User;
import com.example.backend.domain.video.enums.VideoType;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.LinkedList;
import java.util.List;


@Getter
@NoArgsConstructor
@Entity
@Table
public class Video extends BaseEntity {

    @Id
    @Column(name = "video_idx")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idx;

    @Enumerated(EnumType.STRING)
    private VideoType videoType;

    private String title;
    private String content;
    private Long hits;
    private String thumbnailUrl;
    private String videoUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_idx", nullable = false)
    private User uploader;

    @OneToMany(mappedBy = "video")
    private List<VideoCategory> Categories = new LinkedList<>(); // 해당 영상이 속한 카테고리들(여러개가능)

}
