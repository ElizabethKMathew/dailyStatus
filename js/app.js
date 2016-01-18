var projects = new Projects([{
	id: 1,
	value: 'SNT'
}, {
	id: 2,
	value: 'CM'
}, {
	id: 3,
	value: 'Savi'
}, {
	id: 4,
	value: 'Tolven'
}]);

var activities = new Activities([{
	id: 1,
	value: 'Coding'
}, {
	id: 2,
	value: 'Training'
}, {
	id: 3,
	value: 'Testing'
}]);

function DateFormat(num)
{
var day = new Date(new Date() - num*60*60*1000);
var dd = day.getDate();
var mm = day.getMonth()+1;
var yr = day.getFullYear();
if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
var day = dd +'/'+ mm +'/' + yr;
return day;
}
var today=DateFormat(0);
var ystrday = DateFormat(24);
var prevday = DateFormat(48);
 
 var dates = new DateColln([{
	id:1,
	value : today
}, {
	id:2,
	value : ystrday
}, {

	id:3,
	value: prevday
}]);

var LS_KEY = 'MY_LS_KEY1';
var data = JSON.parse( localStorage.getItem( this.LS_KEY ) );
console.log( data );
var statusColl = new TodayStatusCollection();
statusColl.add(data);
//var tmp = "<fieldset><legend><%= legend %>:</legend><div id='bursts'><div id='project'><label for=''><%= project %>:</label></div><div id='activity'><label for=''><%= activity %>:</label></div><div id='date'><label><%= date %>:</label></div><div id='activity_description'><label> <%= descr %>:</label></div></fieldset>"

var root = new Root({
	"projects":projects,
	"activities":activities,
	"dates":dates,
	"statusColl":statusColl
	});

root.render();










