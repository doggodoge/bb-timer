<script lang="ts">
  import { getContext } from 'svelte';
  import Timer from './lib/Timer.svelte';

  export let timeout: () => void = () => {
    /* do nothing */
  };

  const { styleable } = getContext('sdk');
  const component = getContext('component');
</script>

<div use:styleable={$component.styles}>
  <Timer on:timeout={timeout} />
</div>

<style>
  :root {
    --blue: #4285f4;

    --grey-3: #eeeeee;
    --grey-4: #e0e0e0;
  }
</style>
