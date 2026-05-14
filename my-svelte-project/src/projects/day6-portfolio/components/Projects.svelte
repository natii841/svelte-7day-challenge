<script>
  const projects = [
    {
      title: "MCYE",
      desc: "A website made for MCYE NGO organization."
    },
    {
      title: "Todo App",
      desc: "Todo app with localStorage and Tailwind."
    },
    {
      title: "Speak-to-Guess-game",
      desc: "A simple JS speak to guess game I learned thorugh Brad Traversy that allows users to speak to the mic to guess a specific number"
    },
    {
      title: "Reactjs testimonial Card",
      desc: "A simple GRID LAYOUT TESTIMONIAL CARD"
    }
  ];
</script>

<section id="projects" class="py-20 px-6 max-w-6xl mx-auto">

  <h2 class="text-3xl font-bold mb-10">
    Projects
  </h2>

  <div class="grid md:grid-cols-2 gap-6">

    {#each projects as project}
      <div class="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition">

        <h3 class="text-xl font-semibold mb-3">
          {project.title}
        </h3>

        <p class="text-gray-400">
          {project.desc}
        </p>

      </div>
    {/each}

  </div>

</section>