package org.cherry.blog.service;

import org.cherry.blog.constant.CookieEnum;
import org.cherry.blog.constant.CookieKey;
import org.cherry.blog.utils.Cryptography;
import org.springframework.stereotype.Service;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.util.Objects;

@Service
public class LoginService {

    public boolean loginCheck(HttpServletRequest request){
        String token = request.getHeader(CookieEnum.LOGIN_COOKIE.getValue());
        String uuid = request.getHeader(CookieEnum.USER_NAME.getValue());
//        Cookie[] cookies = request.getCookies();
//        String userName = null,loginName = null;
        if (token == null || uuid == null) return false;
//        for (Cookie cookie : cookies){
//            if (cookie.getName().equals(CookieEnum.LOGIN_COOKIE.getValue())){
//                loginName = Cryptography.decrypt(cookie.getValue(), CookieKey.cookieKey);
//            }
//            if (cookie.getName().equals(CookieEnum.USER_NAME.getValue())){
//                userName = cookie.getValue();
//            }
//        }
        token = Cryptography.decrypt(token, CookieKey.cookieKey);
        return Objects.equals(token, uuid);
    }
}
