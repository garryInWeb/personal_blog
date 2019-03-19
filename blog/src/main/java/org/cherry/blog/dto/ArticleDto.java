package org.cherry.blog.dto;

import lombok.Data;
import org.cherry.blog.domain.Article;

/**
 * Created by zhengtengfei on 2019/3/19.
 */
@Data
public class ArticleDto extends Article{
    private String typeName;
}
