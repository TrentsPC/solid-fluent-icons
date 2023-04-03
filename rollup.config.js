import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";

// import type {RollupOptions} from "rollup";

export default {
  input: [
    "src/10.tsx",
    "src/12.tsx",
    "src/16.tsx",
    "src/20.tsx",
    "src/24.tsx",
    "src/28.tsx",
    "src/32.tsx",
    "src/48.tsx",
  ],
  output: [
    {
      dir: "dist",
      format: "es",
    },
  ],
  external: ["solid-js", "solid-js/web"],
  plugins: [
    nodeResolve({
      extensions: [".js", ".ts", ".tsx"],
    }),
    babel({
      extensions: [".js", ".ts", ".tsx"],
      babelHelpers: "bundled",
      presets: ["solid", "@babel/preset-typescript"],
      exclude: "node_modules/**",
    }),
  ],
};
