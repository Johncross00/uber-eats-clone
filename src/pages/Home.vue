<template>
    <div class="home">
        <RestaurantRow v-for="data in data_restaurant" :key="data" :three_restaurent="data"/>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import RestaurantRow from '../components/RestaurantRow.vue'
import bd from '../bd.js'
console.log(bd)

class Restaurant{
    constructor(name, note, image, drive_time){
        this.name = name
        this.note = note
        this.image = image
        this.drive_time = drive_time
    }
}

let data_restaurant = ref([])
const makeDataRestaurant = () => {
    let three_restaurant =[]

    for(const restaurant of bd){
        const new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time)
        
        if(three_restaurant.length == 2){
            three_restaurant.push( new_restaurant )
            data_restaurant.value.push( three_restaurant)
            three_restaurant = []
        }
        else{
            three_restaurant.push( new_restaurant )
        }
    }
    console.log(data_restaurant)
}
onMounted(makeDataRestaurant)

</script>

<style scoped>
  
</style>