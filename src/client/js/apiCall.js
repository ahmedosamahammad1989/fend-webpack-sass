function testApi(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    console.log("::: Form Submitted From Test API:::")
    fetch('https://cat-fact.herokuapp.com/facts')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        let result = '';
        for(let i=0; i<data.length; i++){
            let obj = data[i];
            if(i < data.length-1){
                result += '<span>' + obj.text + '</span><br>';
            }
            else{
                result += obj.text;
            }
        }
        document.getElementById('results').innerHTML = result
    })
}

export { testApi }
