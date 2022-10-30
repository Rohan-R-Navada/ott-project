// const btn = document.querySelectorAll('.btn');
// const allbtn = document.querySelectorAll('.movies')

// for(let i = 0; i < btn.length; i++){
//   btn[i].addEventListener('click', filterPosts.bind(this, btn[i]));
// }

// function filterPosts(item){
//   changeActivePosition(item);
//   for(let i = 0; i < allbtn.length; i++){
//       if(allbtn[i].classList.contains(item.attributes.id.value)){
//           allbtn[i].style.display = "block";
//       } else {
//           allbtn[i].style.display = "none";
//       }
//   }
// }

// function changeActivePosition(activeItem){
//   for(let i = 0; i < btn.length; i++){
//       btn[i].classList.remove('active');
//   }
//   activeItem.classList.add('active');
// };

// function myFunction() {
//     // Declare variables
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("container");
//    li=ul.doStuff(document.querySelectorAll("#kids, #horror, #comedy, #romance,#murder ,#fantasy"));
  
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//       a = li[i].doStuff(document.querySelectorAll("#kids, #horror, #comedy, #romance,#murder ,#fantasy"));
//       [0];
//       txtValue = a.textContent || a.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
//   }