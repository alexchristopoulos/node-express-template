import { AliasOptions, defineConfig } from "vite";
import { compilerOptions } from "./tsconfig.json";
import path from "path";

const { paths, baseUrl } = compilerOptions;
const normalizePathRegex = new RegExp(/[/][*]/g);

const aliasFromCompilerOptions = (
  paths: Record<string, string[]>,
  dirname: string
): AliasOptions =>
  Object.entries(paths).map((pathConfig) => ({
    find: pathConfig[0].replace(normalizePathRegex, ""),
    replacement: path.resolve(
      dirname,
      `./${baseUrl}/${pathConfig[1][0].replace(normalizePathRegex, "")}`
    ),
  }));

export default defineConfig({
  resolve: {
    alias: aliasFromCompilerOptions(paths, __dirname),
  },
});
