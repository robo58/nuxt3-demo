<template>
  <div>
    Counter: {{ counter.n }}
    <button @click="counter.increment()">
      +
    </button>
    <button @click="counter.decrement()">
      -
    </button>
  </div>
</template>

<script setup>
// const {counter, increment, decrement, reset} = useCounter();
import { useCounter } from "~/stores/counter";

const counter = useCounter()
</script>
