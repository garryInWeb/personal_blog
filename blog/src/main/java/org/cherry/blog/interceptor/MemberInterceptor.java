package org.cherry.blog.interceptor;

import lombok.extern.slf4j.Slf4j;
import org.cherry.blog.exception.AppBusinessException;
import org.cherry.blog.exception.CommonErrorCode;
import org.cherry.blog.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by zhengtengfei on 2019/3/18.
 */
@Slf4j
@Component
public class MemberInterceptor extends HandlerInterceptorAdapter {
    @Autowired
    @Lazy
    private LoginService loginService;

    private String unNeedLogin = "/user/login,/article/all,/article/article";

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        String uri = request.getRequestURI();

        if (isNoNeedLogin(uri) || loginService.loginCheck(request)){
            return true;
        }else{
            throw new AppBusinessException(CommonErrorCode.UNAUTHORIZED);
        }
    }

    private boolean isNoNeedLogin(String uri) {
        String[] unNeedLogins = unNeedLogin.split(",");
        for (String unNeedLogin : unNeedLogins){
            if (uri.contains(unNeedLogin))
                return true;
        }
        return false;
    }
}
