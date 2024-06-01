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
import { links } from "@/config";

export default {
    data() {
        return {
            links: links,
        };
    },
};
</script>