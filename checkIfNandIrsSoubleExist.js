const checkIfExist = (arr) => {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length; ++j) {
            if (i != j) {
                if (arr[i] == 2 * arr[j]) {
                    return true
                }
            }
        }
    }
    return false;
}
const arr2 = [10, 2, 5, 3]
const arr = [10, 2, 7, 3]
console.log(checkIfExist(arr2));