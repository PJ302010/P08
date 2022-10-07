function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundclassifier('',modelReady);
}

function modelReady(){
    classifier.classify(gotresults);
}
function gotresult(error, result)
{
    if(error){
        console.error(error);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+result[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuarcy - '+result[0].toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+ random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.coolor = "rgb("+ random_number_r+","+random_number_g+","+random_number_r+")";
        img1 = document.getElementById('dog.jpg');
        img1 = document.getElementById('cat.jpg');
    }}
