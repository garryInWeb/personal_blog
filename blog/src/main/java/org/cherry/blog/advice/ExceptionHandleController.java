package org.cherry.blog.advice;

import org.cherry.blog.dto.ErrorInfo;
import org.cherry.blog.exception.AppBusinessException;
import org.cherry.blog.utils.ServletWebUtils;
import org.cherry.blog.utils.SpringViewUtils;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by zhengtengfei on 2019/3/18.
 */
@ControllerAdvice
public class ExceptionHandleController {
    @ExceptionHandler(AppBusinessException.class)
    public ModelAndView handleAppbusinessException(HttpServletRequest request, HttpServletResponse response,AppBusinessException e){
        return this.createModelAndViewResponse(e.getHttpStatus(),request,response,e.getMessage());
    }

    private ModelAndView createModelAndViewResponse(int httpStatus,HttpServletRequest request,HttpServletResponse response,String message) {
        boolean needJsonResponse = ServletWebUtils.isNeedJsonResponse(request);

        ErrorInfo error = new ErrorInfo(message,request.getRequestURI(),httpStatus);
        response.setStatus(httpStatus);
        return needJsonResponse? SpringViewUtils.createJsonErrorView(error):this.createErrorModelAndView(httpStatus,error);
    }

    protected ModelAndView createErrorModelAndView(int status,ErrorInfo errorInfo){
        String viewName = "500";
        if (status == 401 || status == 404){
            viewName = String.valueOf(status);
        }
        Map<String,Object> map = new HashMap();
        map.put("errorInfo",errorInfo);
        return new ModelAndView(viewName,map);
    }
}
