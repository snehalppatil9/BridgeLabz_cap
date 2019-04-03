module.exports={
    dArray() {
    try {
      var arr = [];
      var array = [
        ["0-100 "],
        ["100-200 "],
        ["200-300 "],
        ["300-400 "],
        ["400-500 "],
        ["500-600 "],
        ["600-700 "],
        ["700-800 "],
        ["800-900 "],
        ["900-1000 "]
      ];
      for (let i = 2; i < 1000; i++) {
        if (this.isPrime(i)) {
          arr.push(i);
        }
      }
        var range = 100,
        k = 0;
        for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (this.isAnagram(arr[i], arr[j])) {
            if (arr[i] <= range) {
              if (arr[j] <= range) {
                array[k].push(arr[i]);
                array[k].push(arr[j]);
              }
            } else {
              range = range + 100;
              k++;
              if (arr[j] <= range) {
                array[k].push(arr[i]);
                array[k].push(arr[j]);
              }
            }
          }
        }
      }
      console.log("The Number which are prime and anagram ");
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
          take.print(array[i][j]);
          if (j == 0) {
            take.print(" : ");
          } else {
            if (j != array[i].length - 1) take.print(",");
          }
        }
        console.log();
      }
    } catch (error) {
      console.log(error.message);
    }
    }

}