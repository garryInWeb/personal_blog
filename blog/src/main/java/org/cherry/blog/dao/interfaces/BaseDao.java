package org.cherry.blog.dao.interfaces;

/**
 * Date:     2018/5/3 10:54
 *
 * @author huangkaijie
 * @version V1.0
 * @since JDK 1.8.0_131
 */
public interface BaseDao<T> {

    Long save(T domain);

    Integer update(T domain);

    Integer delete(Long id);
}
