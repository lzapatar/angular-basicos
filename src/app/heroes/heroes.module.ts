import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // Las declaraciones dicen qué cosas contienen este módulo, son los componentes que hay dentro del grupo que conforma el módulo, todo lo que se defina en las declaraciones está invisible para toda la aplicación
    declarations: [ 
        HeroeComponent,
        ListadoComponent
    ],
    // significan qué cosas quiero hacer públicas o visibles fuera de este módulo
    exports: [
        ListadoComponent
    ],
    //Adentro sólo van módulos
    imports: [
        CommonModule
    ]

})
export class HeroesModule {}