import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: `${
    process.env.NEXT_PUBLIC_SPORTYCOON_API_URL ||
    "https://sportycoon-server.onrender.com"
  }/graphql`,
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ["./gql/**/*.{ts,tsx}"],
  generates: {
    "./gql/__generated__/": {
      preset: "client",
      plugins: ["typescript", "typescript-operations"],
      presetConfig: {
        documentMode: "string",
        gqlTagName: "gql",
      },
    },
  },
  hooks: { afterOneFileWrite: ["prettier --write"] },
  ignoreNoDocuments: true,
};

export default config;
