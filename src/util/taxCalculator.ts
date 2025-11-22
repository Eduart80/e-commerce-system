

export function calculateTax(param:number,prodCategory?:string): number{
   if(prodCategory=== 'groceries'){
        return param * 0.03 //3%    
    }else {
       return param * 0.0475 // 4.75%
    }
}