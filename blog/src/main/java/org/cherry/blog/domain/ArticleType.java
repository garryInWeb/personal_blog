package org.cherry.blog.domain;

import lombok.Data;

import java.time.LocalDateTime;

/**
 * Created by zhengtengfei on 2019/3/19.
 */
@Data
public class ArticleType {
    private long id;
    private String typeName;
    private String articleTypeInfo;
    private String createBy;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
    private Integer isDelete;

}
