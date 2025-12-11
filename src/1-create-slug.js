// Return a URL-friendly "slug": lowercase with hyphens instead of spaces.
// Return null if the title contains banned characters: "!", "#", "?"
const createSlug = (title) => {
  let newTitle = "";

  for (let i = 0; i < title.length; i++) {
    if (title[i] == " ") {
      newTitle += "-";
      continue;
    } else if (title[i] == "!" || title[i] == "#" || title[i] == "?") {
      return null;
    }

    newTitle += title[i];
  }

  return newTitle.toLowerCase();
};

console.log(createSlug("Hello World"));

module.exports = {
  createSlug,
};
