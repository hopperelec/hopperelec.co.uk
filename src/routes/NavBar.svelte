<div id="nav-container">
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About Me</a></li>
      <li><a href="/#projects">Projects</a></li>
      <li><a href="/#contact">Contact</a></li>
    </ul>
  </nav>
</div>

<style>
  #nav-container {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99999;
  }

  a {
    color: white;
    text-decoration: none;
  }

  nav {
    border-bottom: 5px solid white;
    background-color: #646464;
    font-size: 1.5em;
    font-weight: bold;
    font-family: "Roboto Mono", monospace, sans-serif;
  }

  ul {
    display: flex;
    justify-content: center;
    padding: 0;
  }

  li {
    list-style: none;
    cursor: pointer;
    text-align: center;
    text-wrap: nowrap;
    padding: 10px;

    /* Every li except the first */
    & + li {
      padding-left: 0;

      &::before {
        /* Dividing line */
        content: '';
        height: 80%;
        border-left: 2px solid white;
        padding-left: 10px;
      }
    }
  }

  /* Hard-coded nav width, there might be a more responsive solution */
  @media (width >= 600px) {
    #nav-container {
      display: flex;
      justify-content: center;
    }

    nav {
      border: 5px solid white;
      border-top: none;
      border-radius: 0 0 1em 1em;
    }
  }
</style>