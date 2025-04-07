// Enregistrez ce fichier comme src/resource-checker.js
// Incluez-le dans votre index.html pour vérifier les ressources

export function checkResources() {
    const resources = [
      './monogram.ttf',
      './vite.svg',
      './spritesheet.png',
      './map.png',
      './map.json',
      './click.wav',
      // Ajoutez d'autres ressources selon les besoins
    ];
  
    console.log("🔍 Vérification des ressources...");
    
    resources.forEach(async (resource) => {
      try {
        const response = await fetch(resource, { method: 'HEAD' });
        if (response.ok) {
          console.log(`✅ Ressource trouvée: ${resource}`);
        } else {
          console.error(`❌ Ressource non trouvée: ${resource} (${response.status})`);
        }
      } catch (error) {
        console.error(`❌ Erreur d'accès à la ressource: ${resource}`, error);
      }
    });
  }