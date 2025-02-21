<template>
    <v-container>
        <!-- Title Section -->
       <v-container>
                    <v-card color="#fda216">
                        <v-card-title>
                            <div class="text-h3">About Us</div>
                        </v-card-title>
                    </v-card>
         </v-container>

        <!-- Stepper Section -->
        <v-stepper :items="['Our Story', 'Our Mission', 'Our Promise']">
    <template v-slot:item.1>
        <v-card title="Our Story" flat>
            <v-img src="./../public/about4.jpg" height="600px" cover></v-img>
            <v-card-text>
                Founded with a passion for great food and warm hospitality, our restaurant started as a small family-owned eatery. Over the years, we have grown into a beloved spot for food lovers, offering delicious meals made with the freshest ingredients.
            </v-card-text>
        </v-card>
    </template>

    <template v-slot:item.2>
        <v-card title="Our Mission" flat>
            <v-img src="./../public/about3.jpg" height="600px" cover></v-img>
            <v-card-text>
                Our mission is to create unforgettable dining experiences by serving high-quality, flavorful dishes in a cozy and welcoming atmosphere. We believe in sustainability, supporting local farmers, and crafting meals that bring people together.
            </v-card-text>
        </v-card>
    </template>

    <template v-slot:item.3>
        <v-card title="Our Promise" flat>
            <v-img src="./../public/about1.jpg" height="600px" cover></v-img>
            <v-card-text>
                We are committed to providing exceptional service, fresh ingredients, and a menu that caters to all tastes. Whether you’re here for a quick bite, a family dinner, or a celebration, we promise to make every visit special.
            </v-card-text>
        </v-card>
    </template>
</v-stepper>


    </v-container>
</template>
