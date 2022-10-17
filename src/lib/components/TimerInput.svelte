<script lang="ts">
  import splitInput from './utils/splitInput.ts';
  import {createEventDispatcher} from "svelte";

  const dispatch = createEventDispatcher();
  function change(): void {
    dispatch('change');
  }

  export let value = '';
  $: time = splitInput(value);

  const handleKeyDown = (event: KeyboardEvent): void => {
    change();
    if (/[0-9]/.test(event.key)) {
      value = value + event.key;
    }
    if (event.key === 'Backspace') {
      value = value.slice(0, -1);
    }
  };
</script>

<div class="container" role="textbox" tabindex="0" on:keydown={handleKeyDown}>
  <div class="number-container">
    <div class="number">{time.hour}</div>
    <div class="postfix">h</div>
  </div>

  <div class="number-container">
    <div class="number">{time.minute}</div>
    <div class="postfix">m</div>
  </div>

  <div class="number-container">
    <div class="number">{time.second}</div>
    <div class="postfix">s</div>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    outline-style: none;
    transition: 100ms;
    font-size: xx-large;
  }

  .container:focus {
    border-bottom-style: solid;
    border-color: var(--blue);
    border-bottom-width: 0.1rem;
    border-radius: 0.15rem;
  }

  .number-container {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }

  .number {
    min-width: 2ch;
    text-align: end;
  }

  .postfix {
    font-size: small;
    color: dimgrey;
  }
</style>
