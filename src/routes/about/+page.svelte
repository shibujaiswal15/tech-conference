<main>
  <section class="about">
    <div class="row card">
      <div class="about-image-container">
        <img src="/tech.jpg" alt="Tech Conference" class="about-image" />
      </div>
      <div class="about-text">
        <h1>About Tech Conference 2025</h1>
        <p>Welcome to Tech Conference 2025, the ultimate gathering for tech enthusiasts. Join us for an exciting lineup of speakers, hands-on workshops, and unparalleled networking opportunities.</p>
        <p>This year, we bring together visionary leaders, engineers, and industry experts to share insights on cutting-edge innovations in artificial intelligence, cybersecurity, blockchain, and more. Whether you’re an experienced professional or a budding tech enthusiast, there’s something for everyone.</p>
      </div>
    </div>

    <div class="row reverse card">
      <div class="about-image-container">
        <img src="/speaker.jpg" alt="Speakers" class="about-image" />
      </div>
      <div class="about-text">
        <h2>Our Speakers</h2>
        <p>Tech Conference 2025 features an incredible lineup of industry leaders, innovators, and tech pioneers. Hear from top executives, researchers, and entrepreneurs who are shaping the future of technology.</p>
        <p>From AI advancements to the latest breakthroughs in cybersecurity, our speakers will provide valuable insights, practical advice, and a vision for the future.</p>
      </div>
    </div>

    <div class="row card">
      <div class="about-image-container">
        <img src="/workshop.jpg" alt="Workshops" class="about-image" />
      </div>
      <div class="about-text">
        <h2>Workshops</h2>
        <p>Enhance your skills with hands-on workshops led by industry experts. Learn about coding, cloud computing, UI/UX design, and emerging tech trends in an interactive and engaging environment.</p>
        <p>Whether you want to upskill, explore new technologies, or solve real-world problems, our workshops provide the perfect platform to gain practical knowledge.</p>
      </div>
    </div>

    <div class="row reverse card">
      <div class="about-image-container">
        <img src="/network.jpg" alt="Networking" class="about-image" />
      </div>
      <div class="about-text">
        <h2>Networking Opportunities</h2>
        <p>Connect with professionals, thought leaders, and tech enthusiasts from around the world. Whether you're looking for mentorship, job opportunities, or collaboration, Tech Conference 2025 offers structured networking sessions and informal meetups.</p>
        <p>Expand your network, share ideas, and engage in meaningful conversations that can lead to lasting professional relationships.</p>
      </div>
    </div>
  </section>
</main>

<style>
  /* 🌟 Global Styling */
  main {
    font-family: 'Arial', sans-serif;
    padding: 2rem;
    background: #2c1e1e; /* Warm Mocha */
  }

  .about {
    max-width: 1200px;
    margin: 0 auto;
  }

  /* 🌟 Card Layout */
  .row {
    display: flex;
    align-items: stretch;
    margin-bottom: 3rem;
    background: linear-gradient(135deg, #8b1e3f, #601a36); /* Deep Plum → Elegant Burgundy */
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }

  .row.reverse {
    flex-direction: row-reverse;
  }

  /* 🌟 Image Styling */
  .about-image-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 12px;
  }

  .about-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  /* 🌟 Text Styling */
  .about-text {
    flex: 1;
    padding: 0 2rem;
    color: #f8e9d7; /* Soft Ivory */
  }

  .about h1, .about h2 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
    color: #ffcc99; /* Soft Peach */
    font-weight: bold;
  }

  .about p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #f8e9d7;
    margin-bottom: 1.5rem;
  }

  /* 🌟 Responsive Design */
  @media (max-width: 768px) {
    .row {
      flex-direction: column;
      text-align: center;
    }
    .about-text {
      padding: 0 1rem;
    }
    .row.reverse {
      flex-direction: column;
    }
    .about-image-container {
      width: 100%;
      margin-bottom: 2rem;
    }
    .about h1, .about h2 {
      font-size: 2rem;
    }
  }
</style>
