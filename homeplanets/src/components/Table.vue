<template>
<div>
    <div class="inputs-wrapper">
        <div>
            <ui5-label for="filterInput" show-colon>Filter</ui5-label>
            <ui5-input id="filterInput" :value="filterText" placeholder="Enter Person Name" v-on:input="filterData"></ui5-input>
        </div>
        <div>
            <ui5-label for="sortSelect" show-colon>Sort</ui5-label>
            <ui5-select id="sortSelect" v-on:change="sortData">
				<ui5-option>None</ui5-option>
                <ui5-option>Name</ui5-option>
                <ui5-option>Height</ui5-option>
                <ui5-option>Mass</ui5-option>
                <ui5-option>Created</ui5-option>
                <ui5-option>Edited</ui5-option>
                <ui5-option>HomeWorld</ui5-option>
            </ui5-select>
        </div>
    </div>

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
import { store } from "../main.js";
import { mapState } from 'vuex';
import {
	ADDPEOPLE,
	INITDATA,
	SETDATA,
	SETFILTERTEXT,
	SETSORTCRITERIA,
	SETPLANETDATA,
	SETPLANETINFO,
} from "../store/mutations/types.js";

export default {
  name: 'Table',
  props: {},
  computed: mapState({
	data: state => state.data,
	allData: state => state.allData,
	filterText: state => state.filterText,
	sortCriteria: state => state.sortCriteria,
	planetData: state => state.planetData,
	planetInfo: state => state.planetInfo,
  }),
    methods: {
        filterData(event) {
			store.dispatch(SETFILTERTEXT, event.target.value);

            if (!this.filterText) {
				store.dispatch(SETDATA, this.allData);
                return;
			}

			const containsRegex = new RegExp(this.filterText.toLowerCase());
			const newData = this.allData.filter(item => containsRegex.test(item.name.toLowerCase()));
			store.dispatch(SETDATA, newData);
        },

        sortData(event) {
			store.dispatch(SETSORTCRITERIA, event.detail.selectedOption.textContent.toLowerCase());

			const tempData = this.data.map(item => item);
			if (this.sortCriteria !== "none") {
				tempData.sort((a, b) => {
					return this.compare(a, b, this.sortCriteria);
				})

				store.dispatch(SETDATA, tempData);
			}
		},
		
		compare(a, b, property) {
			const stringProps = ["name", "homeworld"];

			if (stringProps.includes(property)) {
				return a[property].localeCompare(b[property]);
			} else {
				const aValue = parseInt(a[property].replaceAll("-", ""));
				const bValue = parseInt(b[property].replaceAll("-", ""));

				if (aValue < bValue) {
					return -1;
				}
				if (bValue > aValue) {
					return 1;
				}
				return 0;
			}
		},

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
    .inputs-wrapper {
        display: flex;
        flex-direction: column;
    }

    .inputs-wrapper > div {
        width: 300px;
        margin-bottom: 1rem;
    }

    .inputs-wrapper ui5-input,
    .inputs-wrapper ui5-select {
        width: 100%;
    }

    .popover-content {
        display: flex;
        flex-direction: column;
    }

    .popover-content > div {
        margin-bottom: 1rem;
    }
</style>
