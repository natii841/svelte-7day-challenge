<script>
  import { createEventDispatcher } from "svelte";

  export let note;

  const dispatch = createEventDispatcher();

  let editing = false;
  let editedText = note.text;

  function saveEdit() {
    if (!editedText.trim()) return;

    dispatch("edit", editedText);
    editing = false;
  }
</script>

<div class="bg-gray-700 p-3 rounded-lg flex justify-between items-center">

  {#if editing}
    <input
      bind:value={editedText}
      class="flex-1 px-2 py-1 rounded bg-gray-600 text-white outline-none"
      on:keydown={(e) => e.key === "Enter" && saveEdit()}
    />
  {:else}
    <span class="text-white flex-1">
      {note.text}
    </span>
  {/if}

  <div class="flex gap-2 ml-2">

    {#if editing}
      <button
        on:click={saveEdit}
        class="text-green-400"
      >
        ✔
      </button>
    {:else}
      <button
        on:click={() => (editing = true)}
        class="text-blue-400"
      >
        ✎
      </button>
    {/if}

    <button
      on:click={() => dispatch("delete")}
      class="text-red-400"
    >
      ✕
    </button>

  </div>

</div>