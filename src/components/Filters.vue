<template>
    <div class="inputs-wrapper">
        <div>
            <ui5-label for="filterInput" show-colon>Filter</ui5-label>
            <ui5-input id="filterInput" placeholder="Enter Person Name" v-on:input="filterData"></ui5-input>
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
</template>

<script>
import { store } from "../store/Store.js";
import { mapState } from 'vuex';

import {
	SETDATA,
	SETFILTERTEXT,
	SETSORTCRITERIA,
} from "../store/mutations/types.js";

export default {
    computed: mapState({
        data: state => state.data,
        allData: state => state.allData,
        filterText: state => state.filterText,
        sortCriteria: state => state.sortCriteria,
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
    }
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
</style>