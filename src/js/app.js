export default function orderByProps(obj, order) {
    const orderArr = [];
    const secondOrderArr = [];

    for (const key in obj) {
        if (order.includes(key)) {
            orderArr.push({key, value: obj[key]});
        }else {
            secondOrderArr.push({key, value: obj[key]});
        }
    }

    secondOrderArr.sort((a, b) => a.key > b.key ? 1 : -1);
    
    return([...orderArr, ...secondOrderArr]);
}