// let tog = document.querySelector('.fa-solid')
// let toggle = document.getElementById('toggle')

// toggle.addEventListener('click',()=> {
//   console.log('wow');
//   console.log(tog.classList);
//   tog.classList.add('fa-toggle-on')
//   tog.classList.remove('fa-toggle-off')
 // tog.classList.add('fa-toggle-on')
  // console.log(tog.classList[1]);
  // if (tog.classList[1] == 'fa-toggle-off') {
  //   tog.classList.add('fa-toggle-on')
  //   tog.classList.remove('fa-toggle-off')
  // }else{
  //   tog.classList.add('fa-toggle-off')
  //   tog.classList.remove('fa-toggle-on')
  // }
//})


let about_me = document.getElementById('about-me')
let cancel = document.getElementById('cancel')
let pop = document.getElementById('pop')
about_me.addEventListener('click',()=> {

  pop.classList.remove('hide')
  pop.style.height = '80vh';
  
})

cancel.addEventListener('click',()=> {
  pop.classList.add('hide')
  pop.style.height = '0';

})




let icons = document.getElementsByClassName('fb');
// console.log(icons);
let arr = ['https://www.youtube.com','https://www.instagram.com','https://www.facebook.com','https://www.twitter.com']
for (var i = 0; i < icons.length; i++) {
// console.log(icons[i]);
// console.log(arr[i]);
 
icons[i].setAttribute('href',arr[i]);
}