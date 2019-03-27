package org.cherry.blog.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.UUID;

/**
 * Created by zhengtengfei on 2019/3/27.
 */
@Service
public class ImageService {

    private String path = "D:/image/";

    public String saveImg(MultipartFile image){
        if (image == null){
            return "";
        }

        //获取图片类型
        String exName = image.getOriginalFilename().substring(image.getOriginalFilename().lastIndexOf("."));
        //使用工具类UUID给图片重命名
        String fileName = UUID.randomUUID().toString().replaceAll("-", "") + exName;
        StringBuilder realPath = new StringBuilder(path);
        realPath.append(fileName);

        File file = new File(realPath.toString());
        if(!file.getParentFile().exists()) {
            file.getParentFile().mkdirs();
        }

        try {
            image.transferTo(file);
        } catch (IllegalStateException | IOException e) {
            e.printStackTrace();
            return null;
        }

        return fileName;
    }
}
