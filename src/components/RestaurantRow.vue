<template>
    <div class="restaurant--row">
        <h2 class="title">
            Nos restaurants
        </h2>
        <div class="wrapper--card">
            <RestaurantCard v-for="index in three_restaurent" :info_restaurant="index" :key="index" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import RestaurantCard from './RestaurantCard.vue';

const props = defineProps({
    three_restaurent: Array,
    required: true,
})
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