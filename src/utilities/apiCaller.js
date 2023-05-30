export const fetchMenu= async()=>{
    
    const res= await fetch('./menu.json');
    const data= await res.json();
    return   data;
    
}