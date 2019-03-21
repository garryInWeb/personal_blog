package org.cherry.blog.service;

import org.cherry.blog.constant.CookieEnum;
import org.cherry.blog.constant.CookieKey;
import org.cherry.blog.dao.UserDao;
import org.cherry.blog.domain.User;
import org.cherry.blog.dto.UserDto;
import org.cherry.blog.exception.AppBusinessException;
import org.cherry.blog.exception.BlogErrorCode;
import org.cherry.blog.exception.CommonErrorCode;
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

    public UserDto login(HttpServletResponse response, User user){
        User loginUser = userDao.queryByUserName(user);
//        if (loginUser != null ){
//            Cookie login = new Cookie(CookieEnum.LOGIN_COOKIE.getValue(), Cryptography.encrypt(loginUser.getUserName(), CookieKey.cookieKey));
//            Cookie userName = new Cookie(CookieEnum.USER_NAME.getValue(), loginUser.getUserName());
//            response.addCookie(login);
//            response.addCookie(userName);
        if (loginUser == null)
            throw new AppBusinessException(BlogErrorCode.USER_LOGIN_ERROR);

        UserDto userDto = new UserDto();
        userDto.setNickName(loginUser.getNickName());
        userDto.setToken(Cryptography.encrypt(loginUser.getUserName(), CookieKey.cookieKey));
        userDto.setUuid(loginUser.getUserName());
        return userDto;
    }
}
