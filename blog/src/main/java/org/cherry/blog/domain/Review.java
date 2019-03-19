package org.cherry.blog.domain;

import lombok.Data;

import java.time.LocalDateTime;

/**
 * Created by zhengtengfei on 2019/3/19.
 */
@Data
public class Review {
    private long id;
    private String reviewArticleID;
    private String reviewContent;
    private String reviewImg;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
    private Integer isDelete;
}
