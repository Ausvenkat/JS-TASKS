function removeProperty(obj, key)
{
  if(obj.hasOwnProperty(key))
  {
    delete obj[key];
    return obj[key];
  }
  return "Error: " + '"'+ key +'"' + "is not a property of given object";
}
