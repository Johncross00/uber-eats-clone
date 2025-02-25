<template>
    <div class="restaurant--row">
        <h2 class="title">Nos restaurants</h2>
        <div class="wrapper--card">
            <RouterLink v-for="(restaurant, index) in three_restaurent" :key="index"
                :to="`/restaurant/${restaurant.name}`" class="restaurant--wrapper">
                <RestaurantCard :info_restaurant="restaurant" />
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import RestaurantCard from "./RestaurantCard.vue";

const props = defineProps( {
    three_restaurent: Array,
    required: true,
} );
</script>

<style scoped lang="scss">
.restaurant--row {
    .restaurant--wrapper {
        width: 32%;
        text-decoration: none!important;
    }
    .title {
        font-size: 2rem;
    }

    .wrapper--card {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
