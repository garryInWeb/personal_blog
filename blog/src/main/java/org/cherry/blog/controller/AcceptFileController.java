package org.cherry.blog.controller;

import org.cherry.blog.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 * Created by zhengtengfei on 2019/3/27.
 */
@RestController
@RequestMapping("/file")
public class AcceptFileController {

    @Autowired
    private ImageService imageService;

    @RequestMapping(value = "save",method = RequestMethod.POST)
    public String save(MultipartFile file){
        return imageService.saveImg(file);
    }
}
