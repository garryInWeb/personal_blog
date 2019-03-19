package org.cherry.blog.controller;

import org.cherry.blog.constant.PersonalLetterStatusEnum;
import org.cherry.blog.domain.PersonalLetter;
import org.cherry.blog.service.PersonalLetterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by zhengtengfei on 2019/3/19.
 */
@RestController
@RequestMapping("/personalLetter")
public class PersonalLetterController {

    @Autowired
    private PersonalLetterService personalLetterService;

    @RequestMapping("/unRead")
    public List<PersonalLetter> list(){
        return personalLetterService.queryByStatus(PersonalLetterStatusEnum.UN_READ.getValue());
    }

    @RequestMapping("/all")
    public List<PersonalLetter> all(){
        return personalLetterService.all();
    }

    @RequestMapping("/read")
    public String read(long id){
        personalLetterService.update(id);
        return "SUCCESS";
    }

}
