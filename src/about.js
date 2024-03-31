export const about = function () {
  window.scrollTo(0, 0);
  const container = document.createElement("div");
  let title = document.createElement("h1");
  title.textContent = "About";

  let aboutContainer = document.createElement("div");
  aboutContainer.classList.add("container");
  let logo = document.createElement("div");
  logo.innerHTML =
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='rgb(255,255,255)'><title>mustache</title><path d='M21 12C19 12 18 9 15 9S12 11 12 11 12 9 9 9 5 12 3 12C2 12 1 11 1 11S2 16 6 16C11 16 12 13 12 13S13 16 18 16C22 16 23 11 23 11S22 12 21 12Z' /></svg>";
  let aboutText = document.createElement("p");
  aboutText.classList.add("about");
  aboutText.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a ex in neque tincidunt pellentesque. Suspendisse potenti. Phasellus euismod eros massa, quis venenatis mi ultrices quis. Praesent in gravida dolor. Duis tincidunt tortor ut turpis convallis, at eleifend ipsum finibus. Nunc ullamcorper placerat sem. Maecenas consequat metus sed dolor dignissim suscipit. Vestibulum ac iaculis urna. Maecenas orci nisi, lobortis non lectus quis, hendrerit vulputate elit. Donec et arcu auctor, ultricies purus ac, ornare ligula. Donec nec dui varius, dignissim ligula id, accumsan mauris. Duis viverra massa massa, at laoreet lectus mattis et. Aenean malesuada, ligula eu tempor pellentesque, est ante dignissim nisl, in pretium dolor lorem tempus orci. Mauris eu sagittis neque. Mauris porttitor bibendum tortor, sagittis gravida mi porttitor nec. Duis laoreet nisl sed sagittis bibendum. Maecenas auctor, velit suscipit congue fermentum, dolor orci suscipit sem, varius rhoncus urna urna non nisl. Aliquam et mattis lacus, quis dapibus nisi. Fusce justo orci, rhoncus pulvinar ligula sed, aliquet faucibus sem. Nullam sagittis tellus in arcu venenatis, eget venenatis nibh commodo. Aenean consectetur urna non nisi interdum, nec cursus mauris hendrerit. Nam ornare rhoncus mi eget pellentesque. Integer et purus congue, hendrerit ex in, scelerisque nisi. Morbi eleifend lectus risus, quis euismod turpis viverra eget. Donec eu viverra orci. Ut egestas sem non rhoncus consectetur. Maecenas turpis mi, sollicitudin ut dapibus sit amet, interdum nec leo.";
  aboutContainer.appendChild(aboutText);
  aboutContainer.appendChild(logo);
  container.appendChild(title);
  container.appendChild(aboutContainer);
  return container;
};
