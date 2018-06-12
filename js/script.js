$(document).ready(function(){
    clickButton();
});

function clickButton(){
    $('#btn').click(function(){
        $.getJSON(
        'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
        function(data){
            $('#btn').after('<div id="dane-programisty"></div>');
            $.each(data, function(key, value) {
                console.log(key, value);
                $('#dane-programisty').append(key + ': ' + value + ', ');
            });
        }
        );    
    });
}