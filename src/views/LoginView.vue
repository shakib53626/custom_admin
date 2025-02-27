<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores";
import { useRouter } from "vue-router";

const router = useRouter()
const auth = useAuthStore();

const email    = ref('');
const password = ref('');

const handleLogin = () =>{
    if(email.value && password.value){
        auth.isLoggedIn = true;
        auth.getAuthStatus = true;

        router.push({name: 'home'});
    }
}
</script>

<template>
    <div class="flex justify-center items-center min-h-screen">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
            <h2 class="text-3xl font-bold mb-6 text-center text-white">
                <span class="bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text">
                    LogIn
                </span>
            </h2>

            <form @submit="handleLogin">
                <div class="mb-6">
                    <label for="email" class="block text-gray-700 text-sm font-bold mb-2">
                        <i class="fas fa-envelope mr-2"></i>Email
                    </label>

                    <div>
                        <input id="email" type="email" v-model="email" class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email">
                    </div>
                </div>

                <div class="mb-6">
                    <label for="password" class="block text-gray-700 text-sm font-bold mb-2">
                        <i class="fas fa-lock mr-2"></i>Password
                    </label>

                    <div>
                        <input id="password" type="password" v-model="password" class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password">
                    </div>
                </div>

                <div class="flex items-center justify-center">
                    <button type="submit" class="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                        LogIn
                    </button>
                </div>

                <div class="text-center mt-4">
                    <a href="#" class="text-gray-600 hover:underline">Forgot password?</a>
                </div>

            </form>
            <p class="text-center text-gray-600 mt-6">Don't have an account? <a href="#" class="text-blue-500 hover:underline">Sign up</a></p>
        </div>
    </div>
</template>

<style scoped>

</style>