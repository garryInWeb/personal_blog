package org.cherry.blog.config;

import org.mybatis.spring.annotation.MapperScan;

/**
 * Created by zhengtengfei on 2019/3/15.
 */
@MapperScan(
        basePackages = {"org.cherry.**.dao"}
)
public class BaseConfiguration {
    public BaseConfiguration() {
    }
}
