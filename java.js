
var num=0;
var num1=0;
var cmd=null;

function num7_clicked()
{
    if(num==0)
    {
        num=7;
     document.getElementById('result').innerHTML= num;
    }
    else
    {
    num=(num*10)+7;
    document.getElementById('result').innerHTML=num;
    }
}
function num8_clicked()
{
    if(num==0)
    {
        num=8;
document.getElementById('result').innerHTML= num;
    }
    else
    {
        num=(num*10)+8;
        document.getElementById('result').innerHTML=num;
    }
}
function num9_clicked()
{
    if(num==0)
    {
        num=9;
document.getElementById('result').innerHTML= num;
    }
    else
    {
        num=(num*10)+9;
        document.getElementById('result').innerHTML=num;
    }
}
function num4_clicked()
{
    if(num==0)
    {
        num=4;
document.getElementById('result').innerHTML= num;
    }
    else
    {
        num=(num*10)+4;
        document.getElementById('result').innerHTML=num;
    }
}
function num5_clicked()
{
    if(num==0)
    {
        num=5;
document.getElementById('result').innerHTML= num;
    }
    else
    {
        num=(num*10)+5;
        document.getElementById('result').innerHTML=num;
    }
}
function num6_clicked()
{
    if(num==0)
    {
        num=6;
document.getElementById('result').innerHTML= num;
    }
    else
    {
        num=(num*10)+6;
        document.getElementById('result').innerHTML=num;
    }
}
function num3_clicked()
{
    if(num==0)
    {
        num=3;
document.getElementById('result').innerHTML= num;
    }
    else
    {
        num=(num*10)+3;
        document.getElementById('result').innerHTML=num;
    }
}
function num2_clicked()
{
    if(num==0)
    {
        num=2;
document.getElementById('result').innerHTML= num;
    }
    else
    {
        num=(num*10)+2;
        document.getElementById('result').innerHTML=num;
    }
}
function num1_clicked()
{
    if(num==0)
    {
        num=1;
document.getElementById('result').innerHTML= num;
    }
    else
    {
        num=(num*10)+1;
        document.getElementById('result').innerHTML=num;
    }
}
function num0_clicked()
{
    if(num==0)
    {
        num=0;
document.getElementById('result').innerHTML= num;
    }
    else
    {
        num=(num*10);
        document.getElementById('result').innerHTML=num;
    }
}
function add()
{   num1=num;
    num=0;
    cmd='add';
    document.getElementById('result').innerHTML= "+";  
}
function sub()
{
    num1=num;
    num=0;
    cmd='sub';
document.getElementById('result').innerHTML= "-";
}
function mul()
{
    num1=num;
    num=0;
    cmd='mul';
document.getElementById('result').innerHTML= "x";
}
function div()
{
    num1=num;
    num=0;
    cmd='div';
document.getElementById('result').innerHTML= "/";
}
function dot()
{
document.getElementById('result').innerHTML= ".";
}
function equal()
{
   if(cmd=='add')
    {
        
    document.getElementById('result').innerHTML=num1+num;
    num1=num1+num;
    num=0;
    }

    if(cmd=='sub')
    {
        
    document.getElementById('result').innerHTML=num1-num;
    num1=num1-num;
    num=0;
    }
    if(cmd=='mul')
    {
        if(num==0)
        {num=1;
    document.getElementById('result').innerHTML=num1*num;
         num1=num1*num;
        }
        else
        {
            document.getElementById('result').innerHTML=num1*num;
            num1=num1*num;
        }
    num=0;
    }
    if(cmd=='div')
    {
      if(num==0){
          num=1;
          document.getElementById('result').innerHTML=num1/num;
          num1=num1/num;
      }
      else{
    document.getElementById('result').innerHTML=num1/num;
      num1=num1/num;
    }
    num=0;
    }
}

function clr_clicked()
{
    num=0;
    num1=0;
    document.getElementById('result').innerHTML=num;
}