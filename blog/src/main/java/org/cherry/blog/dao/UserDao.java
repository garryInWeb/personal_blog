package org.cherry.blog.dao;

import org.cherry.blog.domain.User;

import java.util.List;

/**
 * Created by zhengtengfei on 2019/3/15.
 */
public interface UserDao {
    List<User> selectAll();

    User queryByUserName(User user);
}
