<?php
  $pageTitle = 'Thomas Cardwell';
  include("header.php"); // starts main
?>

  <section id="intro">
    <p class="logline">Favorite Uncle. Part Pirate - Part Wizard.<br/>Occasional Mustache-Twirling Villain.</p>
    <div class="flex-box flex-end">
      <a class="btn" id="bioButton">More...</a>
    </div>
  </section>

  <!-- hidden -->
  <div class="modal">

    <span class="handwriting" id="closeModal">X</span>

    <h2 class="center">About</h2>

    <blockquote class="blockquote"><i class="fas fa-quote-left" aria-hidden="true"></i> We are not <em>nouns</em>, we are <em>verbs</em>.<br>
          I am not a thing - an actor, a writer... <br>I am a person who does things - I write, I act - and I never know what I'm going to do next. I think you can be imprisoned if you think of yourself as a noun. <i class="fas fa-quote-right" aria-hidden="true"></i><br>&nbsp;<br></blockquote>

          <div class="flex-box flex-end">
            <span class="handwriting">- Stephen Fry</span>
          </div>

          <p>I’ve always loved telling stories.</p>

          <p>After nearly two decades working as a freelance creative professional, I’ve gotten pretty good at balancing both the artistic and technical skill sets.</p>

          <p>However you’re telling that story - whether directing a play, taking a photograph, or building a website - I believe you can distill the process to this: isolate the important information, then present it in the best possible light for the audience you are addressing.</p>

          <div class="flex-box flex-center">
            <!-- Fix this -->
            <img class="avatar" src="https://robertscamera.com/media/wysiwyg/staff/tom-cardwell.jpg" alt="">
          </div>




  </div>

  <div class="sth cta">

  </div>

  <section class="center" id="featured">
    <h2>Featured Work</h2>


    <div class="switches">
      <div class="stack">
        <label for="developer">Developer</label>

        <label class="switch">
          <input type="checkbox" id="developer" name="developer" value="developer">
          <span class="slider round"></span>
        </label><br>
      </div>

      <div class="stack">
        <label for="designer">Designer</label>

        <label class="switch">
          <input type="checkbox" id="designer" name="designer" value="designer">
          <span class="slider round"></span>
        </label><br>
      </div>

      <div class="stack">
        <label for="storyteller">Storyteller</label>

        <label class="switch">
          <input type="checkbox" id="storyteller" name="storyteller" value="storyteller">
          <span class="slider round"></span>
        </label><br>
      </div>

    </div>

    <input type="text" oninput="cardSearch()" id="searchbar" placeholder="Search..."/>

  </section>
  <div class="cards">


  </div>

 <?php include("footer.php"); // ends main
?>
