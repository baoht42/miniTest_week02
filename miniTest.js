//Bai 1
function bai1() {
    let arrayEx1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let len = arrayEx1.length

    for (let i = 0; i < len; i++) {
        if (arrayEx1[i] % 2 === 0) {
            document.write(arrayEx1[i] +"<br>")
        }
    }
}

//Bai 2
function bai2() {
    let arrayEx2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,2,4,5,6,7,8,6];
    let a = +prompt("Nhap phan tu a: ");
    let found = false;

    for (let i = 0 ; i < arrayEx2.length; i++) {
        if (arrayEx2[i] === a) {
            document.write(`Phần tử ${a} được tìm thấy tại vị trí ${i+1} <br>`);
            found = true;
            /// IN RA TAT CA PHAN TU GIONG A ==> KO CAN BREAK;
        }
    }

    if (!found) {
        document.write(`Không có phần tử nào bằng ${a}`);
    }
}
//ham xet so nguyen to
function isPrime(num) {
    if (num < 2) {
        return false;
    } else {
        if (num > 3) {
            for (let i = 2; i < num; i++) {
                if (num % i == 0) {
                    return false;
                }
            }
        }return true;
    }

}
//Bai 3
function  bai3() {
    let arrayEx3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,2,4,5,6,7,8,6];
    let sumOfPrime = 0;
    let countOfPrime =0;

    for (let i = 0; i <arrayEx3.length ; i++) {
        if (isPrime(arrayEx3[i])){
            sumOfPrime += arrayEx3[i];
            countOfPrime++;
        }

    }
    document.write("Cac so nguyen to " + arrayEx3.filter(isPrime).join(", ")+"<br>");
    document.write("Tong la cac so nguyen to la: " + sumOfPrime);
}

function bai4(){
    let sumOfPrime500 = 0;

    for (let i = 0; i < 500; i++) {
        if (isPrime(i)){
            sumOfPrime500 += i;
        }
    }
    document.write("Tong cac so nguyen to nho hon 500 la: " + sumOfPrime500);
}