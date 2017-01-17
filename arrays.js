//Input: input array to process
var input = [[1,2,[3]],4,[[[5],6]]];
var output =[];

//call for the procedure
flattenArray(input,output);
console.log(output);


function flattenArray(array,output){
    //if there is no inner array, push the digit into the output
    if(array[0]== undefined){
        output.push(array);
    }
    for(var i=0; i<array.length; i++){
        //call for recursive function to proccess inner array
        flattenArray(array[i],output)
    }

}