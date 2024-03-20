$(document).ready(function()
{
    console.log("ready ")

    $(`#bouton`).click(function()
    {
        alert(`Vous avez cliqué sur le bouton`)
        console.log("click bouton")
    });
});