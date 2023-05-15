let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#6f93b8">Estudiante de ingeniería industrial y aprendiz de programación.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();

