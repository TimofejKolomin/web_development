let i;
let count = -1;
let sum = 0;
while (i != 0) 
{
    i = window.prompt('Введите число');
    if (i === 0)
        break;
    else
        sum += parseInt(i);
        count += 1;
}
window.document.write('<p> Среднее арифметическое чисел: ',sum / count, ' </p>');


