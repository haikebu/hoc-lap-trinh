function tinhtoan() 
{
    let ten = document.getElementById("ten").value;
    let birthday = document.getElementById("birthday").value;
    let y1 = Number(document.getElementById("birthday").value[0]);
    let y2 = Number(document.getElementById("birthday").value[1]);
    let y3 = Number(document.getElementById("birthday").value[2]);
    let y4 = Number(document.getElementById("birthday").value[3]);
    let m1 = Number(document.getElementById("birthday").value[5]);
    let m2 = Number(document.getElementById("birthday").value[6]);
    let d1 = Number(document.getElementById("birthday").value[8]);
    let d2 = Number(document.getElementById("birthday").value[9]);
    let tong = y1 + y2 + y3 + y4 + m1 + m2 + d1 + d2; 
    if ((tong<=11) || (tong==22))  
    {
        let cscd = tong;
        document.getElementById("consochudao").innerHTML = ('Con số chủ đạo của bạn là: ' + cscd);
    }
    else 
    {
        let t1 = tong%10;
        let t2 = (tong - (tong%10))/10;
        let cscd = t1 + t2;
        if (cscd>11)
        {
            let t1 = cscd%10;
            let t2 = (cscd - (cscd%10))/10;
            cscd = t1 + t2;
            document.getElementById("consochudao").innerHTML = ('Con số chủ đạo của bạn là: ' + cscd);
        }
        document.getElementById("consochudao").innerHTML = ('Con số chủ đạo của bạn là: ' + cscd);
    };
    let consotrongngaysinh =[y1,y2,y3,y4,m1,m2,d1,d2];
    let soso1 = 0;
for(let i = 0; i < consotrongngaysinh.length; ++i)
{
    if(consotrongngaysinh[i] == 1)
        soso1++;
}
if (soso1==1) 
{
    document.getElementById("conso1").innerHTML = ('1 ')
}
if (soso1==2) 
{
    document.getElementById("conso1").innerHTML = ('11')
}
if (soso1==3) 
{
    document.getElementById("conso1").innerHTML = ('111')
}
if (soso1==4) 
{
    document.getElementById("conso1").innerHTML = ('1111')
}
if (soso1==5) 
{
    document.getElementById("conso1").innerHTML = ('11111')
}
if (soso1==6) 
{
    document.getElementById("conso1").innerHTML = ('111111')
}
if (soso1==7) 
{
    document.getElementById("conso1").innerHTML = ('1111111')
}
if (soso1==8) 
{
    document.getElementById("conso1").innerHTML = ('11111111')
}
let soso2 = 0;
for(let i = 0; i < consotrongngaysinh.length; ++i)
{
    if(consotrongngaysinh[i] == 2)
        soso2++;
}
if (soso2==1) 
{
    document.getElementById("conso2").innerHTML = ('2')
}
if (soso2==2) 
{
    document.getElementById("conso2").innerHTML = ('22')
}
if (soso2==3) 
{
    document.getElementById("conso2").innerHTML = ('222')
}
if (soso2==4) 
{
    document.getElementById("conso2").innerHTML = ('2222')
}
if (soso2==5) 
{
    document.getElementById("conso2").innerHTML = ('22222')
}
if (soso2==6) 
{
    document.getElementById("conso2").innerHTML = ('222222')
}
if (soso2==7) 
{
    document.getElementById("conso2").innerHTML = ('2222222')
}
let soso3 = 0;
for(let i = 0; i < consotrongngaysinh.length; ++i)
{
    if(consotrongngaysinh[i] == 3)
        soso3++;
}
if (soso3==1) 
{
    document.getElementById("conso3").innerHTML = ('3')
}
if (soso3==2) 
{
    document.getElementById("conso3").innerHTML = ('33')
}
if (soso3==3) 
{
    document.getElementById("conso3").innerHTML = ('333')
}
if (soso3==4) 
{
    document.getElementById("conso3").innerHTML = ('3333')
}
if (soso3==5) 
{
    document.getElementById("conso3").innerHTML = ('33333')
}
if (soso3==6) 
{
    document.getElementById("conso3").innerHTML = ('333333')
}
let soso5 = 0;
for(let i = 0; i < consotrongngaysinh.length; ++i)
{
    if(consotrongngaysinh[i] == 5)
        soso5++;
}
if (soso5==1) 
{
    document.getElementById("conso5").innerHTML = ('5')
}
if (soso5==2) 
{
    document.getElementById("conso5").innerHTML = ('55')
}
if (soso5==3) 
{
    document.getElementById("conso5").innerHTML = ('555')
}
if (soso5==4) 
{
    document.getElementById("conso5").innerHTML = ('5555')
}
if (soso5==5) 
{
    document.getElementById("conso5").innerHTML = ('55555')
}
if (soso5==6) 
{
    document.getElementById("conso5").innerHTML = ('555555')
}
let soso6 = 0;
for(let i = 0; i < consotrongngaysinh.length; ++i)
{
    if(consotrongngaysinh[i] == 6)
        soso6++;
}
if (soso6==1) 
{
    document.getElementById("conso6").innerHTML = ('6')
}
if (soso6==2) 
{
    document.getElementById("conso6").innerHTML = ('66')
}
if (soso6==3) 
{
    document.getElementById("conso6").innerHTML = ('666')
}
if (soso6==4) 
{
    document.getElementById("conso6").innerHTML = ('6666')
}
if (soso6==5) 
{
    document.getElementById("conso6").innerHTML = ('66666')
}
if (soso6==6) 
{
    document.getElementById("conso6").innerHTML = ('666666')
}
let soso7 = 0;
for(let i = 0; i < consotrongngaysinh.length; ++i)
{
    if(consotrongngaysinh[i] == 7)
        soso7++;
}
if (soso7==1) 
{
    document.getElementById("conso7").innerHTML = ('7')
}
if (soso7==2) 
{
    document.getElementById("conso7").innerHTML = ('77')
}
if (soso7==3) 
{
    document.getElementById("conso7").innerHTML = ('777')
}
if (soso7==4) 
{
    document.getElementById("conso7").innerHTML = ('7777')
}
if (soso7==5) 
{
    document.getElementById("conso7").innerHTML = ('77777')
}
if (soso7==6) 
{
    document.getElementById("conso7").innerHTML = ('777777')
}
let soso8 = 0;
for(let i = 0; i < consotrongngaysinh.length; ++i)
{
    if(consotrongngaysinh[i] == 8)
        soso8++;
}
if (soso8==1) 
{
    document.getElementById("conso8").innerHTML = ('8')
}
if (soso8==2) 
{
    document.getElementById("conso8").innerHTML = ('88')
}
if (soso8==3) 
{
    document.getElementById("conso8").innerHTML = ('888')
}
if (soso8==4) 
{
    document.getElementById("conso8").innerHTML = ('8888')
}
if (soso8==5) 
{
    document.getElementById("conso8").innerHTML = ('88888')
}
if (soso8==6) 
{
    document.getElementById("conso8").innerHTML = ('888888')
}
let soso9 = 0;
for(let i = 0; i < consotrongngaysinh.length; ++i)
{
    if(consotrongngaysinh[i] == 9)
        soso9++;
}
if (soso9==1) 
{
    document.getElementById("conso9").innerHTML = ('9')
}
if (soso9==2) 
{
    document.getElementById("conso9").innerHTML = ('99')
}
if (soso9==3) 
{
    document.getElementById("conso9").innerHTML = ('999')
}
if (soso9==4) 
{
    document.getElementById("conso9").innerHTML = ('9999')
}
if (soso9==5) 
{
    document.getElementById("conso9").innerHTML = ('99999')
}
if (soso9==6) 
{
    document.getElementById("conso9").innerHTML = ('999999')
}
let mangso1 = [];
for (let i = 0; i < ten.length; i++) {
    let chucai1 = ten[i];
    chucai1 = chucai1.toLowerCase()
    if ((chucai1 == "a")||(chucai1 == "j")||(chucai1 == "s")){mangso1.push("1")
    document.getElementById("ten1").innerHTML = (mangso1)}
}
let mangso2 = [];
for (let i = 0; i < ten.length; i++) {
    let chucai2 = ten[i];
    chucai2 = chucai2.toLowerCase()
    if ((chucai2 == "b")||(chucai2 == "k")||(chucai2 == "t")){mangso2.push("2")
    document.getElementById("ten2").innerHTML = (mangso2)}  
}
let mangso3 = [];
for (let i = 0; i < ten.length; i++) {
    let chucai3 = ten[i];
    chucai3 = chucai3.toLowerCase()
    if ((chucai3 == "c")||(chucai3 == "l")||(chucai3 == "u")){mangso3.push("3")
    document.getElementById("ten3").innerHTML = (mangso3)}  
}
let mangso4 = [];
for (let i = 0; i < ten.length; i++) {
    let chucai4 = ten[i];
    chucai4 = chucai4.toLowerCase()
    if ((chucai4 == "d")||(chucai4 == "m")||(chucai4 == "v")){mangso4.push("4")
    document.getElementById("ten4").innerHTML = (mangso4)}  
}
let mangso5 = [];
for (let i = 0; i < ten.length; i++) {
    let chucai5 = ten[i];
    chucai5 = chucai5.toLowerCase()
    if ((chucai5 == "e")||(chucai5 == "n")||(chucai5 == "w")){mangso5.push("5")
    document.getElementById("ten5").innerHTML = (mangso5)}  
}
let mangso6 = [];
for (let i = 0; i < ten.length; i++) {
    let chucai6 = ten[i];
    chucai6 = chucai6.toLowerCase()
    if ((chucai6 == "f")||(chucai6 == "o")||(chucai6 == "x")){mangso6.push("5")
    document.getElementById("ten5").innerHTML = (mangso6)}  
}
let mangso7 = [];
for (let i = 0; i < ten.length; i++) {
    let chucai7 = ten[i];
    chucai7 = chucai7.toLowerCase()
    if ((chucai7 == "g")||(chucai7 == "p")||(chucai7 == "y")){mangso7.push("7")
    document.getElementById("ten7").innerHTML = (mangso7)}  
}
let mangso8 = [];
for (let i = 0; i < ten.length; i++) {
    let chucai8 = ten[i];
    chucai8 = chucai8.toLowerCase()
    if ((chucai8 == "h")||(chucai8 == "q")||(chucai8 == "z")){mangso8.push("8")
    document.getElementById("ten8").innerHTML = (mangso8)}  
}
let mangso9 = [];
for (let i = 0; i < ten.length; i++) {
    let chucai9 = ten[i];
    chucai9 = chucai9.toLowerCase()
    if ((chucai9 == "i")||(chucai9 == "r")){mangso9.push("9")
    document.getElementById("ten9").innerHTML = (mangso9)}  
}
}