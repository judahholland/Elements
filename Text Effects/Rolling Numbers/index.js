const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const rollingNumber = entry.target.querySelector('.rolling-numbers');
  
      if (entry.isIntersecting) {
        rollingNumber.classList.add('animation');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      rollingNumber.classList.remove('animation');
    });
  });
  
  observer.observe(document.querySelector('.number-wraper'));