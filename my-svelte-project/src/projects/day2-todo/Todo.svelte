<script>
  import { onMount } from "svelte";

  let todos = [];
  let input = "";

  // Load from localStorage
  onMount(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      todos = JSON.parse(saved);
    }
  });

  // Save automatically when todos change
  $: localStorage.setItem("todos", JSON.stringify(todos));

  function addTodo() {
    if (input.trim() === "") return;

    todos = [
      ...todos,
      {
        id: Date.now(),
        text: input,
        completed: false
      }
    ];

    input = "";
  }

  function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
  }

  function toggleTodo(id) {
    todos = todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    );
  }

  function clearCompleted() {
    todos = todos.filter(todo => !todo.completed);
  }
</script>

<div class="min-h-screen bg-gray-900 flex items-center justify-center">
  <div class="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md">
    
    <h1 class="text-2xl font-bold text-white mb-4 text-center">
      Todo App
    </h1>

    <!-- Input -->
    <div class="flex gap-2 mb-4">
      <input
        bind:value={input}
        placeholder="Enter a task..."
        class="flex-1 px-3 py-2 rounded-lg bg-gray-700 text-white outline-none"
        on:keydown={(e) => e.key === "Enter" && addTodo()}
      />

      <button
        on:click={addTodo}
        class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white"
      >
        Add
      </button>
    </div>

    <!-- Empty state -->
    {#if todos.length === 0}
      <p class="text-gray-400 text-center">No tasks yet</p>
    {/if}

    <!-- Todo list -->
    <ul class="space-y-2 mt-2">
      {#each todos as todo}
        <li class="flex justify-between items-center bg-gray-700 px-3 py-2 rounded-lg">
          
          <span
            on:click={() => toggleTodo(todo.id)}
            class="cursor-pointer flex-1"
            class:line-through={todo.completed}
            class:text-gray-400={todo.completed}
            class:text-white={!todo.completed}
          >
            {todo.text}
          </span>

          <button
            on:click={() => deleteTodo(todo.id)}
            class="ml-2 text-red-400 hover:text-red-500"
          >
            ✕
          </button>

        </li>
      {/each}
    </ul>

    <!-- Footer -->
    {#if todos.length > 0}
      <div class="flex justify-between text-sm text-gray-400 mt-4">
        <span>{todos.length} tasks</span>

        <button
          on:click={clearCompleted}
          class="hover:text-red-400"
        >
          Clear completed
        </button>
      </div>
    {/if}

  </div>
</div>