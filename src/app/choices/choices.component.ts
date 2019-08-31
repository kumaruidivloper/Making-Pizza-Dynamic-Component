import { PizzaComponent } from './../pizza/pizza.component';
import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.scss']
})
export class ChoicesComponent  {

  @ViewChild('pizza', {read: ViewContainerRef}) pizza: ViewContainerRef;
  public selectedToppings: string[];
  public toppings: string[];
  constructor(private resolver: ComponentFactoryResolver) {
    this.selectedToppings = [];
    this.toppings = ['anchovy', 'bacon', 'basil', 'chili', 'mozzarella',
                  'mushroom', 'olive', 'onion', 'pepper', 'pepperoni',
                  'prawn', 'sweetcorn', 'tomato'];
   }

   selectToppings(topping) {
     console.log(topping);
     if (this.selectedToppings.indexOf(topping) === -1) {
       this.selectedToppings.push(topping);
     } else {
       this.selectedToppings.splice(this.selectedToppings.indexOf(topping), 1);
      }
   }

   createPizza() {
    const pizzaFactory = this.resolver.resolveComponentFactory(PizzaComponent);
    const pizza = this.pizza.createComponent(pizzaFactory);
    this.selectedToppings = [];
    pizza.instance.toppings = this.selectedToppings;
   }
}
