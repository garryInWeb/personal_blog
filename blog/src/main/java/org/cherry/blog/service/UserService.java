package org.cherry.blog.service;

import org.cherry.blog.constant.CookieEnum;
import org.cherry.blog.constant.CookieKey;
import org.cherry.blog.dao.UserDao;
import org.cherry.blog.domain.User;
import org.cherry.blog.utils.Cryptography;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * Created by zhengtengfei on 2019/3/15.
 */
@Service
public class UserService {
    @Autowired
    private UserDao userDao;

    public List<User> getAll(){
        return userDao.selectAll();
    }

    public boolean login(HttpServletResponse response, User user){
        boolean loginResult = false;
        User loginUser = userDao.queryByUserName(user);
        if (loginUser != null ){
            loginResult = true;
            Cookie login = new Cookie(CookieEnum.LOGIN_COOKIE.getValue(), Cryptography.encrypt(loginUser.getUserName(), CookieKey.cookieKey));
            Cookie userName = new Cookie(CookieEnum.USER_NAME.getValue(), loginUser.getUserName());
//            cookie.setDomain(".vania.io");
            response.addCookie(login);
            response.addCookie(userName);
        }
        return loginResult;
    }
}
