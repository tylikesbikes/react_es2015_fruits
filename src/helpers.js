/**
 * given an array, choose a random item from that array
 * 
 */

const choice = (arr) => {
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
}


/**
 * given an array, and an item in that array,
 * remove a specific item from the array and return that item
 * as well as the array with the item removed
 * 
 * if item is not found in the array, return undefined
 * 
 */

function remove(item, arr) {
    const itemIdx = arr.indexOf(item);
    
    if (itemIdx === -1) {
        return undefined;
    }

    arr.splice(itemIdx,1);

    return arr;
}

export {choice, remove}