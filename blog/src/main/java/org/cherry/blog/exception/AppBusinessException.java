package org.cherry.blog.exception;

import org.cherry.blog.constant.ErrorCode;

/**
 * Created by zhengtengfei on 2019/3/18.
 */
public class AppBusinessException extends BaseException {

    public static final ErrorCode DEFAULT_CODE;
    private int httpStatus;

    private AppBusinessException(int httpStatus, String message) {
        super(message);
        this.httpStatus = DEFAULT_CODE.getStatus();
        this.httpStatus = httpStatus;
    }

    /** @deprecated */
    @Deprecated
    public AppBusinessException(String message) {
        super(message);
        this.httpStatus = DEFAULT_CODE.getStatus();
    }

    public AppBusinessException(ErrorCode errorCode, String message) {
        this(errorCode.getStatus(), message);
    }

    public AppBusinessException(ErrorCode errorCode) {
        this(errorCode, errorCode.getMessage());
    }

    public int getHttpStatus() {
        return this.httpStatus;
    }

    static {
        DEFAULT_CODE = CommonErrorCode.INTERNAL_ERROR;
    }
}
