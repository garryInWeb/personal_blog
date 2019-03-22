package org.cherry.blog.domain;

import lombok.Data;

import java.time.LocalDateTime;

/**
 * Created by zhengtengfei on 2019/3/19.
 */
@Data
public class Article {
    private long id;
    private long articleTypeId;
    private String articleTitle;
    private String articleContent;
    private String articleInfo;
    private int articleCount;
    private boolean articleFrom;
    private String createBy;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
    private Integer isDelete;
}
