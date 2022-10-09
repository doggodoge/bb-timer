<script>
  import { getContext } from 'svelte';

  const { styleable } = getContext('sdk');
  const component = getContext('component');
</script>

<div use:styleable={$component.styles}>
  <p style="color: red;">Not implemented</p>
</div>
