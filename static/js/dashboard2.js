new Chart(document.getElementById('rangeChart'),{

type:'bar',

data:{
labels:['Tesla','BYD','MG','Nexon'],

datasets:[{
label:'Range (km)',
data:[620,520,430,465]
}]
}
});

new Chart(document.getElementById('effChart'),{

type:'doughnut',

data:{
labels:['Battery','Motor','Cooling','Others'],

datasets:[{
data:[45,30,15,10]
}]
}
});