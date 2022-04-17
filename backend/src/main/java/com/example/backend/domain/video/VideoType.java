package com.example.backend.domain.video;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum VideoType {

    EMBED("유튜브영상업로드"),
    DIRECT("직접영상업로드");

    private final String value;

}
