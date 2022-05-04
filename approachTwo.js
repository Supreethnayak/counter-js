let value = 0;
let countValue = document.querySelector('#countValue');
let buttons = document.querySelectorAll('.btn');// creates a NodeList
buttons.forEach(function(item){// each item
    item.addEventListener('click', function(event){// event object
        event.preventDefault()
        const clickkedBtn = event.currentTarget.classList;// get all class names
        if(clickkedBtn.contains('increase')){// check specific class name
            ++value;
        }
        else if(clickkedBtn.contains('decrease')){
            --value;
        }
        else{
            value = 0;
        }
        if(value>0){
            countValue.style.color = 'green';
        }
        else if(value<0){
            countValue.style.color = 'red';
        }
        if(value==0){
            countValue.style.color = 'black';
        }
        countValue.textContent = value;
    })
})