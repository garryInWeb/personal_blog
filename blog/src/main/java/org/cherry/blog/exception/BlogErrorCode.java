package org.cherry.blog.exception;

import org.cherry.blog.constant.ErrorCode;


/**
 * Created by zhengtengfei on 2019/3/19.
 */
public enum  BlogErrorCode implements ErrorCode{
    WRONG_DATA(601,"提交数据异常")
    ;

    private int status;
    private String message;

    private BlogErrorCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
    @Override
    public int getStatus() {
        return 0;
    }

    @Override
    public String getMessage() {
        return null;
    }
}
