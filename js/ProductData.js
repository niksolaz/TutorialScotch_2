module.exports = {
	//Load Mock Product Data Into LocalStorage
	init: function(){
		localStorage.clear();
		localStorage.setItem('product',JSON.stringify([
			{
				id:'0011001',
				name:'Scotch Tutorial Shop Car',
				image:'car.png',
				description:'Can I rent for luxury car prices. Become a VIP for a day.',
				variants: [
					{
						sku:'123123',
						type:'Chevrolet Camaro Limited Edition',
						price: 249.99,
						inventory: 1,
						city:'Asti'
					},
					{
						sku:'123124',
						type:'Chevrolet Camaro Blue Navi',
						price: 349.99,
						inventory: 3,
						city:'Torino'
					},
					{
						sku:'123125',
						type:'Chevrolet Camaro L.E. Transformer',
						price: 379.99,
						inventory: 1,
						city:'Cuneo'
					}
				]
			}
		]));
	}
};