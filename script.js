// Selectors
const depositBtnChecking = document.getElementById("checking-deposit-btn")
const withdrawBtnChecking = document.getElementById("checking-withdraw-btn")
const inputChecking = document.getElementById("checking-input")
const displayBalChecking = document.getElementById("checking")

console.log(depositBtnChecking)
console.log(withdrawBtnChecking)
console.log(inputChecking)
console.log(displayBalChecking)

let totalBalance = Number(displayBalChecking.innerText)
console.log(totalBalance)

// Listener 
depositBtnChecking.addEventListener('click', depositHandler)
withdrawBtnChecking.addEventListener('click', withdrawHandler)


// Handler
function depositHandler() {
    // checks if deposit is a number
    if (isNaN(inputChecking.value)) {
        alert("Please enter a number.");
        return inputChecking.value = '';
    } else {

    // checks if deposit meets parameters
        if (inputChecking.value < 0.01 || inputChecking.value > 10000) {
            alert("You can only deposit between $0.01 and $10,000.")
            return inputChecking.value = '';
        } else {
    
        // calculate Total Balance
        totalBalance += (Number(inputChecking.value));
        document.getElementById("checking").innerText = totalBalance;
        }
    }
    return inputChecking.value = '';
    // console.log("deposited")
}

function withdrawHandler() {
    // checks if withdrawal is a number
    if (isNaN(inputChecking.value)) {
        alert("Please enter a number.");
        return inputChecking.value = '';
    } else {

        // checks if withdrawal meets parameters
        if (inputChecking.value > totalBalance) {
            alert("Your total balance cannot drop below $5.");
            return inputChecking.value = '';
        } else {

        // calculate Total Balance
        totalBalance -= (Number(inputChecking.value));

        document.getElementById("checking").innerText = totalBalance;
        return inputChecking.value = '';
        }
    }
    // console.log("withdraw")
}

