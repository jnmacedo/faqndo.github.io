MELI.init({client_id: 5138521300457588});
 
function callPopUp(){
  MELI.login(function(){
    MELI.get('/users/me',{},function(data){
      userID = data[2].id
      swal("Buen trabajo!", "Comencemos a trabajar", "success");
      MELI.get('/users/'+userID+'/items/search?access_token='+MELI.getToken(),{},function(data){
        var items = data[2].results;
        var itemsL = items.length;
        MELI.get('/items/' + items[1],{},function(data){
          var nombre = data[2].title;
          MELI.get('/sites/MLU/search?q=' + nombre,{},function(data){
            var itemsSerch = data[2].results;
            for (var i = 0; i < itemsSerch.length ; i++) {
              console.log('Titulo: ' + itemsSerch[i].price);
            };
          });
        });
      })
    });
  });
};

MELI.init({client_id: 5138521300457588});
 
function callPopUp(){
  MELI.login(function(){
    MELI.get('/users/me',{},function(data){
      userID = data[2].id
      MELI.get('/users/'+userID+'/items/search?access_token='+MELI.getToken(),{},function(data){
        var items = data[2].results;
        var itemsL = items.length;
        for (var i = 0; i < itemsL ; i++) {
          MELI.get('/items/' + items[i],{},function(data){
            console.log('Titulo: ' + data[2].title);
            console.log('Precio: ' + data[2].price);
          });
        };
      });
    });
  });
};
