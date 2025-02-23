<script>
  const sessions = [
    { date: '25-02-2025', time: '10:00 AM', topic: 'Opening Keynote', speaker: 'John Doe' },
    { date: '25-02-2025', time: '11:00 AM', topic: 'Future of AI', speaker: 'Jane Smith' },
    { date: '25-02-2025', time: '01:00 PM', topic: 'Cybersecurity Trends', speaker: 'Alice Johnson' },
    { date: '25-02-2025', time: '02:00 PM', topic: 'Blockchain Technology', speaker: 'Bob Brown' },
    { date: '26-02-2025', time: '10:00 AM', topic: 'Cloud Computing', speaker: 'Charlie Davis' },
    { date: '26-02-2025', time: '11:00 AM', topic: 'Quantum Computing', speaker: 'Diana Evans' },
    { date: '26-02-2025', time: '01:00 PM', topic: 'IoT Innovations', speaker: 'Eve Foster' },
    { date: '26-02-2025', time: '02:00 PM', topic: 'AR/VR Applications', speaker: 'Frank Green' },
  ];
</script>

<main>
  <h1>Schedule</h1>
  <table>
    <thead>
      
      <tr>
        <th>Date</th>
        <th>Time</th>
        <th>Topic</th>
        <th>Speaker</th>
      </tr>
    </thead>
    <tbody>
      {#each sessions as session}
        <tr>
          <td>{session.date}</td>
          <td>{session.time}</td>
          <td>{session.topic}</td>
          <td>{session.speaker}</td>
        </tr>
      {/each}
    </tbody>
  </table>

  <div class="row card">
    <div class="about-image-container">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16925.380125991946!2d151.2039944729866!3d-33.868820522947374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3df5bc3e1b%3A0x3249f5375c5b5f75!2sInternational%20Convention%20Centre%20Sydney%20-%20ICC%20Sydney!5e0!3m2!1sen!2sau!4v1740187201234!5m2!1sen!2sau" 
        width="600" 
        height="450" 
        style="border:0; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
    <div class="about-text">
      <h2>📍 Venue: Grand Tech Arena, Sydney</h2>
      <p>
          Tech Conference 2025 will take place at the **Grand Tech Arena, Sydney, Australia**. 
          This **state-of-the-art venue** is designed to host **world-class technology events**, offering 
          cutting-edge facilities, seamless connectivity, and a **vibrant atmosphere** for networking, learning, and innovation.
      </p>

      <h3>📌 Event Guidelines</h3>
      <ul>
          <li>🎟 **Carry your digital or printed pass** for hassle-free entry.</li>
          <li>👕 **Casual or business attire** is recommended.</li>
          <li>☕ **Complimentary refreshments and meals** available throughout the event.</li>
      </ul>

      <h3>♿ Accessibility</h3>
      <ul>
          <li>🚗 **Accessible parking zones** near main entrances.</li>
          <li>🚪 **Step-free access** throughout the venue.</li>
          <li>💺 **Dedicated seating for individuals with mobility needs**.</li>
          <li>🚻 **Wheelchair-accessible restrooms** on all floors.</li>
      </ul>

      <h3>⚡ Amenities</h3>
      <ul>
          <li>📶 **High-speed WiFi** across the venue.</li>
          <li>🔋 **Charging stations** for your devices.</li>
          <li>🍽️ **Lounge areas** for informal networking.</li>
      </ul>

      <h3>🌍 Inclusive & Safe Space</h3>
      <ul>
          <li>🏳️‍🌈 **Open and inclusive environment for all attendees.**</li>
          <li>🛑 **Zero tolerance for harassment or discrimination.**</li>
          <li>🤝 **Community support teams available for assistance.**</li>
      </ul>
  </div>

  </div>
</main>

<style>
  :root {
    --background-color: #f8f5f1; /* Soft Cream */
    --text-color: #1e3a3a; /* Deep Teal */
    --primary-color: #e67e22; /* Warm Orange */
    --secondary-color: #d35400; /* Rich Rust */
    --card-background-color: rgba(255, 255, 255, 0.95);
    --card-shadow-color: rgba(0, 0, 0, 0.1);
  }

  [data-theme='dark'] {
    --background-color: #1c1e2a; /* Midnight Blue */
    --text-color: #f1c40f; /* Gold */
    --primary-color: #e67e22; /* Warm Orange */
    --secondary-color: #d35400; /* Deep Rust */
    --card-background-color: rgba(30, 30, 40, 0.95);
    --card-shadow-color: rgba(0, 0, 0, 0.5);
  }

  main {
    font-family: 'Arial', sans-serif;
    padding: 2rem;
    background-color: var(--background-color);
    transition: background-color 0.3s, color 0.3s;
  }

  h1 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    color: var(--primary-color);
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
    box-shadow: 0 4px 8px var(--card-shadow-color);
    border-radius: 8px;
    overflow: hidden;
    background: var(--card-background-color);
  }

  th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
    color: var(--text-color);
  }

  th {
    background-color: var(--primary-color);
    color: white;
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.1);
  }

  tr:hover {
    background-color: rgba(255, 193, 7, 0.2);
  }

  .row {
    display: flex;
    align-items: stretch;
    margin-top: 3rem;
    background: var(--card-background-color);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px var(--card-shadow-color);
  }

  .about-image-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 8px;
  }

  .about-text {
    flex: 1;
    padding: 0 2rem;
    color: var(--text-color);
  }

  @media (max-width: 768px) {
    .row {
      flex-direction: column;
      text-align: center;
    }
    .about-image-container {
      width: 100%;
      margin-bottom: 2rem;
    }
  }
</style>

