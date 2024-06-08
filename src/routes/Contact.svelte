<script>
import DiscordIcon from "$lib/media/contact/icons/discord.svg";
import EmailIcon from "$lib/media/contact/icons/email.svg";
import GitHubIcon from "$lib/media/contact/icons/github.svg";
import RedditIcon from "$lib/media/contact/icons/reddit.svg";
import SteamIcon from "$lib/media/contact/icons/steam.svg";
import YouTubeIcon from "$lib/media/contact/icons/youtube.svg";
</script>

<section id="contact">
  <div id="sign">
    <div id="poles"></div>
    <div id="plate">
      <h2>Contact Me</h2>
    </div>
  </div>
  <p>
    There are several ways you can get in touch with me.<br>
    Below are a few of them, roughly in order of preference.<br>
    Which is best also depends mostly on what it is you're contacting me about.
  </p>
  <ul>
    <li>
      <span>
        <img src={DiscordIcon} alt="Discord Clyde logo" title="Discord"/>
        <a href="https://discord.com/users/348083986989449216">@hopperelec</a>
        <span>(or)</span>
        <a href="https://discord.gg/zCdEKf9YbG">my Discord server</a>
      </span>
    </li>
    <li>
      <a href="mailto:hopperelec@gmail.com">
        <img src={EmailIcon} alt="Mail icon" title="Email"/>
        <span>hopperelec@gmail.com</span>
      </a>
    </li>
    <li>
      <a href="https://youtube.com/@hopperelec">
        <img src={YouTubeIcon} alt="YouTube logo" title="YouTube"/>
        <span>@hopperelec</span>
      </a>
    </li>
    <li>
      <a href="https://github.com/hopperelec">
        <img src={GitHubIcon} alt="GitHub Invertocat logo" title="GitHub"/>
        <span>hopperelec</span>
      </a>
    </li>
    <li>
      <a href="https://reddit.com/u/hopperelec">
        <img src={RedditIcon} alt="Reddit Snoo logo" title="Reddit"/>
        <span>u/hopperelec</span>
      </a>
    </li>
    <li>
      <a href="https://steamcommunity.com/id/hopperelec/">
        <img src={SteamIcon} alt="Steam logo" title="Steam"/>
        <span>hopperelec</span>
      </a>
    </li>
  </ul>
</section>

<style>
section {
  background-color: #3aa7d2;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 1em 1em;
}

#sign {
  --border: 8px solid #7B3F00;

  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Book Antiqua", Palatino, Georgia, serif;
  text-align: center;
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

p {
  padding: 1em;
  text-align: center;
}

ul {
  padding: 0;
  display: grid;

  /* Magic number */
  @media (width >= 442px) {
    grid-template-columns: 1fr 1fr;
  }
}

li {
  list-style: none;
  margin: .3em;

  & > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: .5em;
    box-sizing: border-box;
    background-color: #fff;
    color: #000;
    border: .3em solid #000;
    border-radius: .3em;
  }
}

img {
  width: 2em;
  height: 2em;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #000;
}
</style>