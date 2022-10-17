<script lang="ts">
  import longTimeToSecs from './utils/longTimeToSecs.ts';
  import TimerInput from './components/TimerInput.svelte';
  import splitInput from './components/utils/splitInput';
  import secsToLongTime from './utils/secsToLongTime';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  function timeout(): void {
    dispatch('timeout');
  }

  let intervalID = 0;
  let timerIsRunning = false;
  let counter = 0;
  let displayTime = '000000';
  $: startStopButtonLabel = timerIsRunning ? 'Stop' : 'Start';

  let hrs = 0;
  let secs = 0;
  let mins = 0;
  $: {
    const { hour, minute, second } = splitInput(displayTime);
    hrs = Number(hour);
    mins = Number(minute);
    secs = Number(second);
  }

  function newDisplayTime(counter: number): string {
    const longTime = secsToLongTime(counter);
    const hour = longTime.hour.padStart(2, "0");
    const minute = longTime.minute.padStart(2, "0");
    const second = longTime.second.padStart(2, "0");
    return `${hour}${minute}${second}`;
  }

  function handleStartStopClick(): void {
    if (timerIsRunning) {
      stop();
    } else {
      start();
    }
  }

  function start(): void {
    timerIsRunning = true;
    counter = longTimeToSecs(hrs, mins, secs);
    // we don't want to create more than one interval
    if (intervalID) {
      return;
    }
    intervalID = window.setInterval(() => {
      counter = counter - 1;
      displayTime = newDisplayTime(counter);
      if (counter < 1) {
        stop();
        timeout();
      }
    }, 1000);
  }

  function stop(): void {
    timerIsRunning = false;
    window.clearInterval(intervalID);
    intervalID = 0;
  }

  function reset(): void {
    stop();
    counter = 0;
    displayTime = '000000';
  }
</script>

<div class="container">
  <div class="input-container">
    <TimerInput bind:value={displayTime} />
  </div>

  <div class="button-container">
    <button on:click={handleStartStopClick}>{startStopButtonLabel}</button>
    <button on:click={reset}>Reset</button>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }

  .input-container {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }

  .button-container {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
</style>
