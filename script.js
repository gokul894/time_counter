
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const startbtn = document.querySelector('.btn-start');
const endbtn = document.querySelector('.btn-end');
const resetbtn = document.querySelector('.btn-reset');


let hourVal;
let minuteVal;
let secondVal;

let resetCall = false;
let endCall = false;
// let setValueToggle;


startbtn.addEventListener('click', (e)=>{
    resetCall = false;
    endCall = false;
    e.preventDefault();
    // console.log('you clicked')
    let hourV = hour.value;
    let minuteV = minute.value;
    let secondV = second.value;

    hourVal = +hourV;
    minuteVal = +minuteV;
    secondVal = +secondV;

    if(!secondV){
        secondVal = 0;
    }else{
        if(+secondV > 60){
            secondVal = +secondV - 60;
            minuteVal += + 1; 
        }else{
            secondVal = secondVal;
        }
    }

    if(!minuteV){
        minuteVal = 0;
    }else{
        if(+minuteV > 60){
            minuteVal = +minuteV - 60;
            hourVal += 1;
            // console.log(hourVal) 
        }else{
            minuteVal = minuteVal;
        }
    }

    if(!hourV){
        hourVal = 0;
    }else{
        hourVal = hourVal;
    }

    setValues(hourVal, minuteVal, secondVal);

    resetbtn.addEventListener('click', (e)=>{
        e.preventDefault();
        resetCall = true;
    });

    endbtn.addEventListener('click', (e)=>{
        e.preventDefault();
        endCall = true;
    })

})


const setValues = (h, m, s)=>{

    hour.value = h;
    minute.value = m;
    second.value = s;
    let tempH = h;
    let tempM = m;
    let tempS = s;


    if(tempS === 0){
        if(tempM === 0){
            if(tempH === 0){
                console.log('Timer is up')
                return
            }
            else{
                tempH = tempH - 1;
                tempM = 60;
            }
        }
        else{
            tempM = tempM - 1;
            tempS = 60;
        }
    }
    else{
        tempS = tempS - 1;
    }
    // cheacking resetCall to end setValue;

    if(resetCall){
        // setValueToggle.clearTimeOut();

        tempH = 0;
        tempM = 0;
        tempS = 0;
    }

    // cheacking endCall to end setValue;

    if(endCall){
        // setValueToggle.clearTimeOut();
        return
    }
    setTimeout(()=>{
        setValues(tempH, tempM, tempS);
    }, 1000)

}