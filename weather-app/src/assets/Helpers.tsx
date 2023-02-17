const Today_date = ():string=>{
    let date = new Date()
    let day:number = date.getDate()
    let month:number = date.getMonth()
    let monthName:string = ''; 
    let suffix:string = ''
    let year:number = date.getFullYear()

    switch(month){
        case 0:
            monthName = 'January';
            break;
        case 1:
            monthName = 'February';
            break;
        case 2:
            monthName = 'March';
            break;
        case 3:
            monthName = 'April';
            break;
        case 4:
            monthName = 'May';
            break;
        case 5:
            monthName = 'June';
            break;
        case 6:
            monthName = 'July';
            break;
        case 7:
            monthName = 'August';
            break;
        case 8:
            monthName = 'September';
            break;
        case 9:
            monthName = 'October';
            break;
        case 10:
            monthName = 'November';
            break;
        case 11:
            monthName = 'December';
            break;
        default:
            console.log('Hi')
            break;
    }
    if(day.toString().split('').pop() === '1'){
        suffix = 'st'
    }else if(day.toString().split('').pop() === '2'){
        suffix = 'nd'
    }else if(day.toString().split('').pop() === '3'){
        suffix = 'rd'
    }else{
        suffix = 'th'
    }
    return `Today is the ${day}${suffix} of ${monthName} ${year}`
}

const ME = 'Hola'

export {Today_date , ME}