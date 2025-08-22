# Step 1. Setting up Storybook

npx storybook@latest init

This does a few things:

- Installs Storybook dependencies.

- Adds a .storybook/ folder with config.

- Creates example stories in src/stories/.

- Adds scripts in package.json:
  ```json
  "scripts": {
  "storybook": "storybook dev -p 6006",
  "build-storybook": "storybook build"
  }
  ```

### Args & ArgTypes

Args → default props for your component in a story.

ArgTypes → controls the UI of props in Storybook.

##  Decorators

A decorator is a wrapper around your story.
Think of it like saying: “Before you render this story, always wrap it with X.”

🔹 Why use them?

Provide global context (e.g. ThemeProvider, Redux Provider, React Router).

Add consistent styling (e.g. padding, centering).

Mock APIs or data for all stories.

### Parameters

A parameter is configuration that changes how Storybook displays stories.
They don’t change the component itself, but the environment around it.

🔹 Why use them?

Control layout (centered, fullscreen, padded).

Define backgrounds for testing.

Enable/disable actions or docs.

Control how addons behave.