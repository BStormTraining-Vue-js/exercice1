<script setup>
import { computed, reactive, ref } from "vue";
import { Button, ConfirmDialog, useConfirm } from "primevue";
import { CONSTANTS } from "./constants.js";

/***** exercice 1.1 *****/
const count = ref(5);
const increase = () => {
    if(count.value >= 10) {
        return;
    }
    count.value++;
}

const decrease = () => {
    if(count.value <= 0) {
        return;
    }
    count.value--;
}
/***** end exercice 1.1 *****/

/***** exercice 1.2 *****/
const articles = reactive([
    { nom: "Écouteurs sans fil", description: "Écouteurs bluetooth avec réduction de bruit", prix: 129.99, quantite: 0 },
    { nom: "Tasse à café", description: "Tasse en céramique 350ml", prix: 12.50, quantite: 0 },
    { nom: "Clavier mécanique", description: "Clavier gaming rétroéclairé", prix: 89.99, quantite: 0 },
    { nom: "Cahier premium", description: "Cahier A4 avec couverture rigide", prix: 15.99, quantite: 0 },
    { nom: "Sac à dos", description: "Sac à dos imperméable pour ordinateur", prix: 45.00, quantite: 0 },
    { nom: "Lampe de bureau", description: "Lampe LED ajustable", prix: 34.99, quantite: 0 },
    { nom: "Souris ergonomique", description: "Souris sans fil ergonomique", prix: 59.99, quantite: 0 },
    { nom: "Plante artificielle", description: "Plante décorative en pot", prix: 24.50, quantite: 0 },
    { nom: "Chargeur portable", description: "Batterie externe 10000mAh", prix: 29.99, quantite: 0 },
    { nom: "Support téléphone", description: "Support de bureau ajustable", prix: 19.99, quantite: 0 },
    { nom: "Enceinte portable", description: "Mini enceinte bluetooth étanche", prix: 49.99, quantite: 0 },
    { nom: "Agenda 2025", description: "Agenda journalier format A5", prix: 22.50, quantite: 0 },
    { nom: "Tapis de souris", description: "Tapis de souris XXL avec repose-poignet", prix: 27.99, quantite: 0 },
    { nom: "Câble USB", description: "Câble de charge tressé 2m", prix: 9.99, quantite: 0 },
    { nom: "Bloc-notes adhésif", description: "Pack de notes repositionnables", prix: 5.99, quantite: 0 },
    { nom: "Webcam HD", description: "Webcam 1080p avec micro intégré", prix: 79.99, quantite: 0 },
    { nom: "Pochette ordinateur", description: "Housse de protection 15 pouces", prix: 32.50, quantite: 0 },
    { nom: "Hub USB", description: "Hub 4 ports USB 3.0", prix: 25.99, quantite: 0 },
    { nom: "Ventilateur USB", description: "Mini ventilateur de bureau silencieux", prix: 18.50, quantite: 0 },
    { nom: "Support tablette", description: "Support ajustable pour tablette", prix: 28.99, quantite: 0 }
]);

const totalAmount = computed(() => {
    let total = articles.reduce((prev, next) => prev + next.quantite * next.prix, 0);
    if(totalCount.value >= 10) {
        total *= (1 - 0.05);
    }
    return total;
});
const totalCount = computed(() => articles.reduce((prev, next) => prev + next.quantite, 0));

const addArticle = (article) => {
    article.quantite++;
}

const removeArticle = (article) => {
    if(article.quantite <= 0) {
        return;
    }
    article.quantite--;
}
/***** end exercice 1.2 *****/

/***** exercice 1.3 *****/
const confirm = useConfirm();
const duration = ref(0);
const idInterval = ref(null);
const savedTimes = reactive([]);
let previous = 0;

const formatTime = (time) => {
    const milliSeconds = (time % 1000).toString().padStart(3, '0');
    const seconds = (Math.floor(time / 1000) % 60).toString().padStart(2, '0');
    const minutes = (Math.floor(time / 60000)).toString().padStart(2, '0');
    return `${minutes}:${seconds}:${milliSeconds}`;
}

const start = () => {
    if(idInterval.value) {
        return;
    }
    const start = Date.now();
    idInterval.value = setInterval(() => {
        duration.value = Date.now() - start + previous;
    });
}

const save = () => {
    savedTimes.push(duration.value);
}

const stop = () => {
    clearInterval(idInterval.value);
    idInterval.value = null;
    previous = duration.value;
}

const reset = () => {
    confirm.require({
        ...CONSTANTS.DEFAULT_CONFIRMATION_OPTIONS,
        header: 'Confirmation',
        message: 'Êtes-vous sûr de vouloir tout effacer ?',
        accept: () => {
            stop();
            savedTimes.splice(0, savedTimes.length);
            duration.value = 0;
            previous = 0;
        }
    })
}

const removeTime = (index) => {
    savedTimes.splice(index, 1);
}

/***** end exercice 1.3 *****/
</script>

<template>
<div id="root" class="m-3">
    <div class="panel">
        <h1 class="font-bold text-2xl">Exercice 1.1</h1>
        <hr>
        <p class="text-2xl">Compteur : 
            <span :class="['font-bold', {
                'text-red-400': count < 3,
                'text-orange-400': count < 5,
                'text-blue-400': count < 8,
                'text-green-400': count >= 8
            }]">{{ count }}</span>
        </p>
        <div class="flex gap-3">
            <Button :disabled="count <= 0" size="small" icon="pi pi-minus" outlined severity="secondary" @click="decrease"></Button>
            <Button :disabled="count >= 10" size="small" icon="pi pi-plus" outlined severity="secondary" @click="increase"></Button>
        </div>
    </div>

    <div class="panel">
        <h1 class="font-bold text-2xl">Exercice 1.2</h1>
        <hr>
        <table>
            <thead>
                <tr>
                    <th class="text-left">Nom</th>
                    <th class="text-left">Description</th>
                    <th class="text-left">Prix</th>
                    <th class="text-left">Quantité</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in articles">
                    <td>{{ item.nom }}</td>
                    <td>{{ item.description }}</td>
                    <td>{{ item.prix.toFixed(2) }} €</td>
                    <td class="flex gap-2 items-center justify-between">
                        <Button :disabled="item.quantite <= 0" size="small" icon="pi pi-minus" severity="info" @click="removeArticle(item)"></Button>
                        {{ item.quantite }}
                        <Button size="small" icon="pi pi-plus" severity="info" @click="addArticle(item)"></Button>
                    </td>
                </tr>
            </tbody>
            <tfoot v-if="totalCount > 0">
                <tr>
                    <td class="font-bold text-2xl">Total: </td>
                    <td></td>
                    <td>{{ totalAmount.toFixed(2) }} €</td>
                    <td class="text-center">{{ totalCount }}</td>
                </tr>
            </tfoot>
        </table>
    </div>

    <div class="panel">
        <h1 class="text-2xl font-bold">Bonus Exercice 1.3 </h1>
        <hr>
        <div class="grid grid-cols-2 gap-3">
            <div>
                <p class="text-2xl font-bold">{{ formatTime(duration) }}</p>
                <div class="flex gap-3">
                    <Button :disabled="idInterval" label="Démarrer" icon="pi pi-play" iconPos="right" severity="success" @click="start"></Button>
                    <Button label="Mémoriser" icon="pi pi-save" iconPos="right" severity="info" @click="save"></Button>
                    <Button :disabled="!duration" label="Arrêter" icon="pi pi-stop" iconPos="right" severity="danger" @click="stop" @click.ctrl="reset"></Button>
                </div>
            </div>
            <table v-if="savedTimes.length">
                <thead>
                    <tr>
                        <th class="text-left">Temps</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, i) in savedTimes" :key="i">
                        <td>{{ formatTime(item) }}</td>
                        <td class="text-right"><Button icon="pi pi-trash" severity="danger" size="small" @click="removeTime(i)"></Button></td>
                    </tr>
                </tbody>
            </table>
            <p v-else >Aucune données sauvegardées</p>
        </div>
    </div>
</div>

<ConfirmDialog></ConfirmDialog>

</template>

<style scoped></style>