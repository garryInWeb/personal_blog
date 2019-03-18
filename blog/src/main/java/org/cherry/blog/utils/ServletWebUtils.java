package org.cherry.blog.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;

/**
 * Created by zhengtengfei on 2019/3/18.
 */
public abstract class ServletWebUtils {
    private static final Logger logger = LoggerFactory.getLogger(ServletWebUtils.class);

    public ServletWebUtils() {
    }

    public static boolean isNeedJsonResponse(HttpServletRequest request){
        Enumeration<String> headerNames = request.getHeaderNames();
        boolean json = false;
        if (isAjaxRequest(request)){
            json = true;
        }else if (headerNames != null){
            while (true){
                String headerName;
                // 找到请求头里面的Content-Type或者Accept字段
                do {
                    if (!headerNames.hasMoreElements()){
                        return json;
                    }
                    headerName = headerNames.nextElement();
                }while (!headerName.equalsIgnoreCase("Content-Type")&&!headerName.equalsIgnoreCase("Accept"));

                String headerValue = request.getHeader(headerName);
                if (StringUtils.isNotBlank(headerValue) && headerValue.toUpperCase().equals("JSON")){
                    json = true;
                    break;
                }
            }
        }
        return json;
    }

    private static boolean isAjaxRequest(HttpServletRequest request) {
        String requestType = request.getHeader("X-Requested-With");
        return requestType != null && requestType.equals("XMLHttpRequest");
    }
}
