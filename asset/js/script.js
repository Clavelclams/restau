$(document).ready(function()
{
    console.log("Prêt")
    // exercice jquerry
    /*
    $(`#bouton`).click(function()
    {
        alert(`Vous avez cliqué sur le bouton`)
        console.log("click bouton")
    });
    */
    // change la couleur de l'icon au survol 
    $(`.Icon`).mouseover(function()
    {
        $(this).css("color", "red");
    });
    $(`.Icon`).mouseout(function() 
    {
        $(this).css("color", "");
    });
    // exercice jquerry 
    /*
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
    */
    
    //la taille reveien pas donc je vais tenter un else if
    // $(`#TEST`).click(function()
    // {
    //     var h = $(this).height();
    //     $(this).height(500);
    // });
    
    // exo jquerry : 
    /*
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
    */

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
    
   // formulaire contact
    function verif()
    {
        var envoi = true;
        //  récupère la valeur saisie dans le champ input #prenom
        var leprenom = $(`#prenom`).val();
        if (leprenom == "")
        {
            envoie = false;
            alert(`Le prénom doit être renseigné`);
            console.log(`rien ne se passe`)
        }
        var lenom = $(`#nom`).val();
        if (lenom == "")
        {
            envoi = false;
            alert(`Le nom doit être renseigné`);
        }
        var lemail = $(`#mail`).val();
        if (lemail == "")
        {
            envoi = false
            alert(`Le mail doit être renseigné`)
        }
        var letel = $(`#tel`).val();
        if (letel == "")
        {
            envoi = false
            alert(`Le numero doit être renseigné`)
        }
        //    return envoi; //  Retourne la valeur de envoi
        else
        {
            return false;
        }
    }
    $("#btn_envoyer").click(function(e)
    {
        /* On doit bloquer l'èvènement par défaut avec l'instruction 
        ci-dessous
        `e` est un objet nommé librement représentant l'évènement */
        e.preventDefault();
        // Appel de la fonction verif()
        verif();
    })
    console.log("Le plat suivant est prêt.");
    var currentBurgerIndex = 1;
    var totalBurgers = $('.burger-test').length;

    // Cacher tous les burgers sauf le premier au chargement de la page
    $('.burger-test').not('#burger1').hide();
    console.log("test de ligne.");

    // Gérer la navigation "Suivant"
    $('#suivant').click(function() 
    {
        console.log("test de ligne.");

        if (currentBurgerIndex < totalBurgers) 
        {
            $('#burger' + currentBurgerIndex).hide();
            currentBurgerIndex++;
            $('#burger' + currentBurgerIndex).show();
            updateNavigationButtons();
        }
    });

    // Gérer la navigation "Précédent"
    $('#precedent').click(function() {
        if (currentBurgerIndex > 1) {
            $('#burger' + currentBurgerIndex).hide();
            currentBurgerIndex--;
            $('#burger' + currentBurgerIndex).show();
            updateNavigationButtons();
        }
    });

    // Met à jour l'état des boutons de navigation
    function updateNavigationButtons() {
        if (currentBurgerIndex === 1) {
            $('#precedent').addClass('disabled');
        } else {
            $('#precedent').removeClass('disabled');
        }

        if (currentBurgerIndex === totalBurgers) {
            $('#suivant').addClass('disabled');
        } else {
            $('#suivant').removeClass('disabled');
        }
    }

    //    commande id 
    // Gérer le clic sur le bouton "Commander" dans la page des plats
    $('.bouton-plat').click(function(event) {
        event.preventDefault(); // Empêcher le comportement par défaut du lien
        
        // Récupérer les détails du plat sélectionné
        var selectedPlat = {
          titre: $(this).closest('.card').find('.card-title').text(),
          description: $(this).closest('.card').find('.card-text').text(),
          imageSrc: $(this).closest('.card').find('img').attr('src')
        };
    
        // Stocker les détails du plat sélectionné dans le localStorage
        localStorage.setItem('selectedPlat', JSON.stringify(selectedPlat));
    
        // Rediriger vers la page de commande
        window.location.href = 'commande.html';
    });
    
    // Cacher toutes les cartes de plat par défaut
    $('.plat-carte').hide();
    
    // Lorsqu'un bouton de commande est cliqué
    $('.bouton-plat').click(function() {
      // Récupérer l'ID du plat sélectionné
      var platID = $(this).closest('.card').attr('id');
    
      // Cacher toutes les cartes de plat
      $('.plat-carte').hide();
    
      // Afficher la carte correspondante au plat sélectionné
      $('#' + platID).show();
    });

    // eval commence : 
    //formulaire commande 
    function verif() 
    {
        // recup la valeur saisie dans les input 
        /* en js : var nom = document.getElementById('nom').value;
        
        var email = document.getElementById('mail').value;
        var telephone = document.getElementById('tel').value;
        var adresse = document.getElementById('adresse').value;
      
        var erreur = "";
        if(nom.trim() === "") erreur += "Le nom est obligatoire.\n";
        if(email.trim() === "") erreur += "L'email est obligatoire.\n";
        if(telephone.trim() === "") erreur += "Le téléphone est obligatoire.\n";
        if(adresse.trim() === "") erreur += "L'adresse est obligatoire.\n";
      
        if(erreur !== "") {
          alert(erreur);
          return false;
        }
        return true;*/
        var submit = true;
        var nom = $("#nom").val();
        if (nom.trim() == "") 
        {
            submit = false;
            alert("Le nom et prénom doivent être renseignés");
        }
        var email = $("#mail").val();
        if (email.trim() == "") 
        {
            submit = false;
            alert("Vous devez saisir votre adresse email");
        }
        var telephone = $("#tel").val();
        if (telephone.trim() == "") 
        {
            submit = false;
            alert("Vous devez saisir votre numéro de téléphone");
        }
        var adresse = $("#adresse").val();
        if (adresse.trim() == "") 
        {
            submit = false;
            alert("Vous devez saisir votre adresse");
        }
        return submit;
    } 
    $("#bouton").click(function(e)
    {
        /* On doit bloquer l'èvènement par défaut avec l'instruction 
        ci-dessous
        `e` est un objet nommé librement représentant l'évènement */
        e.preventDefault();
        // Appel de la fonction verif()
        var formulaireValide = verif();
        // Si tous les champs sont valides, on soumet le formulaire
        if (formulaireValide)
        {
        $('#form-commande').submit(); // Soumission du formulaire
        }
    });
    // json controle 
    // Fonction pour charger le contenu JSON à partir d'un fichier
    console.log('chargement du fichier json')
    function chargerContenuJSON(url, callback) 
    {
        var xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/json");
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () 
        {
            if (xhr.readyState == 4 && xhr.status == 200) 
            {
                callback(xhr.responseText);
            }
        };
        xhr.send(null);
    }
    console.log('test de ligne requette marche pas')
    // URL du fichier JSON
    var url = 'asset/js/plats.json';
    
    // Appel de la fonction pour charger le contenu JSON
    chargerContenuJSON(url, function (response) 
    {
        // Parse JSON
        var data = JSON.parse(response);
        
        // Maintenant, vous pouvez utiliser les données (data) dans votre application
        console.log(data); // Pour vérifier si les données sont correctement chargées
        // Vous pouvez appeler des fonctions pour afficher les catégories et les plats, etc.
    });
})
