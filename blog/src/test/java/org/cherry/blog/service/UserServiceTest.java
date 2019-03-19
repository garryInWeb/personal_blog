package org.cherry.blog.service;

import org.cherry.blog.BaseTest;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by zhengtengfei on 2019/3/15.
 */

public class UserServiceTest extends BaseTest{
    @Autowired
    private UserService userService;
    @Test
    public void getAll() throws Exception {
        System.out.println(userService.getAll());
    }

}