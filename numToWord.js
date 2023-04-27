function numClick(){
    var num=parseInt(document.getElementById("txtnum").value);
    console.log(num);
    var words=document.getElementById("msg");
    var hun="hundred";
    var ones=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen",
        "Eighteen","Nineteen","Twenty","Twenty-one","Twenty-two","Twenty-three","Twenty-four","Twenty-five","Twenty-six","Twenty-seven"	,"Twenty-eight","Twenty-nine","Thirty","Thirtyone","Thirtytwo","Thirtythree","Thirtyfour","Thirtyfive","Thirtysix","Thirtyseven","Thirtyeight","Thirtynine","Forty","Forty-one",
        "Forty-two","For-three","Forty-four","Forty-five","Forty-six","Forty-seven","Forty-eight","Forty-nine","Fifty","Fifty-one","Fifty-two","Fifty-three","Fifty-four",
        "Fifty-five","Fifty-six","Fifty-seven","Fifty-eight","Fifty-nine","Sixty","Sixty-one","Sixty-two","Sixty-three"	,"Sixty-four","Sixty-five","Sixty-six","Sixty-seven"	
        ,"Sixty-eight","Sixty-nine","Seventy","Seventy-one","Seventy-two","Seventy-three","Seventy-four","Seventy-five"	,"Seventy-six","Seventy-seven","Seventy-eight"
        ,"Seventy-nine","Eighty","Eighty-one","Eighty-two","Eighty-three","Eighty-four","Eighty-five","Eighty-six","Eighty-seven","Eighty-eight","Eighty-nine"
        ,"Ninety","Ninety-one","Ninety-two","Ninety-three","Ninety-four","Ninety-five","Ninety-six","Ninety-seven","Ninety-eight","Ninety-nine" ];
            if(num<100){
                words.innerHTML=ones[num];  
            }
            else if(num>=100 && num<1000){
                var partb=num%100;
                var parta=Math.floor(num/100);
                    if(partb==0){
                        words.innerHTML=`${ones[parta]} hundred`;
                    }
                    else{
                        words.innerHTML=`${ones[parta]} Hundred ${ones[partb]}`;
                    }
                
            }
            else{
                words.innerHTML="Number must be 1 to 999";
            }
}

