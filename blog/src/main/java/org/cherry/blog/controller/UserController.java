package org.cherry.blog.controller;

import org.cherry.blog.domain.User;
import org.cherry.blog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/login")
    public boolean login(HttpServletResponse response, User user){
        return userService.login(response,user);
    }


    @RequestMapping("/findAll")
    public List<User> findAll(){
        return userService.getAll();
    }
}
