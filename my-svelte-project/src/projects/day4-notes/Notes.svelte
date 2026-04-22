<script>
  import { onMount } from "svelte";
  import NoteItem from "./NoteItem.svelte";

  let notes = [];
  let input = "";

  onMount(() => {
    const saved = localStorage.getItem("notes");
    if (saved) notes = JSON.parse(saved);
  });

  $: localStorage.setItem("notes", JSON.stringify(notes));

  function addNote() {
    if (!input.trim()) return;

    notes = [
      ...notes,
      {
        id: Date.now(),
        text: input
      }
    ];

    input = "";
  }

  function deleteNote(id) {
    notes = notes.filter(n => n.id !== id);
  }

  function editNote(id, newText) {
    notes = notes.map(n =>
      n.id === id ? { ...n, text: newText } : n
    );
  }
</script>

<div class="min-h-screen bg-gray-900 flex items-center justify-center p-4">
  <div class="bg-gray-800 p-6 rounded-2xl w-full max-w-md shadow-lg">

    <h1 class="text-2xl text-white font-bold mb-4 text-center">
      Notes
    </h1>

    <!-- Input -->
    <div class="flex gap-2 mb-4">
      <input
        bind:value={input}
        placeholder="Write a note..."
        class="flex-1 px-3 py-2 rounded-lg bg-gray-700 text-white outline-none"
        on:keydown={(e) => e.key === "Enter" && addNote()}
      />
      <button
        on:click={addNote}
        class="bg-green-500 px-4 py-2 rounded-lg text-white"
      >
        Add
      </button>
    </div>

    <!-- Empty -->
    {#if notes.length === 0}
      <p class="text-gray-400 text-center">No notes yet</p>
    {/if}

    <!-- Notes list -->
    <div class="space-y-2">
      {#each notes as note}
        <NoteItem
          {note}
          on:delete={() => deleteNote(note.id)}
          on:edit={(e) => editNote(note.id, e.detail)}
        />
      {/each}
    </div>

  </div>
</div>