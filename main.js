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

    //console.log(soso1);

    }