$(() => {
  $('.tooltipped').tooltip({ delay: 50 })
  $('.modal').modal();

  firebase.initializeApp(firebaseConfig);

})
