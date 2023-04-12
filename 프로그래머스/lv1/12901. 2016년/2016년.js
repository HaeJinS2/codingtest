function solution(a, b) {
    var week = new Array('SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT');
    
    var today = new Date(`2016-${a}-${b}`).getDay();
    var todayLabel = week[today];
    
    return todayLabel;
}