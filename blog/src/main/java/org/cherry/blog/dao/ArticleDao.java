package org.cherry.blog.dao;

import org.cherry.blog.dao.interfaces.BaseDao;
import org.cherry.blog.domain.Article;
import org.cherry.blog.dto.ArticleDto;

import java.util.List;

/**
 * Created by zhengtengfei on 2019/3/19.
 */
public interface ArticleDao extends BaseDao<Article> {
    List<ArticleDto> selectAll();
    List<Article> selectByTypeId(long typeId);
}
