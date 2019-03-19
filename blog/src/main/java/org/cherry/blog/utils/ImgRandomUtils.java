package org.cherry.blog.utils;

import java.util.List;
import java.util.Random;

/**
 * Created by zhengtengfei on 2019/3/19.
 */
public class ImgRandomUtils {

    static String imgs = "";
    public static String getImg(){
        String[] imgList = imgs.split(",");
        Random rand = new Random();
        int line = rand.nextInt(imgList.length);
        return imgList[line];
    }
}
