const api='http://localhost:5000'
export const fetchMenu= async(params='all')=>{
    
    const res= await fetch(`${api}/menu/${params}`);
    const data= await res.json();
  
    return   data;
    
}