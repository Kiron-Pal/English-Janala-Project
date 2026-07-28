const loadlesson = () =>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then(json => displaylessons(json.data));
}

const displaylessons = (lessons) => {
    const lessoncontainer = document.getElementById("lesson-container");

    for(let lesson of lessons){

        const btndiv =document.createElement("div");
        btndiv.innerHTML = `
        <button class="">
        <i class="fa-solid fa-book-bookmark"></i>Lesson</button>`;

        lessoncontainer.append(btndiv);
    }
}
loadlesson()