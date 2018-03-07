module.exports = function longestConsecutiveLength(array) {
    if(array.length <= 1) return array.length;
    
    array.sort(function(a, b) {
        return a - b;
    });
    
    deleteEqualsElements();
    
    let maxLength = 1;
    let maxRememberLenght = -1;
    for (let i = 1; i < array.length; i++) {
        if((array[i] - array[i - 1]) == 1) {
            maxLength++;
        } else {
            if(maxRememberLenght < maxLength) {
                maxRememberLenght = maxLength;
            }
            
            maxLength = 1;
        }
    }
    
    return maxRememberLenght > maxLength ? maxRememberLenght : maxLength;
    
    
    function deleteEqualsElements() {
        for (var q = 1, i = 1; q < array.length; ++q) {
            if (array[q] !== array[q - 1]) {
                array[i++] = array[q];
            }
        }

        array.length = i;
        return array;
    }
}