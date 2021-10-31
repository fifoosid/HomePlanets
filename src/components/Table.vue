<template>
<div>
    <ui5-table v-bind:busy="this.data.length === 0" busy-delay="0">
        <ui5-table-column slot="columns">
            <span>Name</span>
        </ui5-table-column>
        <ui5-table-column slot="columns">
            <span>Height</span>
        </ui5-table-column>
        <ui5-table-column slot="columns">
            <span>Mass</span>
        </ui5-table-column>
        <ui5-table-column slot="columns">
            <span>Created</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" demand-popin min-width="700" popin-text="Edited">
            <span>Edited</span>
        </ui5-table-column>
        <ui5-table-column slot="columns" demand-popin min-width="600" popin-text="Home World">
            <span>Home World</span>
        </ui5-table-column>

        <ui5-table-row v-for="item in this.data" :key="item.name">
            <ui5-table-cell>{{ item.name }}</ui5-table-cell>
            <ui5-table-cell>{{ item.height }} cm</ui5-table-cell>
            <ui5-table-cell>{{ item.mass }} kg</ui5-table-cell>
            <ui5-table-cell>{{ new Date(item.created).toJSON().slice(0, 10) }}</ui5-table-cell>
            <ui5-table-cell>{{ new Date(item.edited).toJSON().slice(0, 10) }}</ui5-table-cell>
            <ui5-table-cell>
				<ui5-link v-on:click="showPlanetInfo">{{ item.homeworld }}</ui5-link>
			</ui5-table-cell>
        </ui5-table-row>
    </ui5-table>

    <ui5-popover id="planet-popover" v-bind:header-text="planetInfo.name">
        <div class="popover-content">
            <div>
                <ui5-label>Diameter:</ui5-label>
                <ui5-badge color-scheme="5">{{planetInfo.diameter}}</ui5-badge>
            </div>
            <div>
                <ui5-label>Climate:</ui5-label>
                <ui5-badge color-scheme="2">{{planetInfo.climate}}</ui5-badge>
            </div>
            <div>
                <ui5-label>Population:</ui5-label>
                <ui5-badge color-scheme="10">{{planetInfo.population}}</ui5-badge>
            </div>
        </div>
    </ui5-popover>
</div>
</template>

<script>
import axios from "axios";
import { store } from "../store/Store.js";
import { mapState } from 'vuex';
import {
	ADDPEOPLE,
	INITDATA,
	SETPLANETDATA,
	SETPLANETINFO,
} from "../store/mutations/types.js";

export default {
  name: 'Table',
  computed: mapState({
	data: state => state.data,
	allData: state => state.allData,
	filterText: state => state.filterText,
	sortCriteria: state => state.sortCriteria,
	planetData: state => state.planetData,
	planetInfo: state => state.planetInfo,
  }),
    methods: {
        showPlanetInfo(event) {
            const planetURL = event.target.textContent;

			store.dispatch(SETPLANETINFO, {});

            this.planetData.forEach(planet => {
                if (planet.planetName === planetURL) {
					store.dispatch(SETPLANETINFO, planet.planetDetails);
                }
            });

            if (!this.planetInfo.name) {
                axios
                    .get(planetURL)
                    .then(response => {
						store.dispatch(SETPLANETINFO, response.data);

						store.dispatch(SETPLANETDATA, {
							planetName: planetURL,
							planetDetails: this.planetInfo,
						});

                        this.openPopover(event);
                    });
            } else {
                this.openPopover(event);
            }
        },

        openPopover(event) {
            document.querySelector("#planet-popover").showAt(event.target);
        },

        fetchData() {
            axios
                .get("https://swapi.dev/api/people")
                .then(response => {
                    store.dispatch(ADDPEOPLE, response.data.results);
                    store.dispatch(INITDATA);
                });
        }
    },
    mounted: function() {
        this.fetchData();
    },
}
</script>

<style scoped>
    .popover-content {
        display: flex;
        flex-direction: column;
    }

    .popover-content > div {
        margin-bottom: 1rem;
    }
</style>
