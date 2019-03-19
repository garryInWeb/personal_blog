package org.cherry.blog.dao;

import org.cherry.blog.dao.interfaces.BaseDao;
import org.cherry.blog.domain.ArticleType;
import org.cherry.blog.domain.PersonalLetter;

import java.util.List;

/**
 * Created by zhengtengfei on 2019/3/19.
 */
public interface PersonalLetterDao extends BaseDao<PersonalLetter>{
    List<PersonalLetter> queryByStatus(int status);
    List<PersonalLetter> findAll();

}
