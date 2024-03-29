export const about = function () {
  const content = document.createElement("div");
  let title = document.createElement("h1");
  title.textContent = "About";

  content.appendChild(title);
  return content;
};
