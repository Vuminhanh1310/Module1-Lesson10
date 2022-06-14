let num = +prompt("Enter a number: ");
alert(" số bạn vừa nhập là: " + num);
let total = num;
alert(" Tổng các số bạn vừa nhập là: " + num);

while( num != -1 ) {
    num = +prompt("Enter a number: ");
    alert(" số bạn vừa nhập là: " + num);
    //phần code tính tổng
    total += num;
    alert(" Tổng các số bạn vừa nhập là: " + total);
}