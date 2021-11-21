export const authorization = (component:any)=>{
  const cookies = document.cookie;
  console.log(cookies);
  return component
}