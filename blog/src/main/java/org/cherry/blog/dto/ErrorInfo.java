package org.cherry.blog.dto;

/**
 * Created by zhengtengfei on 2019/3/18.
 */
public class ErrorInfo {
    private String message;
    private String requestUri;
    private int status;

    public ErrorInfo(String message, String requestUri, int status) {
        this.message = message;
        this.requestUri = requestUri;
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getRequestUri() {
        return requestUri;
    }

    public void setRequestUri(String requestUri) {
        this.requestUri = requestUri;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
