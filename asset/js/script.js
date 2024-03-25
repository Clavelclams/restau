$(document).ready(function()
{
    console.log("ready ")

    $(`#bouton`).click(function()
    {
        alert(`Vous avez cliqué sur le bouton`)
        console.log("click bouton")
    });
    $(`.Icon`).mouseover(function()
    {
        $(this).css("color", "red");
    });
    $(`.Icon`).mouseout(function() 
    {
        $(this).css("color", "");
    });
    $(`.Test`).mouseover(function()
    {
        $(this).css({
            "border" : "1px solid red",
            "font-weight" : "bold",
            "cursor" : "help"
        });
    });
    $(`.Test`).mouseout(function()
    {
        $(this).css({
            "border" : "",
            "font-weight" : "",
            "cursor" : "",
        });
    });
    //la taille reveien pas donc je vais tenter un else if
    // $(`#TEST`).click(function()
    // {
    //     var h = $(this).height();
    //     $(this).height(500);
    // });
    var isExpanded = false; 
    $('#TEST').click(function()
    {
        // Vérifier si l'élément est actuellement agrandi ou non
        if (isExpanded) 
        {
            // Rétablir la taille à l'état initial
            $(this).height(""); // Rétablit la hauteur à celle définie dans les styles CSS
            isExpanded = false;
        } else 
        {
            // Agrandir l'élément à 500 pixels
            $(this).height(500);
            isExpanded = true;
        }
    });
    $(`#test-text`).mouseover(function()
    {
        var a = $(this).text();
        alert(a);
    });
    $(`#lien-test`).click(function()
    {
        
    })
})
