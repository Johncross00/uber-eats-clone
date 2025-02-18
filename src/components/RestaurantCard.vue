<template>
    <div class="restaurant--card">
        <div class="restaurant--image">

        </div>

        <div class="restaurant--informations">
            <div class="top">
                <p class="name">
                    Subway
                </p>
                <p class="note">
                    <span>4.5</span>
                </p>
            </div>
            <p class="time">
                20-30min
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const example = ref( 'Hello Vue!' );
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