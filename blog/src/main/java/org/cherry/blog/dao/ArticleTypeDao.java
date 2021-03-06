package org.cherry.blog.dao;

import org.cherry.blog.dao.interfaces.BaseDao;
import org.cherry.blog.domain.ArticleType;

import java.util.List;

/**
 * Created by zhengtengfei on 2019/3/19.
 */
public interface ArticleTypeDao extends BaseDao<ArticleType>{
    ArticleType selectById(long id);
    List<ArticleType> findAll();
}
