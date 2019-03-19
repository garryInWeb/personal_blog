package org.cherry.blog.service;

import org.cherry.blog.dao.PersonalLetterDao;
import org.cherry.blog.domain.PersonalLetter;
import org.cherry.blog.exception.AppBusinessException;
import org.cherry.blog.exception.BlogErrorCode;
import org.cherry.blog.utils.ImgRandomUtils;
import org.cherry.blog.utils.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.List;

/**
 * Created by zhengtengfei on 2019/3/19.
 */
@Service
public class PersonalLetterService {
    @Autowired
    private PersonalLetterDao personalLetterDao;

    public void update(long id){
        PersonalLetter personalLetter = new PersonalLetter();
        personalLetter.setStatus(1);
        personalLetter.setId(id);
        personalLetterDao.update(personalLetter);
    }

    public void save(HttpServletRequest request,PersonalLetter personalLetter){
        personalLetter.setIpAddress(request.getRemoteAddr());
        if(!checkOut(personalLetter))
            throw new AppBusinessException(BlogErrorCode.WRONG_DATA);

        personalLetterDao.save(getDetialsPersonalLetter(personalLetter));
    }

    private PersonalLetter getDetialsPersonalLetter(PersonalLetter personalLetter) {
        personalLetter.setCreateTime(LocalDateTime.now());
        personalLetter.setUpdateTime(LocalDateTime.now());
        personalLetter.setIsDelete(0);
        personalLetter.setReviewImg(ImgRandomUtils.getImg());
        return null;
    }

    private boolean checkOut(PersonalLetter personalLetter) {
        return !StringUtils.isBlank(personalLetter.getLetter_content());
    }

    public List<PersonalLetter> queryByStatus(int status) {
        return personalLetterDao.queryByStatus(status);
    }

    public List<PersonalLetter> all() {
        return personalLetterDao.findAll();
    }
}
