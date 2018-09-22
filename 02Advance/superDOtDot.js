function deposit(...money) {
    console.log(money);
    let balance = 0;
    for (let i = 0; i < money.length; i++) {
        balance += money[i]
    }
    return balance
}

console.log('--' + deposit(100, 40, 50, 30))

let addMoney = [34, 66, 99, 24, 36]

console.log(...addMoney)
console.log(Math.max(34, 66, 99, 24, 36))
console.log(Math.max(addMoney))
console.log(Math.max(...addMoney))