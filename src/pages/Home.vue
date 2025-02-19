<template>
    <div class="home">
        <div class="header">
            <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg"
                alt="Logo de Uber Eats">
            <input type="text" placeholder="De quoi avez vous envie?">
        </div>
        <div class="banner">

        </div>
        <RestaurantRow v-for="data in data_restaurant" :key="data" :three_restaurent="data" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import RestaurantRow from '../components/RestaurantRow.vue'
import bd from '../bd.js'
console.log( bd )

class Restaurant
{
    constructor ( name, note, image, drive_time )
    {
        this.name = name
        this.note = note
        this.image = image
        this.drive_time = drive_time
    }
}

let data_restaurant = ref( [] )
const makeDataRestaurant = () =>
{
    let three_restaurant = []

    for ( const restaurant of bd )
    {
        const new_restaurant = new Restaurant( restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time )

        if ( three_restaurant.length == 2 )
        {
            three_restaurant.push( new_restaurant )
            data_restaurant.value.push( three_restaurant )
            three_restaurant = []
        }
        else
        {
            three_restaurant.push( new_restaurant )
        }
    }
    console.log( data_restaurant )
}
onMounted( makeDataRestaurant )

</script>

<style scoped lang="scss">
.home {
    .header {
        height: 120px;
        width: 100%;
        display: flex;
        // flex-direction: column-reverse;
        justify-content: space-between;
        align-items: center;

        // background-color: #eeeeee;
        // padding: 50px;
        img {
            width: 200px;
        }

        input {
            background-color: #f6f6f6;
            border-radius: 15px;
            border: none;
            height: 60px;
            width: 400px;
            padding-left: 20px;
            box-shadow: 0px 5px 5px #eeeeee;
            font-size: 1.2rem;
            outline: none;
        }
    }

    .banner {
        height: 245px;
        width: 100%;
        background-image: url("https://th.bing.com/th/id/R.9c14304ad1375a3c79d400e0c7743646?rik=Z0Q98S4KyhOwLA&pid=ImgRaw&r=0");
        background-size: full;
        background-position: center;
    }
}
</style>