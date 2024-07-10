import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "wjHaonW3xYyCx6QyjoejLM",  // ID of a project you are using
      token: "U9zqmZs3jlyxyjUNO23vIkJF1iVejuDV0lHrrTmH1PzN5TgNK7VU9IjXWTDV4rvdYEoGye2hK6KSmcgkOA"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})