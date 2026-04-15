<script>
  let count = 0;
</script>

<div class="min-h-screen flex items-center justify-center bg-bg text-text">
  <div class="bg-bg-light border border-border rounded-2xl p-8 shadow-lg text-center">
    <h1 class="text-2xl font-bold text-primary mb-4">Counter</h1>

    <p class="text-5xl font-semibold mb-6">{count}</p>

    <div class="flex gap-3 justify-center">
      <button
        on:click={() => count--}
        class="px-4 py-2 bg-danger text-white rounded-lg hover:opacity-90"
      >
        ➖
      </button>
      <button
        on:click={() => count++}
        class="px-4 py-2 bg-success text-white rounded-lg hover:opacity-90"
      >
        ➕
      </button>
      <button
        on:click={() => (count = 0)}
        class="px-4 py-2 bg-secondary text-white rounded-lg hover:opacity-90"
      >
        Reset
      </button>
    </div>
  </div>
</div>