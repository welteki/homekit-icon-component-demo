import "./styles.css";

display();

function display() {
  let toggleSwitch = document.getElementById("toggle-switch");
  let switchStatus = document.getElementById("switch-status");
  let icons = document.querySelectorAll(".icon");

  toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
      switchStatus.innerHTML = "ON";
      setIconStatus("on");
    } else {
      switchStatus.innerHTML = "OFF";
      setIconStatus("off");
    }
  });

  function setIconStatus(value) {
    icons.forEach((icon) => {
      icon.status = value;
    });
  }
}

class OutletIconComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.dark = true;
    this.active = true;
    this.colors = {
      frame_light_active: "#FFFFFF",
      frame_light_inactive: "#C3C4C7",
      frame_dark_active: "#D2D1D7",
      frame_dark_inactive: "#9699A0",
      holes_light_active: "#FFFFFF",
      holes_light_inactive: "#C3C4C7",
      holes_dark_active: "#737373",
      holes_dark_inactive: "#9699A0",
    };
    this.render();
  }

  static get observedAttributes() {
    return ["status", "type"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue) {
      switch (name) {
        case "status": {
          if (newValue === "on") this.active = true;
          if (newValue === "off") this.active = false;
          this.renderColors();
          break;
        }
        case "type": {
          if (newValue === "dark") this.dark = true;
          if (newValue === "light") this.dark = false;
          this.renderColors();
          break;
        }
      }
    }
  }

  connectedCallback() {
    this.renderColors();
  }

  render() {
    const template = `
<style>
  svg {
    height: inherit;
    width: inherit;
  }
</style>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30">
  <g id="Canvas" transform="translate(-20 -13)">
    <g id="outlet">
      <use id="frame" transform="translate(20 13)" xlink:href="#path0_fill"/>
      <use id="center" fill-opacity="0.0" transform="translate(26 20)" xlink:href="#path1_fill"/>
      <g id="holes" transform="translate(31.333 25)">
        <use xlink:href="#path2_fill"/>
        <use xlink:href="#path3_fill"/>
      </g>
    </g>
  </g>
  <defs>
    <path id="path0_fill" fill-rule="evenodd" d="M5 0a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5H5zm1 15c0-5 2.667-8 2.667-8h12.666S24 10 24 15s-2.667 8-2.667 8H8.667S6 20 6 15z"/>
    <path id="path1_fill" fill-rule="evenodd" d="M0 8c0-5 2.667-8 2.667-8h12.666S18 3 18 8s-2.667 8-2.667 8H2.667S0 13 0 8zm5.333-2.333a.667.667 0 0 1 1.334 0v4.666a.667.667 0 1 1-1.334 0V5.667zm6 0a.667.667 0 1 1 1.334 0v4.666a.667.667 0 0 1-1.334 0V5.667z"/>
    <path id="path2_fill" d="M.667 0A.667.667 0 0 0 0 .667v4.666a.667.667 0 1 0 1.333 0V.667A.667.667 0 0 0 .667 0z"/>
    <path id="path3_fill" d="M6.667 0A.667.667 0 0 0 6 .667v4.666a.667.667 0 0 0 1.333 0V.667A.667.667 0 0 0 6.667 0z"/>
  </defs>
</svg>
`;
    this.shadow.innerHTML = template;
  }

  renderColors() {
    let frameColor;
    if (this.dark) {
      frameColor = this.active
        ? this.colors.frame_dark_active
        : this.colors.frame_dark_inactive;
    } else {
      frameColor = this.active
        ? this.colors.frame_light_active
        : this.colors.frame_light_inactive;
    }
    let holesColor;
    if (this.dark) {
      holesColor = this.active
        ? this.colors.holes_dark_active
        : this.colors.holes_dark_inactive;
    } else {
      holesColor = this.active
        ? this.colors.holes_light_active
        : this.colors.holes_light_inactive;
    }

    const frame = this.shadow.getElementById("frame");
    frame.setAttribute("fill", frameColor);
    const holes = this.shadow.getElementById("holes");
    holes.setAttribute("fill", holesColor);
  }

  set status(value) {
    this.setAttribute("status", value);
  }

  set type(value) {
    this.setAttribute("type", value);
  }
}

customElements.define("outlet-icon", OutletIconComponent);

class DesklampIconComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.dark = true;
    this.active = true;
    this.colors = {
      lamp_active: "#FFCC01",
      lamp_inactive: "#C3C4C7",
      armature_light_active: "#FFFFFF",
      armature_light_inactive: "#FFFFFF",
      armature_dark_active: "#35ABDD",
      armature_dark_inactive: "#9699A0",
    };
    this.render();
  }

  static get observedAttributes() {
    return ["status", "type"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue) {
      switch (name) {
        case "status": {
          if (newValue === "on") this.active = true;
          if (newValue === "off") this.active = false;
          this.renderColors();
          break;
        }
        case "type": {
          if (newValue === "dark") this.dark = true;
          if (newValue === "light") this.dark = false;
          this.renderColors();
          break;
        }
      }
    }
  }

  connectedCallback() {
    this.renderColors();
  }

  render() {
    const template = `
<style>
  svg {
    height: inherit;
    width: inherit;
  }
</style>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="29" height="30" viewBox="0 0 29 30">
  <g id="Canvas" transform="translate(-43)">
    <g id="desk-Lamp">
      <use id="armature" transform="translate(43)" xlink:href="#path0_fill"/>
      <use id="lamp" transform="translate(65.707 9.779)" xlink:href="#path1_fill"/>
    </g>
  </g>
  <defs>
    <path id="path0_fill" d="M13.275 3.88a.616.616 0 0 1 0-.87l2.83-2.83c.24-.24.63-.24.87 0l3.483 3.483 7.58 1.234a.923.923 0 0 1 .504 1.564l-8.986 8.987a.923.923 0 0 1-1.565-.505l-1.233-7.58-.9-.9-10.796 7.39 4.997 4.21a2.309 2.309 0 0 1 1.945 4.087v4.156h8.928c.68 0 1.231.551 1.231 1.231v1.232c0 .68-.551 1.231-1.231 1.231h-19.7C.551 30 0 29.449 0 28.769v-1.232c0-.68.551-1.23 1.231-1.23h8.004V22.15a2.305 2.305 0 0 1-.922-1.936L3.347 16.03a2.309 2.309 0 1 1 .056-4.362l-.017-.024L13.864 4.47l-.589-.59z"/>
    <path id="path1_fill" fill-rule="evenodd" d="M4.38 1.61A2.77 2.77 0 0 1 0 3.866L3.865 0c.325.454.516 1.01.516 1.61z"/>
  </defs>
</svg>
`;
    this.shadow.innerHTML = template;
  }

  renderColors() {
    let armatureColor;
    if (this.dark) {
      armatureColor = this.active
        ? this.colors.armature_dark_active
        : this.colors.armature_dark_inactive;
    } else {
      armatureColor = this.active
        ? this.colors.armature_light_active
        : this.colors.armature_light_inactive;
    }
    let lampColor = this.active
      ? this.colors.lamp_active
      : this.colors.lamp_inactive;

    const armature = this.shadow.getElementById("armature");
    armature.setAttribute("fill", armatureColor);
    const lamp = this.shadow.getElementById("lamp");
    lamp.setAttribute("fill", lampColor);
  }

  set status(value) {
    this.setAttribute("status", value);
  }

  set type(value) {
    this.setAttribute("type", value);
  }
}

customElements.define("desklamp-icon", DesklampIconComponent);

class BulbIconComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.dark = true;
    this.active = true;
    this.colors = {
      lamp_active: "#FFCC01",
      lamp_inactive: "#C3C4C7",
      socket_light: "#FFFFFF",
      socket_dark: "#9699A0",
    };
    this.render();
  }

  static get observedAttributes() {
    return ["status", "type"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue) {
      switch (name) {
        case "status": {
          if (newValue === "on") this.active = true;
          if (newValue === "off") this.active = false;
          this.renderColors();
          break;
        }
        case "type": {
          if (newValue === "dark") this.dark = true;
          if (newValue === "light") this.dark = false;
          this.renderColors();
          break;
        }
      }
    }
  }

  connectedCallback() {
    this.renderColors();
  }

  render() {
    const template = `
<style>
  svg {
    height: inherit;
    width: inherit;
  }
</style>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="30" viewBox="0 0 18 30">
  <g id="Canvas" transform="translate(-158)">
    <g id="bulb">
      <g id="socket" transform="translate(163.795 24.886)">
        <use xlink:href="#path0_fill"/>
        <use xlink:href="#path1_fill"/>
      </g>
      <use id="lamp" transform="translate(158)" xlink:href="#path2_fill"/>
    </g>
  </g>
  <defs>
    <path id="path0_fill" d="M0 0h6.136v3.068H0V0z"/>
    <path id="path1_fill" d="M.724 3.75s-.17.34.17.682c.342.34 1.29.682 2.174.682.883 0 1.833-.341 2.173-.682.341-.341.17-.682.17-.682H.725z"/>
    <path id="path2_fill" d="M0 10.227C0 2.387 4.773 0 8.864 0c4.09 0 8.863 2.386 8.863 10.227 0 4.432-4.773 12.955-6.477 13.637-.736.294-1.3.335-2.386.34-1.087-.005-1.65-.046-2.387-.34C4.773 23.182 0 14.659 0 10.227z"/>
  </defs>
</svg>
`;
    this.shadow.innerHTML = template;
  }

  renderColors() {
    let socketColor = this.dark
      ? this.colors.socket_dark
      : this.colors.socket_light;
    let lampColor = this.active
      ? this.colors.lamp_active
      : this.colors.lamp_inactive;

    const socket = this.shadow.getElementById("socket");
    socket.setAttribute("fill", socketColor);
    const lamp = this.shadow.getElementById("lamp");
    lamp.setAttribute("fill", lampColor);
  }

  set status(value) {
    this.setAttribute("status", value);
  }

  set type(value) {
    this.setAttribute("type", value);
  }
}

customElements.define("bulb-icon", BulbIconComponent);

class FanIconComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.dark = true;
    this.active = true;
    this.colors = {
      stand_light: "#FFFFFF",
      stand_dark: "#9699A0",
      background_light: "#C3C4C7",
      background_dark_active: "#EEEDF2",
      background_dark_inactive: "#C3C4C7",
      blades_light_active: "#35ABDD",
      blades_light_inactive: "#FFFFFF",
      blades_dark_active: "#35ABDD",
      blades_dark_inactive: "#737373",
    };
    this.render();
  }

  static get observedAttributes() {
    return ["status", "type"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue) {
      switch (name) {
        case "status": {
          if (newValue === "on") this.active = true;
          if (newValue === "off") this.active = false;
          this.renderColors();
          break;
        }
        case "type": {
          if (newValue === "dark") this.dark = true;
          if (newValue === "light") this.dark = false;
          this.renderColors();
          break;
        }
      }
    }
  }

  connectedCallback() {
    this.renderColors();
  }

  render() {
    const template = `
<style>
  svg {
    height: inherit;
    width: inherit;
  }
</style>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27" height="30" viewBox="0 0 27 30">
  <g id="Canvas" transform="translate(-185)">
    <g id="fan">
      <use id="background" transform="translate(185)" xlink:href="#path0_fill"/>
      <g id="blades" transform="translate(185.798 .9)">
        <use xlink:href="#path1_fill"/>
        <use xlink:href="#path2_fill"/>
        <use xlink:href="#path3_fill"/>
      </g>
      <g id="stand" transform="translate(189.688 10.938)">
        <use xlink:href="#path4_fill"/>
        <use xlink:href="#path5_fill"/>
      </g>
    </g>
  </g>
  <defs>
    <path id="path0_fill" d="M26.25 13.125c0 7.249-5.876 13.125-13.125 13.125S0 20.374 0 13.125 5.876 0 13.125 0 26.25 5.876 26.25 13.125z"/>
    <path id="path1_fill" d="M10.479 8.961a3.75 3.75 0 0 1 4.94 1.141l.017.002c1.227-2.01 3.353-2.433 4.935-2.748 1.66-.331 2.723-.543 1.519-2.344-1.984-3.186-5.6-5.448-9.982-4.941-2.401.47-6.688 1.657-1.957 9.25.163-.132.339-.253.528-.36z"/>
    <path id="path2_fill" d="M8.944 10.606A3.75 3.75 0 0 0 11 15.732c-4.214 7.893-7.384 4.772-8.991 2.927-2.628-3.543-2.476-7.805-.707-11.115.959-1.943 1.672-1.129 2.789.144 1.063 1.213 2.492 2.843 4.846 2.902l.007.016z"/>
    <path id="path3_fill" d="M12.65 15.96a3.75 3.75 0 0 0 3.373-4.373c8.94-.374 7.86 3.94 7.085 6.262-1.718 4.063-5.468 6.094-9.219 6.25-2.16.16-1.82-.868-1.29-2.476.505-1.532 1.184-3.59.04-5.649l.01-.014z"/>
    <path id="path4_fill" d="M8.438 4.375a2.187 2.187 0 1 0 0-4.375 2.187 2.187 0 0 0 0 4.375z"/>
    <path id="path5_fill" d="M6.563 16.25v-1.07a13.235 13.235 0 0 0 3.75 0v1.07h5.312c.69 0 1.25.56 1.25 1.25v1.563H0V17.5c0-.69.56-1.25 1.25-1.25h5.313z"/>
  </defs>
</svg>
`;
    this.shadow.innerHTML = template;
  }

  renderColors() {
    let standColor = this.dark
      ? this.colors.stand_dark
      : this.colors.stand_light;
    let backgroundColor;
    if (!this.dark) {
      backgroundColor = this.colors.background_light;
    } else {
      backgroundColor = this.active
        ? this.colors.background_dark_active
        : this.colors.background_dark_inactive;
    }
    let bladesColor;
    if (this.dark) {
      bladesColor = this.active
        ? this.colors.blades_dark_active
        : this.colors.blades_dark_inactive;
    } else {
      bladesColor = this.active
        ? this.colors.blades_light_active
        : this.colors.blades_light_inactive;
    }

    const stand = this.shadow.getElementById("stand");
    stand.setAttribute("fill", standColor);
    const background = this.shadow.getElementById("background");
    background.setAttribute("fill", backgroundColor);
    const blades = this.shadow.getElementById("blades");
    blades.setAttribute("fill", bladesColor);
  }

  set status(value) {
    this.setAttribute("status", value);
  }

  set type(value) {
    this.setAttribute("type", value);
  }
}

customElements.define("fan-icon", FanIconComponent);

class LampIconComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.dark = true;
    this.active = true;
    this.colors = {
      lamp_active: "#FFCC01",
      lamp_inactive: "#C3C4C7",
      wire_light: "#FFFFFF",
      wire_dark_active: "#D2D1D7",
      wire_dark_inactive: "#9699A0",
      armature_light: "#FFFFFF",
      armature_dark_active: "#35ABDD",
      armature_dark_inactive: "#9699A0",
    };
    this.render();
  }

  static get observedAttributes() {
    return ["status", "type"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue) {
      switch (name) {
        case "status": {
          if (newValue === "on") this.active = true;
          if (newValue === "off") this.active = false;
          this.renderColors();
          break;
        }
        case "type": {
          if (newValue === "dark") this.dark = true;
          if (newValue === "light") this.dark = false;
          this.renderColors();
          break;
        }
      }
    }
  }

  connectedCallback() {
    this.renderColors();
  }

  render() {
    const template = `
<style>
  svg {
    height: inherit;
    width: inherit;
  }
</style>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="30" viewBox="0 0 25 30">
  <g id="Canvas" transform="translate(-87)">
    <g id="ceiling-lamp">
      <use id="lamp" transform="translate(95.125 26.25)" xlink:href="#path0_fill"/>
      <use id="armature" transform="translate(87 6.563)" xlink:href="#path1_fill"/>
      <use id="wire" transform="translate(98.25)" xlink:href="#path2_fill"/>
    </g>
  </g>
  <defs>
    <path id="path0_fill" d="M0 0h7.813a3.915 3.915 0 0 1-3.907 3.75A3.915 3.915 0 0 1 0 0z"/>
    <path id="path1_fill" d="M10.313.625c0-.345.28-.625.624-.625h2.5c.346 0 .626.28.626.625v2.813c7.5 2.187 10.312 8.124 10.312 11.562 0 3.438-1.094 3.75-1.094 3.75H1.094S0 18.437 0 15 2.813 5.625 10.313 3.437V.626z"/>
    <path id="path2_fill" d="M0 .313L1.875 0v5.625H0V.312z"/>
  </defs>
</svg>
`;
    this.shadow.innerHTML = template;
  }

  renderColors() {
    let wireColor;
    if (!this.dark) {
      wireColor = this.colors.wire_light;
    } else {
      wireColor = this.active
        ? this.colors.wire_dark_active
        : this.colors.wire_dark_inactive;
    }
    let armatureColor;
    if (!this.dark) {
      armatureColor = this.colors.armature_light;
    } else {
      armatureColor = this.active
        ? this.colors.armature_dark_active
        : this.colors.armature_dark_inactive;
    }
    let lampColor = this.active
      ? this.colors.lamp_active
      : this.colors.lamp_inactive;

    const wire = this.shadow.getElementById("wire");
    wire.setAttribute("fill", wireColor);
    const armature = this.shadow.getElementById("armature");
    armature.setAttribute("fill", armatureColor);
    const lamp = this.shadow.getElementById("lamp");
    lamp.setAttribute("fill", lampColor);
  }

  set status(value) {
    this.setAttribute("status", value);
  }

  set type(value) {
    this.setAttribute("type", value);
  }
}

customElements.define("lamp-icon", LampIconComponent);

class FloorlampIconComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.dark = true;
    this.active = true;
    this.colors = {
      shade_active: "#FFCC01",
      shade_inactive: "#C3C4C7",
      stand_light: "#FFFFFF",
      stand_dark_active: "#35ABDD",
      stand_dark_inactive: "#9699A0",
    };
    this.render();
  }

  static get observedAttributes() {
    return ["status", "type"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue) {
      switch (name) {
        case "status": {
          if (newValue === "on") this.active = true;
          if (newValue === "off") this.active = false;
          this.renderColors();
          break;
        }
        case "type": {
          if (newValue === "dark") this.dark = true;
          if (newValue === "light") this.dark = false;
          this.renderColors();
          break;
        }
      }
    }
  }

  connectedCallback() {
    this.renderColors();
  }

  render() {
    // console.log('rendering')
    const template = `
<style>
  svg {
    height: inherit;
    width: inherit;
  }
</style>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="30" viewBox="0 0 15 30">
  <g id="Canvas" transform="translate(-127)">
    <g id="floor-lamp">
      <use id="shade" fill="#FFCC01" transform="translate(127)" xlink:href="#path0_fill"/>
      <use id="stand" fill="#35ABDD" transform="translate(129.812 10.313)" xlink:href="#path1_fill"/>
    </g>
  </g>
  <defs>
    <path id="path0_fill" d="M1.875 0h11.25L15 9.375H0L1.875 0z"/>
    <path id="path1_fill" d="M5.625 0H3.75v16.875H.625A.625.625 0 0 0 0 17.5v1.563c0 .345.28.625.625.625H8.75c.345 0 .625-.28.625-.625V17.5a.625.625 0 0 0-.625-.625H5.625V0z"/>
  </defs>
</svg>
`;
    this.shadow.innerHTML = template;
  }

  renderColors() {
    let standColor;
    if (!this.dark) {
      standColor = this.colors.stand_light;
    } else {
      standColor = this.active
        ? this.colors.stand_dark_active
        : this.colors.stand_dark_inactive;
    }
    let shadeColor = this.active
      ? this.colors.shade_active
      : this.colors.shade_inactive;

    const stand = this.shadow.getElementById("stand");
    stand.setAttribute("fill", standColor);
    const shade = this.shadow.getElementById("shade");
    shade.setAttribute("fill", shadeColor);
  }

  set status(value) {
    this.setAttribute("status", value);
  }

  set type(value) {
    this.setAttribute("type", value);
  }
}

customElements.define("floorlamp-icon", FloorlampIconComponent);
