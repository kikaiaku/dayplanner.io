var currDate = moment().format('dddd MMMM Do YYYY');
$("#currDay").text(currDate)

var time = moment().format('LT')

let h24 = moment().format('H');
let h12 = moment().format('h');

var planArray = [
    {
        timeBlock: '1AM',
        task:'',
        hour:1,
    },
    {
        timeBlock: '2AM',
        task:'',
        hour:2,
    },
    {
        timeBlock: '3AM',
        task:'',
        hour:3,
    },
    {
        timeBlock: '4AM',
        task:'',
        hour:4,
    },
    {
        timeBlock: '5AM',
        task:'',
        hour:5,
    },
    {
        timeBlock: '6AM',
        task:'',
        hour:6,
    },
    {
        timeBlock: '7AM',
        task:'',
        hour:7,
    },
    {
        timeBlock: '8AM',
        task:'',
        hour:8,
    },
    {
        timeBlock: '9AM',
        task:'',
        hour:9,
    },
    {
        timeBlock: '10AM',
        task:'',
        hour:10,
    },
    {
        timeBlock: '11AM',
        task:'',
        hour:11,
    },
    {
        timeBlock: '12PM',
        task:'',
        hour:12,
    },
    {
        timeBlock: '1PM',
        task:'',
        hour:13,
    },
    {
        timeBlock: '2PM',
        task:'',
        hour:14,
    },
    {
        timeBlock: '3PM',
        task:'',
        hour:15,
    },
    {
        timeBlock: '4PM',
        task:'',
        hour:16,
    },
    {
        timeBlock: '5PM',
        task:'',
        hour:17,
    },
    {
        timeBlock: '6PM',
        task:'',
        hour:18,
    },
    {
        timeBlock: '7PM',
        task:'',
        hour:19,
    },
    {
        timeBlock: '8PM',
        task:'',
        hour:20,
    },
    {
        timeBlock: '9PM',
        task:'',
        hour:21
    },
    {
        timeBlock: '10PM',
        task:'',
        hour:22,
    },
    {
        timeBlock: '11PM',
        task:'',
        hour:23,
    },
    {
        timeBlock: '12AM',
        task:'',
        hour:24,
    }
]

let storePlanArray = JSON.parse(localStorage.getItem('storePlanArray'));

if(storePlanArray !== null){
    planArray = storePlanArray;
}

function createPlanner(){
for (i= 0; i < planArray.length; i++) {
        console.log(planArray[i].hour<h24)
    console.log(planArray[i].hour >h12)
    


    


        var rE1 = $('<div>');
        rE1.addClass('row');

        var timeBlock = $('<div>');
        timeBlock.addClass('col-md-2 hour');
        timeBlock.text(planArray[i].timeBlock);
        var task = $('<input>');
        task.addClass('col-md-9 task') ;
        task.attr('type','text')
        task.attr('id','inputId'+i)
        task.val(planArray[i].task);
        if(planArray[i].hour<h24)
        {
            task.addClass('past');
        }
        else if(planArray[i].hour > h24)
        {
            task.addClass('future');

        }
        else if(planArray[i].hour =h24)
       {
           task.addClass('present');

       } 


       var saveBtn = $('<button>');
       saveBtn.addClass('col-md-1 saveBtn');
       saveBtn.attr('value',i)
       saveBtn.text('save');
       $('#planner').append(rE1);
       rE1.append(timeBlock);
       rE1.append(task);
       rE1.append(saveBtn);
    }

}

createPlanner()

$('.saveBtn').on('click', function(){
    event.preventDefault();
    console.log('hello world');
    console.log($(this).attr('value'))
    var vId =$(this).attr('value')
    var index = '#inputId'+$(this).attr('value')
    console.log($(index).val())
    planArray[vId].task = $(index).val()
    console.log(planArray)
    storeTask()
})

function storeTask(){
    localStorage.setItem('storePlanArray', JSON.stringify(planArray));
}
