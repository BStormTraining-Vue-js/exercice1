# Exercice 1

## Exercice 1.1 - Compteur
- Afficher à l'écran paragraphe qui affichera un nombre (5 par défault) 
- Afficher 2 boutons - et +
- Ajouter 2 événements
    - clic gauche sur - décrémenter le nombre
    - clic gauche sur + incrémenter le nombre
- Désactiver le bouton - lorsque le nombre est <= 0
- Désactiver le bouton + lorsque le nombre est >= 10
- La couleur du paragraphe doit changer 
    - rouge si < 3
    - orange si >= 3 et < 5
    - bleu si >= 5 et < 8
    - vert sinon

## Exercice 1.2 - Calcul Panier
- Afficher des articles dans une tables sur base du json ci-dessous

```js
const articles = [
    { nom: "Écouteurs sans fil", description: "Écouteurs bluetooth avec réduction de bruit", prix: 129.99, quantite: 0 },
    { nom: "Tasse à café", description: "Tasse en céramique 350ml", prix: 12.50, quantite: 0 },
    { nom: "Clavier mécanique", description: "Clavier gaming rétroéclairé", prix: 89.99, quantite: 0 },
    { nom: "Cahier premium", description: "Cahier A4 avec couverture rigide", prix: 15.99, quantite: 0 },
    { nom: "Sac à dos", description: "Sac à dos imperméable pour ordinateur", prix: 45.00, quantite: 0 },
    { nom: "Lampe de bureau", description: "Lampe LED ajustable", prix: 34.99, quantite: 0 },
    { nom: "Souris ergonomique", description: "Souris sans fil ergonomique", prix: 59.99, quantite: 0 },
    { nom: "Plante artificielle", description: "Plante décorative en pot", prix: 24.50, quantite: 0 },
    { nom: "Chargeur portable", description: "Batterie externe 10000mAh", prix: 29.99, quantite: 0 },
    { nom: "Support téléphone", description: "Support de bureau ajustable", prix: 19.99, quantite: 0 },
    { nom: "Enceinte portable", description: "Mini enceinte bluetooth étanche", prix: 49.99, quantite: 0 },
    { nom: "Agenda 2025", description: "Agenda journalier format A5", prix: 22.50, quantite: 0 },
    { nom: "Tapis de souris", description: "Tapis de souris XXL avec repose-poignet", prix: 27.99, quantite: 0 },
    { nom: "Câble USB", description: "Câble de charge tressé 2m", prix: 9.99, quantite: 0 },
    { nom: "Bloc-notes adhésif", description: "Pack de notes repositionnables", prix: 5.99, quantite: 0 },
    { nom: "Webcam HD", description: "Webcam 1080p avec micro intégré", prix: 79.99, quantite: 0 },
    { nom: "Pochette ordinateur", description: "Housse de protection 15 pouces", prix: 32.50, quantite: 0 },
    { nom: "Hub USB", description: "Hub 4 ports USB 3.0", prix: 25.99, quantite: 0 },
    { nom: "Ventilateur USB", description: "Mini ventilateur de bureau silencieux", prix: 18.50, quantite: 0 },
    { nom: "Support tablette", description: "Support ajustable pour tablette", prix: 28.99, quantite: 0 }
];
```

- Ajouter pour chaque ligne un bouton + et un bouton -
- Ajouter 2 événements
    - clic gauche sur - pour dimunuer la quantité de l'article de la ligne
    - clic gauche sur + pour augmenter la quantité de l'article de la ligne
- Afficher le montant total et la quantité totale (ne doit pas être afficher si le montant est 0)
- Si au moins 10 articles sont sélectionnés (ajouter une réduction de 5%);

## Bonus Exercice 1.3 - Chronomètre
- Afficher à l'écran un label affichant un chronomètre en minutes, secondes, millisecondes (00:00:000)
- Afficher 3 boutons (démarrer, enregistrer, arrêter)
- Ajouter 4 événements
    - clic gauche sur démarrer pour démarrer le chronomètre
    - clic gauche sur enregistrer pour enregistrer le temps
    - clic gauche sur arrêter pour arrêter le chronomètre
    - ctrl + click gauche sur stop pour tout réinitialiser (Demander une confirmation)
- Afficher dans un tableau l'ensemble de temps mémorisés.
- Ajouter un bouton pour supprimer un temps mémorisé.

*Server vous de window.setInterval() et de window.clearInterval() pour l'exercice.*