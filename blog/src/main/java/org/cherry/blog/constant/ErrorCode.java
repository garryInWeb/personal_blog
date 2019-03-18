package org.cherry.blog.constant;

/**
 * Created by zhengtengfei on 2019/3/18.
 */
public interface ErrorCode {
    int MIN_BUSINESS_ERROR_STATUS = 600;
    int MAX_BUSINESS_ERROR_STATUS = 999;

    default boolean isBusinessStatus(int httpStatus) {
        return httpStatus >= 600 && httpStatus <= 999;
    }

    int getStatus();

    String getMessage();
}
