<script>
  const featuredSpeakers = [
    
    { name: 'Alice Johnson', title: 'Cybersecurity Specialist',  img: '/alice.jpeg' },
    { name: 'Bob Brown', title: 'Blockchain Developer',img: '/bob.jpeg' },
    // ...more featured speakers
  ];
</script>

<div class="featured-speakers">
  {#each featuredSpeakers as speaker}
    <div class="speaker">
      <img src={speaker.img} alt={speaker.name} />
      <h3>{speaker.name}</h3>
      <p>{speaker.title}</p>
    </div>
  {/each}
</div>

<style>
  .featured-speakers {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  .speaker {
    text-align: center;
  }
  .speaker img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
    max-width: 100%;
  }
</style>
