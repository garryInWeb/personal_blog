package org.cherry.blog.constant;

/**
 * Created by zhengtengfei on 2019/3/19.
 */
public enum PersonalLetterStatusEnum {
    UN_READ("未读消息",0),
    AL_READ("已读消息",1)
    ;

    private String name;
    private int value;

    PersonalLetterStatusEnum(String name, int value) {
        this.name = name;
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }
}
