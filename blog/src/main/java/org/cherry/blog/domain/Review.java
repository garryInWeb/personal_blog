package org.cherry.blog.domain;

import lombok.Data;

import java.time.LocalDateTime;

/**
 * Created by zhengtengfei on 2019/3/19.
 */
@Data
public class Review {
    private long id;
    private long reviewArticleID;
    private String reviewContent;
    private String reviewImg;
    private String ipAddress;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
    private Integer isDelete;
}
