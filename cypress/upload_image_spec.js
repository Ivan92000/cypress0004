describe('Upload d\'image', () => {
    it('Télécharger une image et vérifier le succès de l\'upload', () => {
      // Ouvrir le site web imgur.com
      cy.visit('https://filebin.net/');
  
      // Localiser le bouton d'upload d'image
      cy.get('input[type="file"]').attachFile('C:\Users\IvanL\Pictures\comiquecetype.jpg');
  
      // Attendre que l'upload soit terminé
      cy.get('.upload-dropzone').should('contain', '100%');
  
      // Vérifier que l'upload a été fait avec succès
      cy.get('.post-upload-actions').should('be.visible');
    });
  });