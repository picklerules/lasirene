function changeTheme(chakra) {
 
  const chakraColors = {
    'root': '--chakra-root',
    'sacral': '--chakra-sacral',
    'solar-plexus': '--chakra-solar-plexus',
    'heart': '--chakra-heart',
    'throat': '--chakra-throat',
    'third-eye': '--chakra-third-eye',
    'crown': '--chakra-crown'
  };

  const chakraBgColors = {
    'root': '--chakra-root-bg',
    'sacral': '--chakra-sacral-bg',
    'solar-plexus': '--chakra-solar-plexus-bg',
    'heart': '--chakra-heart-bg',
    'throat': '--chakra-throat-bg',
    'third-eye': '--chakra-third-eye-bg',
    'crown': '--chakra-crown-bg'
  };

  const selectedColor = chakraColors[chakra];
  const selectedBgColor = chakraBgColors[chakra];

  document.documentElement.style.setProperty('--chakra-selected', `var(${selectedColor})`);
  document.documentElement.style.setProperty('--chakra-selected-bg', `var(${selectedBgColor})`);

  // Sauvegarde le thème dans le localStorage
  localStorage.setItem('selectedChakra', chakra);
}

// Applique le thème sauvegardé au chargement de la page
window.addEventListener('load', () => {
  const savedChakra = localStorage.getItem('selectedChakra');
  if (savedChakra) {
    changeTheme(savedChakra);
  }
});
