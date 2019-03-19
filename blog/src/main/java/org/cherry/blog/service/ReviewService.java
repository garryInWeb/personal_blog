package org.cherry.blog.service;

import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.jni.Local;
import org.cherry.blog.dao.ReviewDao;
import org.cherry.blog.domain.Article;
import org.cherry.blog.domain.Review;
import org.cherry.blog.exception.AppBusinessException;
import org.cherry.blog.exception.BlogErrorCode;
import org.cherry.blog.utils.ImgRandomUtils;
import org.cherry.blog.utils.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

/**
 * Created by zhengtengfei on 2019/3/19.
 */
@Service
@Slf4j
public class ReviewService {
    @Autowired
    private ReviewDao reviewDao;

    public void save(Review review){
        log.info("ArticleService.save,article={}",review);

        if(!checkOut(review))
            throw new AppBusinessException(BlogErrorCode.WRONG_DATA);

        if (review.getId() != 0)
            reviewDao.update(review);
        else
            reviewDao.save(getDetialsReview(review));
    }

    private Review getDetialsReview(Review review) {
        review.setCreateTime(LocalDateTime.now());
        review.setIsDelete(0);
        review.setUpdateTime(LocalDateTime.now());
        review.setReviewImg(ImgRandomUtils.getImg());
        return review;
    }

    private boolean checkOut(Review review) {
        return !StringUtils.isBlank(review.getReviewContent());
    }

}
