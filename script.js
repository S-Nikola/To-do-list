function newItem() {

  //1. Adding a new item to the list:
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  $("#test").click(function() {
  alert("Button is clicked" );
  });

  if (inputValue === '') {
    alert("Come on, write something, don't wait for the grass to grow!");
  } else {
    $('#list').append(li);
  }
  //2. Crossing an item out:
  function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });
  //3. Adding a crossOutButton
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);
    function deleteListItem(){
      li.addClass("delete")
    }

  $('#list').sortable();
}