export function generateRandomArray(length: number) {
  const arr = new Array(length);
  
  for (let i=0;i<length;i++){
     let partnerIndex=0

     do{
         partnerIndex=Math.floor(Math.random()*length)
     } while (partnerIndex===i)

     arr[i]=arr[i]?arr[i]:i+1
     arr[partnerIndex]=arr[partnerIndex]?arr[partnerIndex]:partnerIndex+1

     const swapNumber=arr[i]
     arr[i]=arr[partnerIndex]
     arr[partnerIndex]=swapNumber
    
    }
  

    Array.from({length})
  return arr
}
