export const scaleF = window.innerWidth / 640;

// Fonction pour obtenir le chemin correct des images
function img(path) {
  // Ajoutez le préfixe du dépôt GitHub
  return `${import.meta.env.BASE_URL}${path}`;
}

export const dialoguedata = {
  credit: `Ce portfolio a été réalisé avec le tuto de <a href="https://youtu.be/wy_fSStEgMs?si=1EJ-L6Fs_1Fbw7VN">jslegenddev</a>.<br>
  Certains sprite viennent également de son dossier. D'autres comme le lac, les fleurs et la cloison proviennent de <a href="https://www.kenney.nl/">Kenney</a> l'asset etant <a href="https://www.kenney.nl/assets/tiny-town">Tiny town</a>.<br>
  Seul le personnage du Voyageur m'appartient il a été réalisé avec<a href="https://www.kenney.nl/">Kenney</a>.`,
  Revenez: `Merci de votre visite à mon domaine, voyageur. J'espère que votre passage était agréable, et que je vous reverrai.`,
  Avenir: `N'allez pas trop loin, mon domaine est encore en construction. Plein de projets sont à venir.`,
  Dehors: `Un paysage fort agréable, vous ne trouvez pas ?<img src="${img('ciel.jpg')}" alt="Dessin" style=all:unset;width:300px;/>`,
  FleurC: `Comme vous pouvez le constater, mon domaine est rempli de fleurs en tout genre. Certaines ont été faites en crochet, comme celle-ci.<img src="${img('fleurC.jpg')}" alt="rose réalisé en crochet" style=all:unset;width:300px;/>`,
  FleurR: `Vous savez les fleurs magique ce n'est pas donné a tout le monde j'ai la chance d'en avoir trouver il y a longtemps.<img src="${img('fleurinfi.jpg')}" alt="Reproduction de la fleur magique dans raiponce" style=all:unset;width:300px;/>`,
  Surface: `Lors de ma 3ᵉ année de licence, j'ai eu comme projet de modéliser une surface d'eau. Vous pouvez visualiser le code<a href="https://github.com/Swassilia/Le-monde">ici</a>.`,
  Canette: `Une soif ? Malheureusement, mon distributeur est en panne. Le magicien du village est parti en voyage d'affaires.<img src="${img('distributeur.jpg')}" alt="Distributeur 3D render 2D fait en blender" style=all:unset;width:300px;/>`,
  Watergirl: `Un peu de chaleur de l'enfance ? En deuxième année de licence, j'ai pu développer avec mon groupe le jeu de notre enfance : <a href="https://github.com/Swassilia/WatergirlAndFireboy">Watergirl and Fireboy</a>. Il a été fait en C++ avec la bibliothèque SDL pour l'affichage.`,
  contrat: `Vous avez trouvé mon CV ! Par excès de bonté, je vous donne également mon <a href="https://www.linkedin.com/in/wassilaskarim/">LinkedIn</a>.`,
  Moi:[
    `Bonjour voyageur ! Je me nomme Wassila SAID KARIM. Bienvenue dans mon domaine.`,
    `Je suis actuellement en première année de Master Informatique à l'Université Claude Bernard Lyon 1.`,
    `Comme vous allez pouvoir le constater, je m'intéresse à tout ce qui pourrait s'apparenter de près ou de loin à la création.`,
    `Je suis curieuse et j'aime apprendre. J'ai appris à utiliser Blender, Unreal Engine, Unity, DaVinci Resolve. Bien que certains projets n'aboutissent pas à être montrés au public,`,
    `Je considère ces projets comme étant une source d'apprentissage de concepts que je réutilise en animation ou programmation.`,
    `N'hésitez pas à être curieux vous aussi : peut-être que certains objets peuvent vous surprendre.`
  ],
  Tetris: [
    `Je vois que vous appréciez les jeux. Ici, vous avez le jeu <a href="https://github.com/Swassilia/Tetris_Java">Tetris fait en Java</a>.`,
    `Vous pouvez y jouer, mais ne devenez pas accro !`
  ],
  Bibliotheque: `Un peu de lecture ? J'ai réalisé une petite boîte miniature qui met en scène une bibliothèque au coin du feu.<img src="${img('bibliotheque.jpg')}" alt="Bibliothèque miniature" style=all:unset;width:300px;/>  `,
  Becomtech:[ `Très beau diplome hein? Lors de mon année de 3ieme aub collège j'ai participé a un programme appelé jump in tech qui est organisé par l'association Becomtech qui œuvre à la mixité dans l’informatique
et le numérique.`, `Depuis la fin du programme je suis devenue ambassadrice et j'interviens parfois dans des écoles et dans des tables rondes pour partager mon experience.`],
  Contrat: [`Ils ne sont pas encore accrochés car ce n'est pas terminé! A gauche c'est mon diplôme de fin de licence, j'ai fait mes 3ans a l'université Claude Bernard Lyon 1`,
    `A droite vous avez celui de Master 1 toujours a l'université Claude Bernard Lyon 1. Durant toutes mes années j'ai suivis un parcourt qui me dirige vers l'imagerie et l'animation.`],
};