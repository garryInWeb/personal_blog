package org.cherry.blog.service;

import lombok.extern.slf4j.Slf4j;
import org.cherry.blog.dao.ArticleTypeDao;
import org.cherry.blog.domain.ArticleType;
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
public class ArticleTypeService {
    @Autowired
    private ArticleTypeDao articleTypeDao;

    public void save(ArticleType articleType){
        log.info("ArticleTypeService.save,articleType={}",articleType);
        if (!checkOut(articleType))
            throw new AppBusinessException(BlogErrorCode.WRONG_DATA);
        articleTypeDao.save(articleType);
    }

    private boolean checkOut(ArticleType articleType) {
        return !StringUtils.isBlank(articleType.getTypeName());
    }
}
