import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  producto!: ProductoDescripcion;
  id!: string;

  constructor( private route: ActivatedRoute, 
                public productoService: ProductosService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe( parametros => {
        this.productoService.getProducto(parametros['id'])
          .subscribe( (producto: ProductoDescripcion) => {
            console.log(producto);
            this.id = parametros['id'];
            this.producto = producto;
          });
      });
  }
}
