export const useCounter = defineStore('counter',{
    state: () => ({
        n: 2,
        incrementedTimes: 0,
        decrementedTimes: 0,
        numbers: [] as number[],
    }),

    getters: {
        double: (state) => state.n * 2,
        triple: (state) => state.n * 3,
    },

    actions: {
        increment(amount=1){
            this.n += amount;
            this.incrementedTimes++;
        },

        decrement(amount=1){
            this.n -= amount;
            this.decrementedTimes++;
        },

        async decrementToZero(interval: number = 300) {
            if (this.n <= 0) return
      
            while (this.n > 0) {
              this.$patch((state) => {
                state.n--
                state.decrementedTimes++
              })
              await delay(interval)
            }
          },
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta.hot))
  }