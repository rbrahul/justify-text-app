
export function getStoreFromLocalStorage(){
	const localStorageJSON = localStorage.getItem('justifyText');
	const localStore=JSON.parse(localStorageJSON);
	return localStore;
}