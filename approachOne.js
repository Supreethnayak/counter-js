let value = 0;

document.getElementById('btnIncrease').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('countValue').textContent = ++value;
    if(value>0){
        document.getElementById('countValue').style.color = 'green';
    }
    if(value===0){
        document.getElementById('countValue').style.color = 'black';
    }
})
document.getElementById('btnDecrease').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('countValue').textContent = --value;
    if(value<0){
        document.getElementById('countValue').style.color = 'red';
    }
    if(value===0){
        document.getElementById('countValue').style.color = 'black';
    }
})
document.getElementById('btnReset').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('countValue').textContent = 0;
    document.getElementById('countValue').style.color = 'black';
})