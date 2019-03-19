package org.cherry.blog.service;

import lombok.extern.slf4j.Slf4j;
import org.cherry.blog.dao.ArticleDao;
import org.cherry.blog.dao.ArticleTypeDao;
import org.cherry.blog.domain.ArticleType;
import org.cherry.blog.exception.AppBusinessException;
import org.cherry.blog.exception.BlogErrorCode;
import org.cherry.blog.utils.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Created by zhengtengfei on 2019/3/19.
 */
@Service
@Slf4j
public class ArticleTypeService {
    @Autowired
    private ArticleTypeDao articleTypeDao;
    @Autowired
    private ArticleDao articleDao;

    public void save(ArticleType articleType){
        log.info("ArticleTypeService.save,articleType={}",articleType);
        if (!checkOut(articleType))
            throw new AppBusinessException(BlogErrorCode.WRONG_DATA);

        if (articleType.getId() != 0)
            articleTypeDao.update(articleType);
        else
            articleTypeDao.save(getDetialArticleType(articleType));
    }

    private ArticleType getDetialArticleType(ArticleType articleType) {
        if (StringUtils.isBlank(articleType.getArticleTypeInfo()))
           articleType.setArticleTypeInfo("");
        if (StringUtils.isBlank(articleType.getCreateBy()))
            articleType.setCreateBy("");
        if (articleType.getCreateTime() == null)
            articleType.setCreateTime(LocalDateTime.now());
        if (articleType.getUpdateTime() == null)
            articleType.setUpdateTime(LocalDateTime.now());
        return articleType;
    }

    private boolean checkOut(ArticleType articleType) {
        return !StringUtils.isBlank(articleType.getTypeName());
    }

    public List<ArticleType> findAll() {
        return articleTypeDao.findAll();
    }

    public void delete(long id) {

        if(articleDao.selectByTypeId(id).size() > 0)
            throw new AppBusinessException(BlogErrorCode.DATA_REMAIN);

        ArticleType articleType = new ArticleType();
        articleType.setId(id);
        articleType.setIsDelete(1);
        articleTypeDao.update(articleType);
    }
}
