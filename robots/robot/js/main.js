(function () {
    'use strict';
    let runBtn = document.querySelector('#runBtn'),
        rangeInput = document.querySelectorAll('.input-range'),
        toast = document.querySelector('#liveToast');

    runBtn.onclick = () => {
        runBtn.nextElementSibling.classList.remove('disabled');
        runBtn.nextElementSibling.disabled = false;
        rangeInput.forEach(range => {
            range.classList.remove('disabled');   
            range.disabled = false;
            range.oninput = function() {
                this.previousElementSibling.children[0].innerHTML = parseInt((this.value-this.min)/(this.max-this.min)*100);
            };
        })
        toast.classList.add('show');
        toast.classList.remove('hide');
        toast.querySelector('.toast-body').innerHTML = 'تم تشغيل المحركات بنجاح';
        setTimeout(() => {
            toast.classList.remove('show');
            toast.classList.add('hide');
        }, 3000)
    }

})()