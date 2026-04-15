<script>
  export let variant = "primary"; // primary, secondary, danger, success, warning, info
  export let size = "md";         // sm, md, lg
  export let type = "button";
  export let disabled = false;
  export let loading = false;
  export let className = "";      // Allow additional custom classes

  // Tailwind classes for each variant
  const variants = {
    primary: "bg-primary text-white hover:opacity-90",
    secondary: "bg-secondary text-white hover:opacity-90",
    danger: "bg-danger text-white hover:opacity-90",
    success: "bg-success text-white hover:opacity-90",
    warning: "bg-warning text-white hover:opacity-90",
    info: "bg-info text-white hover:opacity-90",
    outline: "border border-border text-text bg-transparent hover:bg-highlight",
    ghost: "text-text hover:bg-highlight"
  };

  // Tailwind classes for sizes
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  $: variantClass = variants[variant] || variants.primary;
  $: sizeClass = sizes[size] || sizes.md;
</script>

<button
  {type}
  disabled={disabled || loading}
  class={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed ${variantClass} ${sizeClass} ${className}`}
>
  {#if loading}
    <!-- Simple Spinner -->
    <svg
      class="animate-spin h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      />
    </svg>
  {/if}

  <!-- Slot allows custom content like text or icons -->
  <slot />
</button>