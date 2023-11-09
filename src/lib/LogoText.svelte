<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.5 8" width="100%">
  <defs>
    <mask id="matrix">
      <rect id="letterRect" fill="white" width="4" height="8" />
      <path
        fill="none"
        stroke="black"
        d="M1 0 1 8 4 5 0 1 1 0 4 3 0 7 1 8M3 0 3 8 0 5 4 1 3 0 0 3 4 7 3 8M2 1 2 7"
        stroke-width=".2"
      />
    </mask>
    <mask id="hopperMask">
      <use href="#letterRect" />
      <svg
        stroke="black"
        stroke-width="10"
        fill="none"
        viewBox="0 0 216 200"
        x="1"
        y="1"
        width="2"
        height="4"
        preserveAspectRatio="none"
      >
        <polyline points="82 166, 108 179, 135 166" />
        <polyline points="54 130, 108 157, 162 130" />
        <polyline points="0 54, 108 108, 216 54" />
        <polyline points="49 78.5, 108 49, 167 78.5" />
        <line x1="108" y1="0" x2="108" y2="49" />
        <line x1="108" y1="200" x2="108" y2="108" />
      </svg>
    </mask>
  </defs>
  <path
    mask="url(#matrix)"
    id="letterH"
    d="M0 1 1 2 1 4 3 2 3 0 4 1 4 5 3 6 3 4 1 6 1 8 0 7Z"
  />
  <path
    mask="url(#matrix)"
    id="letterO"
    transform="translate(4.5)"
    d="M1 0 2 1 1 2 1 6 2 7 1 8 0 7 0 1ZM3 0 4 1 4 7 3 8 2 7 3 6 3 2 2 1 3 0"
  />
  <path
    mask="url(#matrix)"
    id="letterP"
    transform="translate(9)"
    d="M1 0 2 1 1 2 1 4 2 5 1 6 1 8 0 7 0 1ZM3 0 4 1 4 5 3 6 2 5 3 4 3 2 2 1 3 0"
  />
  <use href="#letterP" x="4.5" />
  <path
    mask="url(#matrix)"
    id="letterE"
    transform="translate(18)"
    d="M1 0 2 1 3 0 4 1 3 2 2 1 1 2 1 4 2 3 2 3 3 4 2 5 1 4 1 6 2 7 3 6 4 7 3 8 2 7 1 8 0 7 0 1Z"
  />
  <g id="letterR" transform="translate(22.5)" mask="url(#hopperMask)">
    <path
      mask="url(#matrix)"
      d="M1 0 2 1 3 0 4 1 4 5 3 6 4 7 3 8 1 6 1 8 0 7 0 1Z"
    />
    <svg
      id="hopper"
      viewBox="0 0 216 200"
      x="1"
      y="1"
      width="2"
      height="4"
      preserveAspectRatio="none"
    >
      <path
        fill="#636363"
        d="M108 0 L216 54 L216 103 L162 130 L162 152 L135 166 L135 187 L108 200 L82 187 L82 166 L54 152 L54 130 L0 103 L0 54Z"
      />
    </svg>
  </g>
  <use href="#letterE" x="9" />
  <path
    mask="url(#matrix)"
    id="letterL"
    transform="translate(31.5)"
    d="M1 0 1 6 2 7 3 6 4 7 3 8 2 7 1 8 0 7 0 1Z"
  />
  <use href="#letterE" x="18" />
  <path
    mask="url(#matrix)"
    id="letterC"
    transform="translate(40.5)"
    d="M1 0 2 1 3 0 4 1 3 2 2 1 1 2 1 4 1 4 1 6 2 7 3 6 4 7 3 8 2 7 1 8 0 7 0 1Z"
  />
</svg>

<style>
  svg {
    fill: var(--main-fg-color);
  }
  svg:hover #matrix path {
    display: none;
  }
</style>
