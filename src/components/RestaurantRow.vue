<template>
    <div class="restaurant--row">
        <h2 class="title">
            Nos restaurants
        </h2>
        <div class="wrapper--card">
            <RestaurantCard v-for="index in 3" :key="index" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import RestaurantCard from './RestaurantCard.vue';

const example = ref( 'Hello Vue!' );
</script>

<style scoped lang="scss">
.restaurant--row {
    .title{
        font-size: 2rem;
    }
    .wrapper--card {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>