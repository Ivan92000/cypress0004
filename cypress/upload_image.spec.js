describe('Upload d\'image sur Imgur', () => {
  it('Télécharge une image et vérifie l\'upload', () => {
    cy.visit('https://imgur.com/'); // Accède au site Imgur

    // Sélectionne le bouton "New post" et vérifie qu'il existe
    cy.contains('New post').click();

    // Télécharge l'image depuis votre ordinateur
    const imagePath = 'chemin/vers/votre/image.jpg';
    cy.get('input[type="file"]').attachFile(imagePath);

    // Vérifie que l'upload a réussi en vérifiant l'affichage de l'image sur votre profil Imgur
    cy.get('.post-image-container').should('be.visible');
  });
});