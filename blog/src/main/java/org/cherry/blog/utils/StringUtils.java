package org.cherry.blog.utils;

/**
 * Created by zhengtengfei on 2019/3/18.
 */
public class StringUtils {
    public static boolean isBlank(CharSequence cs) {
        int strLen;
        if (cs == null || (strLen = cs.length()) == 0) {
            return true;
        }
        for (int i = 0; i < strLen; i++) {
            if (Character.isWhitespace(cs.charAt(i)) == false) {
                return false;
            }
        }
        return true;
    }
    public static boolean isNotBlank(CharSequence cs) {
        return !StringUtils.isBlank(cs);
    }
}
