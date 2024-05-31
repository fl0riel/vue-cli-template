<template>
    <header class="navbar">
        <div class="container">
            <div class="navbar-content">
                <a class="navbar-logo" href="/">Logo</a>
                <ul class="navbar-list">
                    <li class="navbar-item" v-for="link in links" :key="link.alias">
                        <a :href="link.url" class="navbar-link">{{ link.title }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    title: 'Home',
                    alias: 'home',
                    url: '/',
                },
                {
                    title: 'About',
                    alias: 'about',
                    url: '/about',
                },
            ],
        };
    },
};
</script>