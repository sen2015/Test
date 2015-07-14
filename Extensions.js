
/***************************************************** String 功能擴充 *****************************************************/
// 取得 N 個相同的字串
String.prototype.Repeat = function(num) {
    var tmpArr = [];
    for (var i = 0; i < num; i++) tmpArr.push(this);
    return tmpArr.join("");
}

// 取得字元陣列
String.prototype.ToCharArray = function() {
	return this.split("");
}

// 測試是否是數值
String.prototype.IsNumeric = function() {
    var tmpFloat = parseFloat(this);
    if (isNaN(tmpFloat)) return false;
    var tmpLen = this.length - tmpFloat.toString().length;
    return tmpFloat + "0".Repeat(tmpLen) == this;
}

// 測試是否是整數
String.prototype.IsInt = function() {
    if (this === "NaN") return false;
    return this === parseInt(this).toString();
}

// 字串反轉
String.prototype.Reverse = function() {
	return this.split("").reverse().join("");
}

// 合併多個空白為一個空白
String.prototype.resetBlank = function() {
    return this.replace(/s+/g, " ");
}

// 取得位元組長度
String.prototype.getRealLength = function() {
    return this.replace(/[^x00-xff]/g, "--").length;
}

// 從左截取指定長度的字串
String.prototype.left = function(n) {
    return this.slice(0, n);
}

// 保留數字
String.prototype.getNum = function() {
    return this.replace(/[^d]/g, "");
}

// 保留字母
String.prototype.getEn = function() {
    return this.replace(/[^A-Za-z]/g, ""); 
}

// 保留中文
String.prototype.getCh = function() {
    return this.replace(/[^u4e00-u9fa5uf900-ufa2d]/g, "");
}
// 從右截取指定長度的字串
String.prototype.right = function(n) {
    return this.slice(this.length - n);
}

// Unicode 轉換
String.prototype.ascW = function() {
    var strText = "";
    for (var i = 0; i < this.length; i++) strText += "&#" + this.charCodeAt(i) + ";";
    return strText;
}

// HTML 編碼
String.prototype.HTMLEncode = function() {
    var re = this;
    var q1 = [/x26/g, /x3C/g, /x3E/g, /x20/g];
    var q2 = ["&", "<", ">", " "];
    for (var i = 0; i < q1.length; i++)
    re = re.replace(q1[i], q2[i]);
    return re;
}

/**
* 驗證是否為整數數值
* 合法格式: 32位元整數 如 1 52 5555 414
*/
String.prototype.isInt32 = function() {
    var regex = new RegExp("^[\d]{1,32}$");
    return regex.exec(this);
}
 
/**
* 日期驗證
* 合法格式：1988-12-1 1982-01-05 1996-5-1 2004/1/2 2005/01/15	
*/
String.prototype.isDate = function() {
    var regex = new RegExp("^[\d]{4}([-|/])[\d]{1,2}([-|/])[\d]{1,2}$");
    return regex.exec(this);
}
 
/**
* 是否為正確的 SpaceName 或 UserName
* 格式：huacnlee-2 huacnlee_2
*/
String.prototype.isUserName = function() {
    var regex = new RegExp("^[a-zA-Z0-9\-_]{4,16}$");
    return regex.exec(this);
}
 
/**
* 是否為正確的 Email
*/
String.prototype.isEmail = function() {
    var regex = new RegExp("^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$");
    return regex.exec(this);
}
 
/**
* 是否為正確的 URL 網址
*/
String.prototype.isUrl = function() {
    var regex = new RegExp("^http://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?$");
    return regex.exec(this);
}
 
 
/**
* 最後個字元和參數相同時, 刪除最後個字元
*/
String.prototype.removeLastChar = function(c) {
    if (this.substr(this.length - 1, 1) == c) {
        return this.substr(0, this.length - 1);
    } else {
        return this;
    }
}
 
/**
* 清除頭尾的空格
*/
String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
}
 
/**
* 清除右邊的空格
*/
String.prototype.trimRight = function() {
    return this.replace(/\s+$/, "");
}
 
/**
* 清除左邊空格
*/
String.prototype.trimLeft = function() {
    return this.replace(/^\s+/, "");
}
 
/**
* 取代所有，原生 Replace 只能取代一個
* @param {String} from 原字串，正規表達式條件
* @param {String} to 新字串
*/
String.prototype.replaceAll = function(from, to) {
    var regex = new RegExp(from);
    return this.replace(regex, to);
}

// 得到左邊的字串
String.prototype.Left = function(len) {
	if (isNaN(len) || len === null) {
		len = this.length;
	} else {
		if (parseInt(len) < 0 || parseInt(len) > this.length) {
			len = this.length;
		}
	}
	return this.substr(0, len);
}

// 得到右邊的字串
String.prototype.Right = function(len) {
	if (isNaN(len) || len === null) {
		len = this.length;
	} else {
		if (parseInt(len) < 0 || parseInt(len) > this.length) {
			len = this.length;
		}
	}
	return this.substring(this.length - len, this.length);
}

// 得到中間的字串, 注意從0開始
String.prototype.Mid = function(start, len) {
	return this.substr(start, len);
}

// 在字串裡搜尋另一字串: 位置從0開始
String.prototype.InStr = function(str) {
	if (str === null) str = "";
	return this.indexOf(str);
}

// 在字串裡反向搜尋另一字串: 位置0開始
String.prototype.InStrRev = function(str) {
	if (str === null) str = "";
	return this.lastIndexOf(str);
}

// 計算字串列印長度
String.prototype.LengthW = function() {
	return this.replace(/[^\x00-\xff]/g, "**").length;
}

// 是否是正確的IP位址
String.prototype.isIP = function() {
	var reSpaceCheck = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;
	if (reSpaceCheck.test(this)) {
		this.match(reSpaceCheck);
		if (RegExp.$1 <= 255 && RegExp.$1 >= 0 
		 && RegExp.$2 <= 255 && RegExp.$2 >= 0 
		 && RegExp.$3 <= 255 && RegExp.$3 >= 0 
		 && RegExp.$4 <= 255 && RegExp.$4 >= 0) {
			return true;     
		} else {
			return false;
		}
	} else {
		return false;
	}
}

// 是否是正確的長日期
String.prototype.isLongDate = function() {
	var r = this.replace(/(^\s*)|(\s*$)/g, "").match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/); 
	if(r === null) return false; 
	var d = new Date(r[1], r[3] - 1, r[4], r[5], r[6], r[7]); 
	return (d.getFullYear() === r[1] && (d.getMonth() + 1) === r[3] && d.getDate() === r[4] && d.getHours() === r[5] && d.getMinutes() === r[6] && d.getSeconds() === r[7]);
}

// 是否是正確的短日期
String.prototype.isShortDate = function() {
	var r = this.replace(/(^\s*)|(\s*$)/g, "").match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/); 
	if (r === null) return false; 
	var d = new Date(r[1], r[3] - 1, r[4]); 
	return (d.getFullYear() === r[1] && (d.getMonth() + 1) === r[3] && d.getDate() === r[4]);
}

// 是否是正確的日期
String.prototype.isDate = function() {
	return this.isLongDate() || this.isShortDate();
}

// 是否是手機
String.prototype.isMobile = function() {
	return /^0{0,1}13[0-9]{9}$/.test(this);
}

// 是否是信箱
String.prototype.isEmail = function() {
	return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(this);
}

// 是否是郵政區號(中國)
String.prototype.isZipCode = function() {
	return /^[\\d]{6}$/.test(this);
}

// 是否是有中文字
String.prototype.existChinese = function() {
	// [\u4E00-\u9FA5] 為中文字
	// [\uFE30-\uFFA0] 為全形符號
	return /^[\x00-\xff]*$/.test(this);
}

// 是否是合法的檔案名/目錄名
String.prototype.isFileName = function() {
	return !/[\\\/\*\?\|:"<>]/g.test(this);
}

// 是否為有效連接
String.prototype.isUrl = function() {
	return /^http[s]?:\/\/([\w-]+\.)+[\w-]+([\w-./?%&=]*)?$/i.test(this);
}

// 首字字母轉大寫
if (!String.prototype.capitalize) {
	Object.defineProperty(String.prototype, 'capitalize', {
		value: function () {
			return this.slice(0, 1).toUpperCase() + this.slice(1).toLowerCase();
		},
		enumerable: false
	});
}

// 把 "200px" 這樣的字串轉為數字 200 
if (!String.prototype.pxToInt) {
    Object.defineProperty(String.prototype, 'pxToInt', {
        value: function () {
            return parseInt(this.split('px')[0]);
        },
        enumerable: false
    });
}

// 判斷一個字串是為 16 進制表示的, 如 "#CCC" 或 "#CACACA"
if (!String.prototype.isHex) {
    Object.defineProperty(String.prototype, 'isHex', {
        value: function () {
			return this.substring(0,1) === '#' && (this .length === 4 || this.length === 7) && /^[0-9a-fA-F]+$/.test(this.slice(1));
        },
        enumerable: false
    });
}

// 統計單詞數量, 使用空格分開
if (!String.prototype.wordCount) {
    Object.defineProperty(String.prototype, 'wordCount', {
        value: function () {
			return this.split(' ').length;
        },
        enumerable: false
    });
}

// html 標籤如 <和> 編碼為特殊字元
if (!String.prototype.htmlEntities) {
    Object.defineProperty(String.prototype, 'htmlEntities', {
        value: function () {
            var div = document.createElement("div");
			if (div.textContent) {
				div.textContent = this;
            } else {
                div.innerText = this;
            }
            return div.innerHTML;
        },
        enumerable: false
    });
}

// 去掉 HTML 標籤
if (!String.prototype.stripTags) {
    Object.defineProperty(String.prototype, 'stripTags', {
        value: function () {
			return this.replace(/<\/?[^>]+>/gi, '');
        },
        enumerable: false
    });
}

// 去掉非字母字元
if (!String.prototype.stripNonAlpha) {
    Object.defineProperty(String.prototype, 'stripNonAlpha', {
        value: function () {
            return this.replace(/[^A-Za-z ]+/g, "");
        },
        enumerable: false
    });
}

// 統計物件的大小
if (!Object.prototype.sizeof) {
    Object.defineProperty(Object.prototype, 'sizeof', {
        value: function () {
			var counter = 0;
			for (index in this) counter++;
            return counter;
        },
        enumerable: false
    });
}
 
// 是否是有效的身份證(中國)
String.prototype.isIDCard = function() {
	var iSum = 0;
	var info = "";
	var sId = this;
	var aCity = {11:"北京",12:"天津",13:"河北",14:"山西",15:"內蒙古",21:"遼寧",22:"吉林",23:"黑龍江",31:"上海",32:"江蘇",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山東",41:"河南",42:"湖北",43:"湖南",44:"廣東",45:"廣西",46:"海南",50:"重慶",51:"四川",52:"貴州",53:"雲南",54:"西藏",61:"陝西",62:"甘肅",63:"青海",64:"寧夏",65:"新疆",71:"台灣",81:"香港",82:"澳門",91:"國外"};

	if (!/^\d{17}(\d|x)$/i.test(sId)) return false;

	sId = sId.replace(/x$/i, "a");
	
	// 非法地區
	if (aCity[parseInt(sId.substr(0, 2))] === null) return false;

	var sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
	var d = new Date(sBirthday.replace(/-/g, "/"));
	 
	// 非法生日
	if (sBirthday !== (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) return false;

	for (var i = 17; i >= 0; i--) {
		iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
	}
	if (iSum % 11 !== 1) return false;
	return true;
}

// 是否是有效的電話號碼(中國)
String.prototype.isPhoneCall = function() {
	return /(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}$)/.test(this);
}

// 是否是數字
String.prototype.isNumeric = function(flag) {
	
	if (isNaN(this)) return false;	// 驗證是否是數字
	switch (flag) {
		case null:	// 數字
		case "":
			return true;
		case "+":	// 正數
			return /(^\+?|^\d?)\d*\.?\d+$/.test(this);
		case "-":	// 負數
			return /^-\d*\.?\d+$/.test(this);
		case "i":	// 整數
			return /(^-?|^\+?|\d)\d+$/.test(this);
		case "+i":	// 正整數
			return /(^\d+$)|(^\+?\d+$)/.test(this);	
		case "-i":	// 負整數
			return /^[-]\d+$/.test(this);
		case "f":	// 浮點數
			return /(^-?|^\+?|^\d?)\d*\.\d+$/.test(this);
		case "+f":	// 正浮點數
			return /(^\+?|^\d?)\d*\.\d+$/.test(this);	
		case "-f":	// 負浮點數
			return /^[-]\d*\.\d$/.test(this);	
		default:	// 預設
			return true;	
	}
}

// 是否是顏色(#FFFFFF形式)
String.prototype.IsColor = function() {
	var temp = this;
	if (temp === "") return true;
	if (temp.length !== 7) return false;
	return (temp.search(/\#[a-fA-F0-9]{6}/) !== -1);
}

// 轉換成全形
String.prototype.toCase = function() {
	var tmp = "";
	for (var i = 0; i < this.length; i++) {
		if (this.charCodeAt(i) > 0 && this.charCodeAt(i) < 255) {
			tmp += String.fromCharCode(this.charCodeAt(i) + 65248);
		} else {
			tmp += String.fromCharCode(this.charCodeAt(i));
		}
	}
	return tmp
}

// 對字串進行 Html 編碼
String.prototype.toHtmlEncode = function() {
	var str = this;
	str = str.replace(/&/g, "&amp;");
	str = str.replace(/</g, "&lt;");
	str = str.replace(/>/g, "&gt;");
	str = str.replace(/\'/g, "&apos;");
	str = str.replace(/\"/g, "&quot;");
	str = str.replace(/\n/g, "<br>");
	str = str.replace(/\ /g, "&nbsp;");
	str = str.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
	return str;
}

String.prototype.htmlEncode = function (encodeNewLine) {
	// encodeNewLine: 是否 encode 換行
    var s = this;
    s = s.replace(/&/g, '&amp;');
    s = s.replace(/</g, '&lt;');
    s = s.replace(/>/g, '&gt;');
    s = s.replace(/\'/g, '&apos;');
    s = s.replace(/'/g, '&quot;');
    if (encodeNewLine) {
        s = s.replace(/\r\n/g, '<br />');
        s = s.replace(/\r/g, '<br />');
        s = s.replace(/\n/g, '<br />');
    }
    return s;
}

// 轉換成日期
String.prototype.toDate = function() {
	try {
		return new Date(this.replace(/-/g, "\/"));
	} catch(e) {
		return null;
	}
}

/***************************************************** String 功能擴充 *****************************************************/


/***************************************************** Array 功能擴充 *****************************************************/

// Array each
Array.prototype.each = function(fn) {  
    fn = fn || Function.K;
    var a = [];
    var args = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < this.length; i++) {
		var res = fn.apply(this, [this[i], i].concat(args));
		if(res !== null) a.push(res);
    }
    return a;
};

// Array 是否包含指定元素
Array.prototype.contains = function(suArr) {
    for (var i = 0; i < this.length; i++) {  
		if (this[i] === suArr) return true;
    }
    return false;
};

// 不重複元素構成的 Array 
Array.prototype.uniquelize = function() {
    var ra = new Array();
    for (var i = 0; i < this.length; i++) {
		if (!ra.contains(this[i])) {
		    ra.push(this[i]);
		}
    }
    return ra;
};

// 兩個 Array 的補集
Array.complement = function(a, b) {  
     return Array.minus(Array.union(a, b), Array.intersect(a, b));
};

// 兩個 Array 的交集  
Array.intersect = function(a, b) {  
     return a.uniquelize().each(function(o) { return b.contains(o) ? o : null });
};

// 兩個 Array 的差集
Array.minus = function(a, b) {  
     return a.uniquelize().each(function(o) { return b.contains(o) ? null : o });
};

// 兩個 Array 並集
Array.union = function(a, b) {
     return a.concat(b).uniquelize();
};

// Array 刪除指定索引項目
Array.prototype.delete = function(delx, length) {
	if (isNaN(delx) || delx > this.length) return false;
	this.splice(delx, 1);
};

// Array ​​轉換成字串
Array.prototype.toString = function () {
	return this.join(",");
};

// Array 刪除指定值的項目
Array.prototype.deleteVale = function (delValue) {
	for (var i = this.length; i > 0; i--) {
		if (this[i] === delValue) this.splice(i, i);
	}
};
/***************************************************** Array 功能擴充 *****************************************************/
