class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement=previousOperandTextElement;
        this.currentOperandTextElement=currentOperandTextElement;
        this.clear();
    }

    clear(){
        this.currentOperand='';
        this.previousOperand='';
        this.operation=undefined;
    }

    delete(){
        this.currentOperand=this.currentOperand.toString().slice(0,-1);
    }

    appendNumber(number){
        if(number=='.' && this.currentOperand.includes('.'))return;
        this.currentOperand=this.currentOperand.toString()+number
    }

    chooseOperation(operator){
        if(this.currentOperand==='') return;
        if(this.previousOperand !==''){
            this.compute()
        }

        this.operation=operation;
        this.previousOperand=this.currentOperand;
    }

    compute(){
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        if(isNaN(prev) || isNaN(current)) return;

        switch(this.operation){
            case '+':
                computation=prev + current;
                break
            
            case '-':
                computation=prev - current;
                break

            case 'x':
                computation=prev * current;
                break

            case '÷':
                if (current===0){
                    computation="Error";
                }else{
                    computation=prev/current;
                }
                break
            
            default:
                return;
        }
        this.currentOperand=computation;
        this.operation=undefined;
        this.previousOperand='';
    }

    applyPercent(){
        if(this.currentOperand==='') return;
        this.currentOperand=(parseFloat(this.currentOperand)/100).toString();
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText=this.currentOperand;
        if(this.operation !== null){
            this.previousOperandTextElement.innerText=`${this.previousOperand} ${this.operation}`;
        }else{
            this.previousOperandTextElement.innerText='';
        }
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-action="operator"]');
const equalButton = document.querySelectorAll('[data-action="calculate"]');
const deleteButton = document.querySelectorAll('[data-action=""delete]');
const allClearButton = document.querySelectorAll('[data-action="clear"]');
const percentButton = document.querySelectorAll('[data-action="percent"]');
const previousOperandTextElement= document.getElementById('previous-operand');
const currentOperandTextElement= document.getElementById('current-operand');
