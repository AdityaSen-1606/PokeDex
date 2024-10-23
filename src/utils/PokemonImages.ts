//@ts-nocheck

const fetchImages = async (context) => {
  const images = {};
  
  // Import all modules (images) using dynamic import (Promise-based)
  const importAll = async (context) => {
    const modules = await Promise.all(
      Object.entries(context).map(async ([path, resolver]) => {
        const module = await resolver(); // Resolve the promise
        return [path, module.default]; // module.default contains the image
      })
    );
    return modules;
  };

  const modules = await importAll(context);
  
  // Process the modules and set them in the images object
  modules.forEach(([path, image]) => {
    let key = path.split("/").pop().split(".")[0]; // Get file name without extension
    images[key] = image;
  });

  return images;
};

// Import shiny images dynamically
export const images = await fetchImages(
  {
    ...import.meta.glob("../assets/pokemons/shiny/*.png"),
    ...import.meta.glob("../assets/pokemons/shiny/*.jpg"),
    ...import.meta.glob("../assets/pokemons/shiny/*.jpeg"),
    ...import.meta.glob("../assets/pokemons/shiny/*.svg"),
  }
);

// Import default images dynamically
export const defaultImages = await fetchImages(
  {
    ...import.meta.glob("../assets/pokemons/default/*.png"),
    ...import.meta.glob("../assets/pokemons/default/*.jpg"),
    ...import.meta.glob("../assets/pokemons/default/*.jpeg"),
    ...import.meta.glob("../assets/pokemons/default/*.svg"),
  }
);
