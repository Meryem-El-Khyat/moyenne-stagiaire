document.addEventListener('DOMContentLoaded', function() {
    // Sélection des éléments du formulaire
    const nomInput = document.getElementById('nom');
    const prenomInput = document.getElementById('prenom');
    const note1Input = document.getElementById('note1');
    const note2Input = document.getElementById('note2');
    const note3Input = document.getElementById('note3');
    const resultatInput = document.getElementById('resultat');

    // Événement sur le bouton "Afficher"
    document.querySelector('input[type="submit"]').addEventListener('click', function(e) {
        e.preventDefault(); // Pour empêcher le rechargement de la page

        // Vérification du champ nom
        if (!isValidName(nomInput.value)) {
            showError(nomInput, 'Entrez des lettres');
            return;
        } else {
            clearError(nomInput);
        }

        // Vérification du champ prénom
        if (!isValidName(prenomInput.value)) {
            showError(prenomInput, 'Entrez des lettres');
            return;
        } else {
            clearError(prenomInput);
        }

        // Vérification des champs de notes de classe
        if (!isValidNumber(note1Input.value)) {
            showError(note1Input, 'Entrez des nombres ');
        } else {
            clearError(note1Input);
        }

        if (!isValidNumber(note2Input.value)) {
            showError(note2Input, 'Entrez des nombres ');
        } else {
            clearError(note2Input);
        }

        if (!isValidNumber(note3Input.value)) {
            showError(note3Input, 'Entrez des nombres ');
        } else {
            clearError(note3Input);
        }

        // Si des erreurs sont présentes, arrêtez l'exécution du code
        const errors = document.querySelectorAll('.error-message');
        if (errors.length > 0) {
            return;
        }

        // Récupération des valeurs saisies dans les champs
        const nom = nomInput.value;
        const prenom = prenomInput.value;
        const note1 = parseFloat(note1Input.value);
        const note2 = parseFloat(note2Input.value);
        const note3 = parseFloat(note3Input.value);

        // Calcul de la moyenne avec deux chiffres après la virgule
        const moyenne = ((note1 + note2 + note3) / 3).toFixed(2);

        // Affichage du résultat
        resultatInput.value = `${nom} ${prenom}, La Moyenne est: ${moyenne}`;
    });

    // Gestionnaire d'événement pour détecter les saisies dans les champs nom et prénom
    nomInput.addEventListener('input', function() {
        if (!isValidName(nomInput.value)) {
            showError(nomInput, 'Entrez des lettres');
        } else {
            clearError(nomInput);
        }
    });

    prenomInput.addEventListener('input', function() {
        if (!isValidName(prenomInput.value)) {
            showError(prenomInput, 'Entrez des lettres');
        } else {
            clearError(prenomInput);
        }
    });

    // Gestionnaire d'événement pour détecter les saisies dans les champs de notes de classe
    note1Input.addEventListener('input', function() {
        if (!isValidNumber(note1Input.value)) {
            showError(note1Input, 'Entrez des nombres ');
        } else {
            clearError(note1Input);
        }
    });

    note2Input.addEventListener('input', function() {
        if (!isValidNumber(note2Input.value)) {
            showError(note2Input, 'Entrez des nombres ');
        } else {
            clearError(note2Input);
        }
    });

    note3Input.addEventListener('input', function() {
        if (!isValidNumber(note3Input.value)) {
            showError(note3Input, 'Entrez des nombres');
        } else {
            clearError(note3Input);
        }
    });

    // Fonction pour vérifier si une chaîne ne contient que des lettres
    function isValidName(value) {
        return /^[a-zA-Z]+$/.test(value);
    }

    // Fonction pour vérifier si une chaîne est un nombre valide (int ou float)
    function isValidNumber(value) {
        return /^-?\d*\.?\d+$/.test(value);
    }

    // Fonction pour afficher un message d'erreur devant le champ
    function showError(input, message) {
        const container = input.parentElement;
        const error = container.querySelector('.error-message');
        if (!error) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.innerText = message;
            container.insertBefore(errorDiv, input.nextSibling);
        }
        input.style.borderColor = 'red';
    }

    // Fonction pour effacer le message d'erreur
    function clearError(input) {
        const container = input.parentElement;
        const error = container.querySelector('.error-message');
        if (error) {
            container.removeChild(error);
        }
        input.style.borderColor = '';
    }
});

