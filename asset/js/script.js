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
    // Clique sur  h2 le texte change mais reviens pas à la normal on va refaire un else if 
    // $(`#Switch-text`).click(function()
    // {
    //  var letexte = $(`#p1`).text();
    // $(`#p2`).text(letexte);
    // })
    var originalTextP2 = $('#p2').text(); // Sauvegarde du texte original de p2
    $(`#Switch-text`).click(function()
    {
        var textP1 = $('#p1').text(); // Récupérer le texte de p1

        // Si le texte actuel de p2 est différent du texte de p1,
        // cela signifie que p2 a déjà été modifié, nous devons donc restaurer le texte original
        if ($('#p2').text() !== textP1)
        {
            $('#p2').text(textP1); // Copier le texte de p1 dans p2
        } else
        {
            $('#p2').text(originalTextP2); // Restaurer le texte original de p2
        }
    });
    // Lorsqu'on quitte le champs (perte du `focus`)
    $(`#demande`).blur(function()
    {
        // Récupère la valeur saisie dans le champ input #demande
        var valeur = $(this).val();
    });
    // Attribue la valeur au champ input #demande
    $(`#demande`).val(`Hello word`);
    // On peut bien sûr passer une variable
    var valeur = `Hello word`;
    $(`#champ`).val(valeur);
    
})
