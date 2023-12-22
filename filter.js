function filter(list, filterFunction){
    filteredList = []
    for(i=0;i<list.length;i++){
        if(filterFunction(list[i])){
            filteredList.push(list[i])
        }
    }
    return filteredList
}

function forEach(list, callBackFunction){
    for(i=0;i<list.length;i++){
        callBackFunction(list[i])
    }
}

function map(list, transformFunction){
    transformedList = []
    for(i=0;i<list.length;i++){
        new_item = transformFunction(list[i])
        transformedList.push(new_item)
    }
    return transformedList
}

function reduce(list, accumalationFunction, initalValue){
    accumalatedValue = initalValue
    for(i=0;i<list.length;i++){
        accumalatedValue = accumalationFunction(accumalatedValue, list[i])
    }
    return accumalatedValue
}

sampleList = [1,2,3,4,5,6,7,8]

function evenOnly(item){
    return item%2==0
}

function showDouble(item){
    console.log(item*2)
}

function square(item){
    return item*item
}

function sum(currentValue, item){
    return currentValue+item
}

console.log("Given list: ")
console.log(sampleList)

console.log("\nFiltering only even items: ")
console.log(filter(sampleList,evenOnly))

console.log("\nPrinting double forEach item: ")
forEach(sampleList,showDouble)

console.log("\nMapping each item to its square: ")
console.log(map(sampleList,square))

console.log("\nReducing to sum: ")
console.log(reduce(sampleList,sum,0))