<template>
     <v-container>
        <v-card color="blue" >
            <v-card-title>
                <div class="text-h3">Our Menu</div>
            </v-card-title>
        </v-card>
    </v-container>
    <v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
            <v-row>
                <v-col cols="12" md="4" v-for="item in menuItems" :key="item">
                    <v-card>
                      <v-container>
                        <v-card color="#fda216">
                            <v-card-item>
                                <v-card-title>{{ item.name }}</v-card-title>

                                <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" src="./../public/menus/french.avif" cover ></v-img>
                          
                            <v-card-text>
                                {{ item.price }}
                            </v-card-text>
                        </v-card>
                      </v-container>
                    </v-card>
                </v-col>
            </v-row>
            </v-container>
        </v-card>
    </v-container>
</template>

<script setup>
const menuItems = [
    {
        name: "French Fries / Sweet Potato Fries",
        price: 200,
        description: "Crispy, golden-fried potatoes served hot.",
        size: "Large",
        offers: "None",
        image: "https://unsplash.com/photos/a-basket-of-french-fries-sitting-on-top-of-a-wooden-table-ChXHveqrb28?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
    },
    {
        name: "Sausage",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image: "https://unsplash.com/photos/sausage-on-black-round-pan-cSxpCQrRlo8"
    },
    {
        name: "Grilled Chicken Breast with Vegetables",
        price: 100,
        description: "Tender chicken breast grilled to perfection, served with sautéed veggies.",
        size: "Large",
        offers: "None",
        image: "https://unsplash.com/photos/a-basket-of-french-fries-sitting-on-top-of-a-wooden-table-ChXHveqrb28?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
    },
    {
        name: "BBQ Ribs with Coleslaw",
        price: 50,
        description: "low-cooked ribs glazed in BBQ sauce, paired with coleslaw.",
        size: "None",
        offers: "None",
        image: "https://unsplash.com/photos/sausage-on-black-round-pan-cSxpCQrRlo8"
    },
    {
        name: "Spaghetti Bolognese",
        price: 80,
        description: "Classic Italian pasta with a rich, meaty tomato sauce.",
        size: "Large",
        offers: "None",
        image: "https://unsplash.com/photos/a-basket-of-french-fries-sitting-on-top-of-a-wooden-table-ChXHveqrb28?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
    },
    {
        name: "Wine",
        price: 5000,
        description: "Best Wine in town",
        size: "None",
        offers: "None",
        image: "https://unsplash.com/photos/sausage-on-black-round-pan-cSxpCQrRlo8"
    }
]
</script>