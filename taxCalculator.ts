

export function calculateTax(param:number,prodCategory?:string): number{
   if(prodCategory=== 'groceries'){
        return param * 3 // 3% 
   }else {
       return param * 4.75 // 4.75%
    }
}