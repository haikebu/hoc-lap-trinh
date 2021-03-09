function tinhtoan() {
    let ten = document.getElementById("ten").value;
    let birthday = document.getElementById("birthday").value;
    let y1 = document.getElementById("birthday").value[0];
    y1 = Number(y1);
    let y2 = document.getElementById("birthday").value[1];
    y2 = Number(y2);
    let y3 = document.getElementById("birthday").value[2];
    y3 = Number(y3);
    let y4 = document.getElementById("birthday").value[3];
    y4 = Number(y4);
    let m1 = document.getElementById("birthday").value[5];
    m1 = Number(m1);
    let m2 = document.getElementById("birthday").value[6];
    m2 = Number(m2);
    let d1 = document.getElementById("birthday").value[8];
    d1 = Number(d1);
    let d2 = document.getElementById("birthday").value[9];
    d2 = Number(d2);
    let tong = y1 + y2 + y3 + y4 + m1 + m2 + d1 + d2; 
    alert(tong);
}