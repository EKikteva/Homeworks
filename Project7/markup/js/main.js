let n = prompt('Введите число', '');
if (n == 1 || n % 100 == 1 || n % 10 == 1){
    alert(n + 'товар');
}else if (n%100 > 5 && n%100 < 20  || n % 10 >= 5 && n % 10 <= 9 || n % 10 == 0 || n > 5 && n < 20){
    alert(n + 'товаров');
}else if (n > 1 && n < 5 || n % 10 > 1 && n % 10 < 5 ){
    alert(n + 'товара');
}