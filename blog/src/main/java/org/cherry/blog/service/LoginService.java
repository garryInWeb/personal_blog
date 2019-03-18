package org.cherry.blog.service;

import org.cherry.blog.constant.CookieEnum;
import org.cherry.blog.constant.CookieKey;
import org.cherry.blog.utils.Cryptography;
import org.springframework.stereotype.Service;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

@Service
public class LoginService {

    public boolean loginCheck(HttpServletRequest request){
        Cookie[] cookies = request.getCookies();
        String userName = null,loginName = null;
        for (Cookie cookie : cookies){
            if (cookie.getName().equals(CookieEnum.LOGIN_COOKIE.getValue())){
                loginName = Cryptography.decrypt(cookie.getValue(), CookieKey.cookieKey);
            }
            if (cookie.getName().equals(CookieEnum.USER_NAME.getValue())){
                userName = cookie.getValue();
            }
        }
        if (userName != null && loginName != null){
            if (userName.equals(loginName))
                return true;
        }
        return false;
    }
}
