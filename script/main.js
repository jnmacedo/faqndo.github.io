MELI.init({client_id: 5138521300457588});

document.addEventListener("DOMContentLoaded", function(event){
  setTimeout(function(){
    swal({   
      title: "Quieres loguearte?",   
      text: "Para poder ayudarte con las ventas tendras que loguearte",   
      type: "warning",   
      showCancelButton: true,   
      confirmButtonColor: "#DD6B55",   
      confirmButtonText: "Yes",   
      cancelButtonText: "No",   
      closeOnConfirm: false,   
      closeOnCancel: false 
    }, 
    function(isConfirm){   
      if (isConfirm) {     
        initialize(); 
      }
      else {      
          swal({   
            title: "No te logueaste",   
            text: "No podras usar nuestros servicios",   
            timer: 2000,   
            showConfirmButton: false 
          });
          location.href = "http://faqndo.github.io/"
        }; 
    });    
  }, 1000);
});

function initialize(){
  MELI.login(function(){
    MELI.get('/user/me', {}, function(data){
      swal('Logueado!', "comenzemos a trabajar", 'success');
      var userId = data[2].id;
      MELI.get('/user/' + userId + '/items/search?access_token' + MELI.getToken(), {}, function(data){
        var items = data[2].results;
        var itemsL = items.length;
        for(i=0; i< itemsL; i++){
          MELI.get('/items/' + items[i], {}, function(data){
            console.log('Titulo: ' + data[2].title);
            console.log('Titulo: ' + data[2].title);
          });
        }
      });
    });
  });
}
