package org.cherry.blog.utils;

import org.cherry.blog.dto.ErrorInfo;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import java.util.Map;

/**
 * Created by zhengtengfei on 2019/3/18.
 */
public abstract class SpringViewUtils {
    public SpringViewUtils() {
    }

    public static ModelAndView createJsonErrorView(ErrorInfo errorInfo){
        ModelAndView mav = new ModelAndView();
        MappingJackson2JsonView view = new MappingJackson2JsonView(JsonUtils.OBJECT_MAPPER);
        Map<String,Object> errorInfoMap;
        errorInfoMap =  JsonUtils.object2Map(errorInfo);
        view.setAttributesMap(errorInfoMap);
        mav.setView(view);
        return mav;
    }
}
