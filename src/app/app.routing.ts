import { CustomGreetingComponent } from './custom-greeting/custom-greeting.component';
import { CoffeeContainerComponent } from './coffee/coffee-container/coffee-container.component'

// Technically the type is Ng2StateDeclaration[]
export const routerStates = [
	{
		name: 'custom-greeting',
		url: '/greeting',
		component: CustomGreetingComponent,
		label: 'Our custom component',
	},
	{
		name: 'app-coffee-container',
		url: '/coffee',
		component: CoffeeContainerComponent,
		label: 'Coffee',
	},
];
