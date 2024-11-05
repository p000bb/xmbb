import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import AutoPrefixer from "autoprefixer";
import TailWindCss from "tailwindcss";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/xmbb/",

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,

  // tailwindcss 配置
  bundler: viteBundler({
    viteOptions: {
      css: {
        postcss: {
          plugins: [AutoPrefixer, TailWindCss],
        },
      },
    },
  }),
});
