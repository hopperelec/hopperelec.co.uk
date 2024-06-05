<section id="contact">
  <div id="sign-container">
    <div id="sign">
      <div id="poles"></div>
      <div id="plate">
        <h2>Contact Me</h2>
      </div>
    </div>
  </div>
  <p>TODO</p>
</section>

<style>
  section {
    height: 60vh;
    background-color: #203995;
  }

  #sign-container {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: 1.5em;
  }

  #sign {
    --border: 8px solid #7B3F00;

    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: "Book Antiqua", Palatino, Georgia, serif;
  }

  #plate {
    border: var(--border);
    background-color: #C19A6B;
    padding: 5px;
  }

  #poles {
    width: 90%;
    height: 1.5em;
    border-left: var(--border);
    border-right: var(--border);
    box-sizing: border-box;
  }
</style>