module.exports = function cpAttr(a,b){
    var attrs = a.attributes;
    for(var i= 0,len=attrs.length ; i<len;i++){
        b.setAttribute(attrs[i].nodeName,attrs[i].value);
    }
}