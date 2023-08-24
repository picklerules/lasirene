function changeTheme(chakra) {
    // Mapping des noms de chakra aux variables CSS
    const chakraColors = {
      'root': '--chakra-root',
      'sacral': '--chakra-sacral',
      'solar-plexus': '--chakra-solar-plexus',
      'heart': '--chakra-heart',
      'throat': '--chakra-throat',
      'third-eye': '--chakra-third-eye',
      'crown': '--chakra-crown'
    };
  
    // Récupération de la couleur correspondante
    const selectedColor = chakraColors[chakra];
  
    // Application de la couleur sélectionnée
    document.documentElement.style.setProperty('--chakra-selected', `var(${selectedColor})`);
  }
  