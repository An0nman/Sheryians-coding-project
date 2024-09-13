var arr = [
  {
    dp: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    img: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    dp: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    dp: "https://images.unsplash.com/photo-1464863979621-258859e62245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    img: "https://images.unsplash.com/photo-1536766768598-e09213fdcf22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    dp: "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    img: "https://images.unsplash.com/photo-1536896407451-6e3dd976edd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
];

var stories = document.querySelector("#stories");
var full_scr = document.querySelector("#full-scr");

var storyCode = "";

arr.forEach(function (elem, index) {
  storyCode += `<div class="story">
                    <img id="${index}" src="${elem.dp}"
                        alt="">
                </div>`;
});
stories.innerHTML = storyCode;
var progress=0;
stories.addEventListener("click", function (details) {
  full_scr.style.display = "block";
  full_scr.style.backgroundImage = `url(${arr[details.target.id].img})`;

  setTimeout(function(){
    full_scr.style.display="none";
  },3000)
  if(progress<100){
    setInterval(function(){
        document.querySelector("#progress").style.width=`${progress++}%`
      },30)
  }else{
    progress=0;
  }
});