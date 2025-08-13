let word = "javascript";

// empty frequency map 
let freq_mpp = {};

for(let char of word)
{
    if(freq_mpp[char]) // if the key is not there it will return undefined
    {
        freq_mpp[char]+=1;;
    }
    else{
        freq_mpp[char] = 1;
    }
}
// these . accesor will give us wrong output 

// use [] instead


console.log(freq_mpp);

