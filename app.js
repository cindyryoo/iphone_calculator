class Calculator{
    constructor(previousTextElement, currentTextElement) {
        this.previousTextElement = previousTextElement;
        this.currentTextElement = currentTextElement;
        this.clear();
    }
    clear(){
        this.currentText = '';
        this.previousText = '';
        this.operation = undefined;
    }
    appendNumber(number){
        if(number === '.' && this.currentText.includes('.')) return;
        this.currentText = this.currentText.toString() + number.toString()
    }
    calcuatePercentage(){
        let result;
        const prev = this.previousText;
        const curr = this.currentText;

        if(isNaN(prev) || isNaN(curr)) return;

        result = (curr / 100) * prev

        this.currentText = result;
    }
    chooseOperation(operation){
        if(this.currentText === '') return;
        
        if(this.previousText != ''){
            this.computeElements()
        }
        
        this.operation = operation;
        this.previousText = this.currentText;
        this.currentText = '';
    }
    compute(){
        let computation
        const prev = parseFloat(this.previousText)
        const curr = parseFloat(this.currentText)
        
        if(isNaN(prev) || isNaN(curr)) return
        
        switch(this.operation){
            case '+':
                computation = prev + curr
                break
            case '-':
                computation = prev - curr
                break
            case '×':
                computation = prev * curr
                break
            case '÷':
                computation = prev / curr
                break
            default:
                return
        }
        
        this.currentText = computation;
        this.operation = undefined
        this.previousText = ''
    }
    getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        
        if(isNaN(integerDigits)){
            integerDisplay = ''
        }
        else{
            integerDisplay = integerDigits.toLocaleString('en',{
                maximumFractionDigits: 0
            })
        }
        
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        }
        else{
            return integerDisplay
        }
    } 
    updateValue(){
        const max_number_length = 9;
        const precistion = 5;
        this.currentTextElement.innerText = this.getDisplayNumber(this.currentText)
        
        if(this.operation != null){
            this.previousTextElement.innerText = `${this.getDisplayNumber(this.previousText)} ${this.operation}`
        }
        else{ 
            this.previousTextElement.innerText = ''
        }
    }
}

const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const previousTextElement = document.querySelector('.preValue'); 
const currentTextElement = document.querySelector('.value');
const clearBtn = document.querySelector('.clear');
const pmBtn = document.querySelector('.pm');
const percentBtn = document.querySelector('.percent');
const operationBtn = document.querySelectorAll('.operation');
const equalBtn = document.querySelector('.equal');
const decimalBtn = document.querySelector('.decimal');
const numberBtn = document.querySelectorAll('.number');

const calculator = new Calculator(previousTextElement, currentTextElement);

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateValue();
})
});

operationBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerHTML);
        calculator.updateValue();
    })
});

equalBtn.addEventListener('click', () => {
    calculator.compute();
    calculator.updateValue();
})
clearBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.updateValue();
})
percentBtn.addEventListener('click', () => {
    calculator.calcuatePercentage();
    calculator.updateValue();
})





//time 

const updateTime = () => {
    const currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    hour.innerHTML = currentHour.toString();
    minute.innerHTML = currentMinute.toString().padStart(2,'0');
};

setInterval(updateTime,1000);
updateTime();
