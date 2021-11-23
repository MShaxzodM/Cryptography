const data = document.getElementById('berilishi');
const  keyword = document.getElementById('a');
var alifbe = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z','_']
var newArray = []
document.getElementById('shifr').addEventListener('click',()=>{
    const shifrdata = data.value.split('')
    console.log(shifrdata);
    var keychron = keyword.value.split('')
    shifrdata.forEach(element => {
        var number = shifrdata.indexOf(element)
        var numer = alifbe.indexOf(element)
        var endNumber = (alifbe.indexOf(keychron[number%(keychron.length)]) + numer)%27
        console.log(number,endNumber,keychron)
        newArray.push(alifbe[endNumber])
        
    });
    let sum='';
    for(var i=0;i<newArray.length;i++){
        sum = sum+newArray[i]
    }
    document.getElementById('javob').innerHTML = sum
})

