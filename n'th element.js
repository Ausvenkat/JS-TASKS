
function getNthElement(array, N)
{
  if(array.length==0)
  {
    return array[array.length];
  }
  else if(N >= array.length || N < 0 )
    return "Invalide Nth Element Input";
  else if(Array.isArray(array))
  {
    return array[N];
  }
}
