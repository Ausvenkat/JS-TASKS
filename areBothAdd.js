function areBothOdd(num1, num2)
{
  if(num1 < 0 || num2 < 0) 
    return "Invalid Input";
    
  return (num1%2==1 && num2%2==1);
}
