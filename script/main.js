MELI.init({client_id: 5138521300457588});
var miArreglo = [];
var userID;
function initialize(){
      
      MELI.login(function(){

        MELI.get('/users/me',{},function(data){
          swal("Deleted!", "Your imaginary file has been deleted.", "success");
          userID = data[2].id
          MELI.get('/users/'+userID+'/items/search?access_token='+MELI.getToken(),{},function(data){
            var items = data[2].results;
            var itemsL = items.length;
            for (var i = 0; i < itemsL ; i++) {
              MELI.get('/items/' + items[i],{},function(data){
                var misItems = [];
                misItems.titulo = data[2].title;
                misItems.precio = data[2].price;
               console.log(misItems);
                miArreglo.push(misItems);
              });
            }
             console.log(miArreglo);
        });
            
           
          });

      });
    };


document.addEventListener("DOMContentLoaded", function(event){
  setTimeout(function(){
    swal({   
      title: "Quieres loguearte?",   
      text: "Para poder ayudarte tedras que ingresar con tu usuario",   
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
