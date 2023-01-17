<template>
    <div :class="cardClasses" :style="cardStyle">
        <h2>{{ title }}</h2>
        <p class="color-red-500">{{ description }}</p>
        <p>{{ testVariable }}</p>
        <p>{{ reversedTestVariable }}</p>
        <button @click="testVariable = testVariable+'1'">Change</button>

        <counter></counter>
    </div>
</template>


<!-- using script setup -->
<script lang="ts" setup>

    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    });
    
    const testVariable = ref('test123454545454');
    const reversedTestVariable = computed(() => testVariable.value.split('').reverse().join(''));

    const color = useColor();

    const cardStyle = computed(()=>{
        return {
            borderColor: color.value
        }
    })

    const cardClasses = computed(()=>{
        let classes = ['my-2', 'mx-5', 'border' ,'rounded-xl', 'p-5', 'shadow-xl']
        // classes.push(`border-[#0011223]`) -- works
        // classes.push(`border-[${color.value}]`) -- dynamic value doesn't work
        return classes.join(" ")
    })
</script>

<!-- without using script setup -->
<!-- <script lang="ts">
    export default {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    setup(props) {
        // setup() receives props as the first argument.
        console.log(props.title)
    }
    }
</script> -->