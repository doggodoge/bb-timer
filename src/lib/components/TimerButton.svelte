<button class="button" on:click>
  <slot />
</button>

<style>
  .button {
    border-style: none;
    background-color: var(--grey-3);
    padding: 0.3rem 0.5rem;
    border-radius: 0.2em;
    transition: 100ms;
  }

  .button:hover {
    box-shadow: 0.1em 0.1em 0 var(--grey-4);
  }

  .button:active {
    background-color: var(--grey-4);
    box-shadow: none;
  }
</style>
