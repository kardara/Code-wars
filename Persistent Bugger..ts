export function persistence(num: number): number {
  
  let count: number= 0
  
  while(num>=10){
    num=num.toString().split('').reduce((p,i)=>p*parseInt(i),1)
    count++
  }
  return count

}