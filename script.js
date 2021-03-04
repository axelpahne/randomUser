

apiInfo();
createButton();


let button = document.getElementById('button')

button.addEventListener("click", (e) => {

    apiInfo()

});


function apiInfo() {

    // 1. Fetch path to file
fetch('https://randomuser.me/api/')

    // 2. Response of data (promise)
    .then(response => {
        console.log(response);
        // (Converte response into json)
        return response.json();
    })

    //Complete data stream
    .then(json => {
        console.log(json)
        console.log(json.results[0].gender)

        jsonResult(json)
        
    })
}

function jsonResult(json) {

    let jsonResult = json.results[0]
    let title = jsonResult.name.title + " " + jsonResult.name.first + " " + jsonResult.name.last;
    let phoneNr = jsonResult.cell
    let email = jsonResult.email
    let picture = jsonResult.picture.large
    let location = jsonResult.location.country + " " + jsonResult.location.city + " " + jsonResult.location.state;

    createElements(title, phoneNr, email, location, picture)
}


function createElements(title, phoneNr, email, location, picture) {

    let div2 = document.getElementById('info')
    let div = document.createElement('div')

    if(div2 != null){

        div2.remove()
    }
    
    let h1 = document.createElement('h1')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')
    let img = document.getElementById('rainbow')

    h1.innerHTML = "Title: " + title;
    p1.innerHTML = "Phone: " + phoneNr;
    p2.innerHTML = "Email: " + email;
    p3.innerHTML = "Location: " + location;

    div.insertAdjacentElement("beforeend", h1)
    div.insertAdjacentElement("beforeend", p1)
    div.insertAdjacentElement("beforeend", p2)
    div.insertAdjacentElement("beforeend", p3)

    div.id = "info"

    document.body.insertAdjacentElement("beforeend", div)

    img.src = picture
}


function createButton() {

    let button = document.createElement('button')
    button.id = 'button'
    button.innerHTML = "New Person"

    document.body.insertAdjacentElement("afterend", button)
}


   

