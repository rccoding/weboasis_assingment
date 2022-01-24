var arr1=['1','0','1'];
    var arr2=['1','0','1'];
    var temp=0,carry=0,res='';
    var str1=arr1.join('');
    var str2=arr2.join('');
    if(str1.length > str2.length){
        var l=str1.length-str2.length;
        for(var i=0;i<l;i++){
            str2='0'+str2;
        }
    }
    if(str2.length > str1.length){
        var l=str2.length-str1.length;
        for(var i=0;i<l;i++){
            str1='0'+str1;
        }
    }
    for(var i=Math.max(str1.length,str2.length)-1;i>=0;i--){
        var a=+str1[i];
        var b=+str2[i];
        if(a+b+carry>1){
            temp=0;
            carry=1;
        }
        else{
            temp=a+b+carry;
            carry=0;
        }
        res=temp+res;
    }
    if(carry){
        res=carry+res;
    }
    console.log(res.split(''));