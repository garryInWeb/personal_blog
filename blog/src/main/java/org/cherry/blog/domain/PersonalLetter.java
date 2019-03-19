package org.cherry.blog.domain;

import lombok.Data;

import java.time.LocalDateTime;

/**
 * Created by zhengtengfei on 2019/3/19.
 */
@Data
public class PersonalLetter {
    private long id;
    private String letter_content;
    private String ipAddress;
    private String reviewImg;
    private int status;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
    private Integer isDelete;

}
