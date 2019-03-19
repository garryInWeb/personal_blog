package org.cherry.blog.service;

import lombok.extern.slf4j.Slf4j;
import org.cherry.blog.dao.ArticleDao;
import org.cherry.blog.dao.ArticleTypeDao;
import org.cherry.blog.domain.Article;
import org.cherry.blog.exception.AppBusinessException;
import org.cherry.blog.exception.BlogErrorCode;
import org.cherry.blog.utils.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by zhengtengfei on 2019/3/19.
 */
@Service
@Slf4j
public class ArticleService {
    @Autowired
    private ArticleDao articleDao;
    @Autowired
    private ArticleTypeDao articleTypeDao;

    public void save(Article article){
      log.info("ArticleService.save,article={}",article);

      if(!checkOut(article))
          throw new AppBusinessException(BlogErrorCode.WRONG_DATA);

      articleDao.save(article);
    }

    private boolean checkOut(Article article) {
        if (StringUtils.isBlank(article.getArticleTitle())
                || StringUtils.isBlank(article.getArticleContent()))
            return false;
        return articleTypeDao.selectById(article.getArticleTypeId()) != null;
    }
}
