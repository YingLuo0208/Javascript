document.addEventListener('DOMContentLoaded', function() {
  const trigger = document.getElementById('trigger'); // Selects the paragraph with id 'trigger'.
  const targetImage = document.getElementById('target'); // Selects the image with id 'target'.

  // Add a mouseover event listener to the trigger element.
  trigger.addEventListener('mouseover', function() {
    targetImage.src = 'img/picB.jpg'; // Changes the image source to picB.jpg.
  });

  // Add a mouseout event listener to the trigger element.
  trigger.addEventListener('mouseout', function() {
    targetImage.src = 'img/picA.jpg'; // Changes the image source back to picA.jpg.
  });
});
