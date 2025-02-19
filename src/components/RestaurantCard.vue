<template>
    <div class="restaurant--card">
        <div :style="changeBackground" class="restaurant--image">

        </div>

        <div class="restaurant--informations">
            <div class="top">
                <p class="name">
                    {{ info_restaurant.name}}
                </p>
                <p class="note">
                    <span>{{ info_restaurant.note }}</span>
                </p>
            </div>
            <p class="time">
                {{ info_restaurant.drive_time }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
const props = defineProps({
    info_restaurant: Object
})

const changeBackground = computed( () =>
{
    return {
        backgroundImage: `url(${ props.info_restaurant.image })`
    }
} )
</script>

<style scoped lang="scss">
.restaurant--card {
    width: 32%;
    height: 30vh;

    p {
        margin: 0px;
    }

    .restaurant--image {
        background-image: url("https://img.freepik.com/free-photo/tasty-hamburger-beef-burger-close-up-plate-white-background_155003-9671.jpg?ga=GA1.1.978714475.1739880511&semt=ais_hybrid");
        height: 70%;
        background-size: cover;
        background-position: center;
    }

    .restaurant--informations {
        .top {
            margin: 10px, 0px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .note {
                background-color: #eeeeee;
                height: 30px;
                width: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 0.8rem;
                border-radius: 50%
            }
        }

        .time {
            font-size: 0.9rem;
        }
    }
}
</style>