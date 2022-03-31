const chooseOptimalDistance = (t, k, ls) => {
    if ((ls.length >= k) && (k>=1) && (t>=0)){
        const filteredArr = [];
        let index = 0;
        while (index < ls.length) {
            filteredArr.push(ls.slice(index, k + index));
            index += k;
          }
        let arrOfSum = [];
        for (i = 0; i < filteredArr.length; i++){
            
            let subArr = filteredArr[i];
            let sum = 0;
            for(j = 0; j < subArr.length; j++){
                sum += subArr[j];
                if(sum <= t){
                    arrOfSum.push(sum);
                }
            }
        }
        return Math.max(...arrOfSum);
    }
    return null;
}
