function fun()
{
    number=document.getElementById('number').value;
    number=Number(number);
    console.log(number)
    rendomNumber=Math.round(Math.random()*10);
    console.log(rendomNumber)
    if(rendomNumber == number)
    {
        console.log('Good Work')
    }
    else
    {
        console.log('Not Matched')
    }
}