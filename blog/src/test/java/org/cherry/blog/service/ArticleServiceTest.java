package org.cherry.blog.service;

import org.cherry.blog.BaseTest;
import org.cherry.blog.domain.Article;
import org.cherry.blog.domain.ArticleType;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDateTime;

import static org.junit.Assert.*;

/**
 * Created by zhengtengfei on 2019/3/19.
 */
public class ArticleServiceTest extends BaseTest{
    @Autowired
    private ArticleService articleService;
    @Autowired
    private ArticleTypeService articleTypeService;
    @Test
    public void save() throws Exception {
        ArticleType articleType = new ArticleType();
        articleType.setTypeName("第一类");
        articleType.setArticleTypeInfo("无");
        articleType.setIsDelete(0);
        articleType.setCreateTime(LocalDateTime.now());
        articleTypeService.save(articleType);

        Article article = new Article();
        article.setArticleContent("第一篇");
        article.setArticleTypeId(1);
        article.setArticleCount(0);
        article.setArticleFrom(0);
        article.setArticleInfo("无");
        article.setArticleTitle("第一篇");
        article.setArticleTypeId(1);
        article.setIsDelete(0);
        article.setCreateTime(LocalDateTime.now());
        articleService.save(article);
    }

}