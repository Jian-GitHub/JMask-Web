/**
 * @description base64编码方法
 * @param val 需要编码的字符串
 * @return 返回编码好的base64字符串
 *	中文进行编码时，需要使用base64Encode(encodeURIComponent(a))
 */
function base64Encode(str){
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
        }));

}
/**
 * Base64译码
 * @param val base编码后的字符串
 * @returns {string} 原字符串
 */
// function base64Decode(val){
//     var base64hash = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
//
//     //把字符串转换为字符数组
//     var strArr = val.split('');
//
//     //装入结果的数组
//     var result = [];
//     var preCode;
//     var code;
//     //余数，1-3
//     var n;
//     for(var i in strArr){
//         n=i%4;
//         code=base64hash.indexOf(strArr[i]);
//         switch(n){
//             case 0:
//                 preCode=base64hash.indexOf(strArr[i]);
//                 break;
//             case 1:
//                 result.push(String.fromCharCode(preCode<<2|(code&48)>>4));
//                 break;
//             case 2:
//                 result.push(String.fromCharCode((preCode&15)<<4 |(code&60)>>2));
//                 break;
//             case 3:
//                 result.push(String.fromCharCode(((preCode&3)<<6)|code));
//                 break;
//
//         }
//         preCode=code;
//
//     }
//
//     return decodeURIComponent(result.join(''));
// }

export default base64Encode