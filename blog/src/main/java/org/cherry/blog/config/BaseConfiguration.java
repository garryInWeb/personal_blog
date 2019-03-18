package org.cherry.blog.config;

import org.cherry.blog.interceptor.WebMvcConfig;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;

/**
 * Created by zhengtengfei on 2019/3/15.
 */
@MapperScan(
        basePackages = {"org.cherry.**.dao"}
)
public class BaseConfiguration {
    public BaseConfiguration() {
    }

    @Bean
    public WebMvcConfig webMvcConfig(){
        return new WebMvcConfig();
    }


}
