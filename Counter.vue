<template>
  <div>
    <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment">Increment</button>
    <button @click="counter.decrement">Decrement</button>
    <button @click="counter.reset">Reset</button>
    <p v-if="counter.isPositive">Count is positive!</p>
  </div>
</template>

<script>
import { useCounterStore } from '@/store/counterStore';

export default {
  setup() {
    const counter = useCounterStore();

    return {
      counter,
    };
  },
};
</script>
