package org.cherry.blog.service;

import org.cherry.blog.dao.UserDao;
import org.cherry.blog.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
