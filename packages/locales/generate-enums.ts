import * as fs from "node:fs";
import * as path from "node:path";
import { watch } from "chokidar";

const localesDir = path.join(__dirname, "translates");
const outputDir = path.join(__dirname, "enums");

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to generate enum from JSON data
const generateEnum = (key: string, values: Record<string, string>): string => {
  const enumEntries = Object.entries(values)
    .map(([enumKey, _enumValue]) => `  ${enumKey} = "${enumKey}",`)
    .join("\n");
  return `export enum ${key} {\n${enumEntries}\n}\n`;
};

// Function to generate the TRANSLATE_NAMESPACES enum
const generateTranslatesNamespacesEnum = (keys: string[]): string => {
  const enumEntries = keys.map((key) => `  ${key} = "${key}",`).join("\n");
  return `export enum TRANSLATES_NAMESPACES {\n${enumEntries}\n}\n`;
};

// Function to generate enums for common keys in JSON files
const generateEnums = (): void => {
  // Read all JSON files in the locales directory
  const files = fs.readdirSync(localesDir);

  // Store the content of each file
  const jsonDataArray = files.map((file) => {
    const filePath = path.join(localesDir, file);
    const rawData = fs.readFileSync(filePath, "utf-8");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return JSON.parse(rawData);
  });

  // Find common keys among all JSON files
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const commonKeys = Object.keys(jsonDataArray[0]).filter((key) =>
    jsonDataArray.every((jsonData) => key in jsonData)
  );

  // Generate TypeScript enums for common keys
  let output = "/* eslint-disable @typescript-eslint/no-shadow */\n\n";
  commonKeys.forEach((key) => {
    // Collect values for the current key from all JSON files
    const values = jsonDataArray.reduce<Record<string, string>>(
      (acc, jsonData) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
        const value = jsonData[key];
        if (typeof value === "object" && value !== null) {
          Object.assign(acc, value);
        }
        return acc;
      },
      {}
    );

    // Generate enum for the current key
    output += generateEnum(key, values);
  });

  // Generate TRANSLATE_NAMESPACES enum
  output += generateTranslatesNamespacesEnum(commonKeys);

  // Write the output to a TypeScript file
  const outputFilePath = path.join(outputDir, "index.ts");
  fs.writeFileSync(outputFilePath, output);

  // eslint-disable-next-line no-console
  console.log(`Enums generated for all locales`);
};

// Determine if the environment is development or production
const isDevelopment = process.env.NODE_ENV !== "production";

// Initial generation
generateEnums();

if (isDevelopment) {
  // Watch for changes in JSON files and regenerate enums
  watch(`${localesDir}/*.json`).on("change", (filePath) => {
    // eslint-disable-next-line no-console
    console.log(`File changed: ${filePath}`);
    generateEnums();
  });
} else {
  // eslint-disable-next-line no-console
  console.log("Running in production mode. No file watching.");
}
