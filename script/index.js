const loadlesson = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displaylessons(json.data));
};
const loadlevelword = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaylevelword(data.data));
};

const displaylevelword = (words) => {
  const wordcontainer = document.getElementById("word-container");

  wordcontainer.innerHTML = "";
  
  if(words.length == 0){
      wordcontainer.innerHTML = `
    <div class="text-center col-span-full rounded-xl py-10 space-y-6 font-bangla">
    <i class="fa-solid fa-triangle-exclamation fa-beat text-8xl"></i>
      <p class="text-xl font-medium to-gray-400">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
      <h2 class="font-bold text-4xl ">নেক্সট Lesson এ যান</h2>
    </div>"`
    return;
  }

  words.forEach((word) => {
    console.log(word);

    const card = document.createElement("div");
    card.innerHTML = `      <div class="bg-white rounded-xl shadow-sm text-center py-10 px-10 space-y-5">
        <h2 class="font-bold text-2xl">${word.word}</h2>
        <p class="font-semibold">Meaning /Pronounciation</p>
        <div class="text-2xl font-bold font-bangla text-[#18181B]">
          "${word.meaning} / ${word.pronounciation}"
        </div>
        <div class="flex justify-between items-center">
          <button class="bg-[#1A91FF20] hover:bg-[#1A91FF50] active:bg-[#1A91FF80] py-1 px-2 rounded-sm"><i class="fa-solid fa-circle-info"></i></button>
          <button class="bg-[#1A91FF20] hover:bg-[#1A91FF50] active:bg-[#1A91FF80] py-1 px-2 rounded-sm"><i class="fa-solid fa-headphones"></i></button>
        </div>
      </div>`;

    wordcontainer.append(card);
  });
};

const displaylessons = (lessons) => {
  const lessoncontainer = document.getElementById("lesson-container");

  for (let lesson of lessons) {
    console.log(lesson);

    const btndiv = document.createElement("div");
    btndiv.innerHTML = `
        <button onclick="loadlevelword(${lesson.level_no})" class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-bookmark"></i>Lesson - ${lesson.level_no}</button>`;

    lessoncontainer.append(btndiv);
  }
};
loadlesson();
