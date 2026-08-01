const loadlesson = () =>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then(json => displaylessons(json.data));
}
const loadlevelword=(id)=>{
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    console.log(url);
};

const displaylessons = (lessons) => {
    const lessoncontainer = document.getElementById("lesson-container");

    for(let lesson of lessons){

        console.log(lesson);

        const btndiv =document.createElement("div");
        btndiv.innerHTML = `
        <button onclick="loadlevelword(${lesson.level_no})" class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-bookmark"></i>Lesson - ${lesson.level_no}</button>`;

        lessoncontainer.append(btndiv);
    }
}
loadlesson()