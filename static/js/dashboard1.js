new Chart(document.getElementById('chargeChart'),{

type:'line',

data:{
labels:['0','20','40','60','80','100'],

datasets:[{
label:'Charging Time',
data:[0,12,28,48,80,120],
borderColor:'#60A5FA'
}]
}
});

new Chart(document.getElementById('batteryChart'),{

type:'bar',

data:{
labels:['Tesla','BYD','MG','Nexon'],

datasets:[{
label:'Battery Capacity',
data:[75,60,50,40]
}]
}
});