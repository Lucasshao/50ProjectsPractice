// wrap each letter in a span, we'are going to have a transition on that span to move it up and smooth, or a transform translate y value. Each letter need to add a transition delay to each one that increases every letter so that the first one goes up and delayed, more delayed...end up 
/*<label>
    <span style="transition-delay: 0ms">E</span>
    <span style="transition-delay: 50ms">m</span>
    <span style="transition-delay: 100ms">a</span>
    <span style="transition-delay: 150ms">i</span>
    <span style="transition-delay: 200ms">l</span>
  </label> --> */

  const labels = document.querySelectorAll('.form-control label') /*node list of all label*/

  labels.forEach(label => {
    label.innerHTML = label.innerText/*each letter*/
      .split('') /*empty string in here it splits the letters into an array*/
      .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)  /*turn it into an array of the letters with a span around it with a trasition delay*/
      .join('') /*turning it back into a string*/
  }) /*test wrap in span*/