<script>
  export let movie;
</script>

<div class="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">

  <img
    src={movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450?text=No+Image"}
    alt={movie.Title}
    class="w-full h-80 object-cover"
  />

  <div class="p-4">
    <h2 class="text-white font-semibold text-lg line-clamp-1">
      {movie.Title}
    </h2>

    <div class="flex justify-between text-gray-400 text-sm mt-2">
      <span>{movie.Year}</span>
      <span class="capitalize">{movie.Type}</span>
    </div>
  </div>

</div>