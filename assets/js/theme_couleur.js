function changeTheme(chakra) {
  // Mapping des noms de chakra aux variables CSS pour les couleurs principales
  const chakraColors = {
    'root': '--chakra-root',
    'sacral': '--chakra-sacral',
    'solar-plexus': '--chakra-solar-plexus',
    'heart': '--chakra-heart',
    'throat': '--chakra-throat',
    'third-eye': '--chakra-third-eye',
    'crown': '--chakra-crown'
  };

  // Mapping des noms de chakra aux variables CSS pour les couleurs d'arrière-plan
  const chakraBgColors = {
    'root': '--chakra-root-bg',
    'sacral': '--chakra-sacral-bg',
    'solar-plexus': '--chakra-solar-plexus-bg',
    'heart': '--chakra-heart-bg',
    'throat': '--chakra-throat-bg',
    'third-eye': '--chakra-third-eye-bg',
    'crown': '--chakra-crown-bg'
  };

  // Récupération des couleurs correspondantes
  const selectedColor = chakraColors[chakra];
  const selectedBgColor = chakraBgColors[chakra];

  // Application des couleurs sélectionnées
  document.documentElement.style.setProperty('--chakra-selected', `var(${selectedColor})`);
  document.documentElement.style.setProperty('--chakra-selected-bg', `var(${selectedBgColor})`);
}
