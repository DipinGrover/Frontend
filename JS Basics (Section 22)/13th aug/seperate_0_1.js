function swap(arr, i,j)
{
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

function seperator(arr)
{
    let i = 0;
    let j = arr.length - 1;

    while(i <=j)
    {
        // left of i will store 0 values 
        // right of j will store 1 values 

        if(arr[i] == 1)
        {
            swap(arr , i , j);
            j--;
            // right of j will store all 1
        }
        else{
            i++; 
            // left of i will store all 0
        }
    }
}


let arr = [1,1,1,0,0,1,1,0,1,1];
console.log(arr);

seperator(arr);
console.log(arr);

