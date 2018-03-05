function pascalTriangle(){
    let arr =[];
    let  i, j;

    for(i = 1; i < 10 ; i++)
    {
        arr[i] = 0;
    }

    arr[0] = 1;
    for(j = 1; j < 10; j++)
    {
        for(i = j; i >= 1 ; i--)
        {
            document.write (arr[i-1]);
            arr[i] = arr[i-1] + arr[i];
            document.write(' ');
        }
        document.write('<br/>');

    }
    for(i = 0; i < 10 ; i++)
    {
        document.write (arr[i]);
        document.write(' ');
    }
}
pascalTriangle();


