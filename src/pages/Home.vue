<template>
    <div class="home">
        <div class="header">
            <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg"
                alt="Logo de Uber Eats">
            <div class="wrapper--input">
                <input type="text" placeholder="De quoi avez vous envie?" v-model="user_search">
                <div class="search">
                    <div v-for="restaurant in search_restaurant" :key="restaurant"
                        class="container--restaurant--search">
                        <div class="wrapper--img">
                            <img :src="restaurant.image" alt="">
                        </div>
                        <p>{{ restaurant.name }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="banner">

        </div>
        <RestaurantRow v-for="data in data_restaurant" :key="data" :three_restaurent="data" />
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
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
let all_restaurants = []
const makeDataRestaurant = () =>
{
    let three_restaurant = []

    for ( const restaurant of bd )
    {
        const new_restaurant = new Restaurant( restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time )

        all_restaurants.push( new_restaurant )

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

let user_search = ref( '' )
let search_restaurant = ref( [] )

watch( user_search, ( newValue ) =>
{
    let regex = RegExp( newValue, 'i' )
    let new_search_restaurant = all_restaurants.filter( restaurant => regex.test( restaurant.name ) )

    newValue == 0 ? search_restaurant.value = [] : search_restaurant.value = new_search_restaurant
} )

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

        .wrapper--input {
            position: relative;

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

            .search {
                position: absolute;
                top: 100%;
                width: 100%;
                // height: 300px;
                background-color: #f6f6f6;
                // border: 1px solid red;
            }

            .container--restaurant--search {
                display: flex;
                align-items: center;
                // gap: 50px;
                padding: 10px;
                // justify-content: space-between;

                &:hover{
                    background-color: #eeeeee;
                }

                .wrapper--img {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    overflow: hidden;
                    margin-right: 25px;

                    img {
                        width: auto;
                        height: 100%;
                    }
                }
            }
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