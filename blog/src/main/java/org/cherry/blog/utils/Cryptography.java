package org.cherry.blog.utils;

import javax.crypto.*;
import javax.crypto.spec.SecretKeySpec;
import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

public class Cryptography {

    private static final String Algorithm = "DESede"; // 定义 加密算法,可用 DES,DESede,Blowfish
    /**
     * 加密
     *
     * @param original
     *            需要加密的内容
     * @param key
     *            加密密码
     * @return
     */
    public static String encrypt(String original, String key) {
        try {
            byte[] keybyte = key.substring(0, 24).getBytes();
            // 生成密钥
            SecretKey deskey = new SecretKeySpec(keybyte, Algorithm);
            // 加密
            Cipher c1 = Cipher.getInstance(Algorithm);
            c1.init(Cipher.ENCRYPT_MODE, deskey);
            byte[] result = c1.doFinal(original.getBytes("UTF-8"));
            return parseByte2HexStr(result);
        } catch (java.security.NoSuchAlgorithmException e1) {
            e1.printStackTrace();
        } catch (javax.crypto.NoSuchPaddingException e2) {
            e2.printStackTrace();
        } catch (Exception e3) {
            e3.printStackTrace();
        }
        return null;
    }

    /**
     * 解密
     *
     * @param cryptograph
     *            待解密内容
     * @param key
     *            解密密钥
     * @return
     */
    public static String decrypt(String cryptograph, String key) {
        try {
            byte[] decode = parseHexStr2Byte(cryptograph);
            byte[] keybyte = key.substring(0, 24).getBytes();
            // 生成密钥
            SecretKey deskey = new SecretKeySpec(keybyte, Algorithm);
            // 解密
            Cipher c1 = Cipher.getInstance(Algorithm);
            c1.init(Cipher.DECRYPT_MODE, deskey);
            return new String(c1.doFinal(decode));
        } catch (java.security.NoSuchAlgorithmException e1) {
            e1.printStackTrace();
        } catch (javax.crypto.NoSuchPaddingException e2) {
            e2.printStackTrace();
        } catch (Exception e3) {
            e3.printStackTrace();
        }
        return null;
    }

    /**
     * 将二进制转换成16进制
     *
     * @param buf
     * @return
     */
    private static String parseByte2HexStr(byte buf[]) {
        StringBuffer sb = new StringBuffer();
        if (buf.length < 1)
            return null;
        for (int i = 0; i < buf.length; i++) {
            String hex = Integer.toHexString(buf[i] & 0xFF);
            if (hex.length() == 1) {
                hex = '0' + hex;
            }
            sb.append(hex.toUpperCase());
        }
        return sb.toString();
    }

    /**
     * 将16进制转换为二进制
     *
     * @param hexStr
     * @return
     */
    private static byte[] parseHexStr2Byte(String hexStr) {
        if (hexStr.length() < 1)
            return null;
        byte[] result = new byte[hexStr.length() / 2];
        for (int i = 0; i < hexStr.length() / 2; i++) {
            int high = Integer.parseInt(hexStr.substring(i * 2, i * 2 + 1), 16);
            int low = Integer.parseInt(hexStr.substring(i * 2 + 1, i * 2 + 2), 16);
            result[i] = (byte) (high * 16 + low);
        }
        return result;
    }

    /**
     * 加密
     *
     * @param content
     *            需要加密的内容
     * @param password
     *            加密密码
     * @return
     */
    public static byte[] encrypt2(String content, String password) {
        try {
            SecretKeySpec key = new SecretKeySpec(password.getBytes(), "AES");
            Cipher cipher = Cipher.getInstance("AES/ECB/NoPadding");
            byte[] byteContent = content.getBytes("utf-8");
            cipher.init(Cipher.ENCRYPT_MODE, key);// 初始化
            byte[] result = cipher.doFinal(byteContent);
            return result; // 加密
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (InvalidKeyException e) {
            e.printStackTrace();
        } catch (NoSuchPaddingException e) {
            e.printStackTrace();
        } catch (BadPaddingException e) {
            e.printStackTrace();
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (IllegalBlockSizeException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static void main(String[] args) throws UnsupportedEncodingException {
        String content = "85";
        String password = "3@7pk0qd]iy3$xfn87926k6a";
        // 加密
        System.out.println("加密前：" + content);
        //byte[] encode = encrypt(content, password);
        String encode = encrypt(content, password);
        String decryptResult = decrypt(encode, password);
        System.out.println(encode);
        System.out.println(decryptResult);

        //传输过程,不转成16进制的字符串，就等着程序崩溃掉吧
        //String code = parseByte2HexStr(encode);
        //System.out.println("密文字符串：" + code);
        //byte[] decode = parseHexStr2Byte(code);
        // 解密
        //byte[] decryptResult = decrypt(decode, password);
        //System.out.println("解密后：" + new String(decryptResult, "UTF-8")); //不转码会乱码

    }
}
