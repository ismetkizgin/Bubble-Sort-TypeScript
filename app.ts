function BubbleSort(array: number[]) {
    let len: number = array.length;
    for (let i: number = 0; i < len; i++) {
        for (let j: number = 0; j < len; j++) {
            if (array[j] > array[j + 1]) {
                let tmp: number = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    return array;
}

let rndNumberArray: number[] = new Array(10);

for (let index: number = 0; index < 10; index++) {
    rndNumberArray[index] = Math.floor((Math.random() * 1000) + 1)
}
console.log(`\nRandom Number Array List: ${rndNumberArray} \n`);

console.log(`Array Sorting List: ${BubbleSort(rndNumberArray)}\n`);