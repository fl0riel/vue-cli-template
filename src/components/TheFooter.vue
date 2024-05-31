<template>
    <footer class="footer">
        <div class="container">
            <ul class="navbar-list">
                <li class="navbar-item" v-for="link in links" :key="link.alias">
                    <a :href="link.url" class="navbar-link">{{ link.title }}</a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
    props: {
        links: {
            type: Array,
            default: () => [
                {
                title: "Home",
                alias: "home",
                url: "/",
                },
            ],
        },
    },
};
</script>