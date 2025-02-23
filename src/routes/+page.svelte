<script>
  import Navbar from '../components/Navbar.svelte';
  import Countdown from '../components/Countdown.svelte';
  import FeaturedSpeakers from '../components/FeaturedSpeakers.svelte';
  import '../global.css';
</script>

<Navbar />

<main>
  <section class="hero">
    <h1>Tech Conference 2025</h1>
    <p>The premier event for tech enthusiasts</p>
    <button class="btn btn-warning register-button">Register Now</button>
  </section>

  <section class="countdown">
    <Countdown />
  </section>

  <section class="featured-speakers">
    <FeaturedSpeakers />
  </section>
</main>

<style>
  main {
    font-family: 'Arial', sans-serif;
  }
  .hero {
    text-align: center;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, #ff7e5f, #d73b32);/* Dark Tech Look */
    color: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    margin-bottom: 2rem;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #ffc312; /* Soft Gold */
}

.hero p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #dfe6e9; /* Light Grey */
}

.register-button {
    font-size: 1.2rem;
    padding: 0.75rem 1.5rem;
    background-color: #00b894; /* Vibrant Teal */
    border: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
}

.register-button:hover {
    background-color: #009474; /* Darker Teal */
    transform: scale(1.05);
}

.countdown, .featured-speakers {
  margin: 2rem 0;
}


</style>
