package org.cherry.blog.constant;

public enum CookieEnum {
    LOGIN_COOKIE("登陆cookie","LOGIN_COOKIE"),
    USER_NAME("用户名","USER_NAME");


    private String name;
    private String value;

    CookieEnum(String name, String value) {
        this.name = name;
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}

