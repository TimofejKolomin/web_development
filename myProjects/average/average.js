function average() 
{
    let l = arguments.length, i;
    let sum = 0;
    let count = 0;
    for (i = 0; i < l; i++)
    {
        if (typeof(arguments[i]) == 'object')
        {
            for (let g = 0; g < l; g++)
            {
                if (typeof(arguments[i][g]) == 'number') 
                {
                    sum += arguments[i][g];
                    count += 1;
                }
            }
        }
        else if (typeof(arguments[i]) == 'number')
        {
            sum += arguments[i];
			count += 1;
        }
    }
    return sum / count;
}
window.document.write('<h1> Среднее арифметическое числе: ', average('[10, 20]', 30, [40,'50'], 60, ['70, 80', 90, 100]),'</h1>');
// ('[10, 20]', 30, [40,'50'], 60, ['70, 80', 90, 100])