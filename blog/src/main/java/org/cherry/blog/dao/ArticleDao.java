package org.cherry.blog.dao;

import org.cherry.blog.dao.interfaces.BaseDao;
import org.cherry.blog.domain.Article;

import java.util.List;

/**
 * Created by zhengtengfei on 2019/3/19.
 */
public interface ArticleDao extends BaseDao<Article> {
    List<Article> selectAll();
}
