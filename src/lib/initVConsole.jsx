import vConsole from "vconsole";

export const initVConsole = () => {
  const config = {
    onReady: () => {
      const button = document.querySelector(".vc-switch");
      button.style.position = "fixed";
      button.style.bottom = "200px";
    },
  };
  new vConsole(config);
};
