package org.cherry.blog.controller;

import org.cherry.blog.domain.Article;
import org.cherry.blog.dto.ArticleDto;
import org.cherry.blog.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by zhengtengfei on 2019/3/19.
 */
@RestController
@RequestMapping("/article")
public class ArticleController {
    @Autowired
    private ArticleService articleService;

    @RequestMapping(value = "/save",method = RequestMethod.POST)
    public String save(@RequestBody Article article){
        articleService.save(article);
        return "SUCCESS";
    }

    @RequestMapping("/all")
    public List<ArticleDto> all(){
        return articleService.findAll();
    }

    @RequestMapping("/article/{id}")
    public ArticleDto find(@PathVariable("id")long id){
        return articleService.find(id);
    }


    @RequestMapping("/del")
    public String del(long id){
        articleService.delete(id);
        return "SUCCESS";
    }
}
