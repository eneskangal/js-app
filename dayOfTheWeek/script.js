let dayOfTheWeek= function(day, month, year){
    let gunler=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date=new Date(year,month-1,day)    
    return gunler[date.getDay()]
}