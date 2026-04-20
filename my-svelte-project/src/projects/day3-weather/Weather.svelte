<script>
  let city = "";
  let weather = null;
  let loading = false;
  let error = "";

  const API_KEY = "338d8cc214296f6c74b3d763a3cc576e";

  async function getWeather() {
    if (!city.trim()) return;
    

    loading = true;
    error = "";
    weather = null;
    

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (!res.ok) throw new Error("City not found");

      weather = await res.json();
    } catch (err) {
      error = err.message;
    } finally {
      loading = false;
    }
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
  <div class="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 w-full max-w-md shadow-xl">

    <!-- Title -->
    <h1 class="text-2xl font-semibold text-white text-center mb-6">
      Weather
    </h1>

    <!-- Search -->
    <div class="flex gap-2 mb-6">
      <input
        bind:value={city}
        placeholder="Search city..."
        class="flex-1 px-4 py-2 rounded-xl bg-white/10 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
        on:keydown={(e) => e.key === "Enter" && getWeather()}
      />

      <button
        on:click={getWeather}
        class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-xl text-white transition"
      >
        Go
      </button>
    </div>

    <!-- Loading -->
    {#if loading}
      <div class="text-center text-gray-300 animate-pulse">
        Fetching weather...
      </div>
    {/if}

    <!-- Error -->
    {#if error}
      <div class="text-center text-red-400">
        {error}
      </div>
    {/if}

    <!-- Weather Card -->
    {#if weather}
      <div class="text-white text-center space-y-4">

        <!-- Location -->
        <div>
          <h2 class="text-xl font-medium">
            {weather.name}, {weather.sys.country}
          </h2>
        </div>

        <!-- Icon + Temp -->
        <div class="flex flex-col items-center">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
            class="w-20 h-20"
          />

          <p class="text-4xl font-bold">
            {Math.round(weather.main.temp)}°C
          </p>

          <p class="capitalize text-gray-300">
            {weather.weather[0].description}
          </p>
        </div>

        <!-- Extra Info -->
        <div class="grid grid-cols-2 gap-4 mt-4 text-sm">

          <div class="bg-white/10 rounded-xl p-3">
            <p class="text-gray-300">Humidity</p>
            <p class="text-lg font-semibold">
              {weather.main.humidity}%
            </p>
          </div>

          <div class="bg-white/10 rounded-xl p-3">
            <p class="text-gray-300">Wind</p>
            <p class="text-lg font-semibold">
              {weather.wind.speed} m/s
            </p>
          </div>

        </div>

      </div>
    {/if}

  </div>
</div>