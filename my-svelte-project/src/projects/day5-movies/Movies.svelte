<script>
  import MovieCard from "./MovieCard.svelte";

  let query = "";
  let movies = [];
  let loading = false;
  let error = "";

  const API_KEY = "";

  async function searchMovies() {
    if (!query.trim()) return;

    loading = true;
    error = "";
    movies = [];

    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
      );

      const data = await res.json();

      if (data.Response === "False") {
        throw new Error(data.Error);
      }

      movies = data.Search;
    } catch (err) {
      error = err.message;
    } finally {
      loading = false;
    }
  }
</script>

<div class="min-h-screen bg-gray-900 p-6">

  <!-- Header -->
  <div class="max-w-6xl mx-auto">

    <h1 class="text-4xl font-bold text-white text-center mb-8">
      Movie Search
    </h1>

    <!-- Search -->
    <div class="flex gap-2 mb-8 max-w-xl mx-auto">
      <input
        bind:value={query}
        placeholder="Search movies..."
        class="flex-1 px-4 py-3 rounded-xl bg-gray-800 text-white outline-none"
        on:keydown={(e) => e.key === "Enter" && searchMovies()}
      />

      <button
        on:click={searchMovies}
        class="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl text-white"
      >
        Search
      </button>
    </div>

    <!-- Loading -->
    {#if loading}
      <p class="text-center text-gray-400">
        Loading movies...
      </p>
    {/if}

    <!-- Error -->
    {#if error}
      <p class="text-center text-red-400">
        {error}
      </p>
    {/if}

    <!-- Movies -->
    {#if movies.length > 0}
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {#each movies as movie}
          <MovieCard {movie} />
        {/each}

      </div>
    {/if}

  </div>

</div>