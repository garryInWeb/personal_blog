package org.cherry.blog.controller;

import org.cherry.blog.domain.ArticleType;
import org.cherry.blog.service.ArticleTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by zhengtengfei on 2019/3/19.
 */
@RestController
@RequestMapping("/articleType")
public class ArticleTypeController {
    @Autowired
    private ArticleTypeService articleTypeService;

    @RequestMapping(value = "/save",method = RequestMethod.POST)
    public String save(@RequestBody ArticleType articleType){
        articleTypeService.save(articleType);
        return "SUCCESS";
    }

    @RequestMapping(value = "/del")
    public String del(long id){
        articleTypeService.delete(id);
        return "SUCCESS";
    }

    @RequestMapping("/all")
    public List<ArticleType> all(){
        return articleTypeService.findAll();
    }


}
