package org.cherry.blog.domain;

import lombok.Data;

import java.time.LocalDateTime;

/**
 * Created by zhengtengfei on 2019/3/15.
 */
@Data
public class User{
    private long id;
    private String userName;
    private String userPwd;
    private String nickName;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
    private Integer isDelete;
}
