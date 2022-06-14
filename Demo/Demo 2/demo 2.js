function cal() {
    let n = +document.getElementById('number').value;
    console.log(n);
    let sum = 0;
    let i;
    if(n < 0){
        document.getElementById("result").innerHTML = "Vui lòng nhập lại số";
        console.log(333);
    }
    else{
        for( i = 1; i <= n; i++) {sum = sum + i;}
        document.getElementById("result").innerHTML = "Kết quả: " + sum;
    }
}

