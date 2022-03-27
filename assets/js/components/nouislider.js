/* Range Slider JS (полоска цены в сайдбаре)
====================================== */

const rangeSlider = document.getElementById('range-slider');

if(rangeSlider) {

    noUiSlider.create(rangeSlider, {
    start: [500, 999999],
    connect: true,
    step: 1,
    range: {
        'min': [3000],
        'max': [30000]
    }
});
    const input_1 = document.getElementById('ui_1');
    const input_2 = document.getElementById('ui_2');
    const inputs = [input_1, input_2];

    rangeSlider.noUiSlider.on('update', function(values, handle){
        inputs[handle].value = Math.round(values[handle]);
    });

    const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;

        rangeSlider.noUiSlider.set(arr);
    };

    inputs.forEach((el, index) => {
        el.addEventListener('change', (e) =>{
            setRangeSlider(index, e.currentTarget.value);
        });
    });
};