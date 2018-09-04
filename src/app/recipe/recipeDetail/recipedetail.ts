import { Component, OnInit,OnDestroy} from "@angular/core";
import { ProductService } from "../../service/product.service";
import { UserList } from '../../recipe/recipeModel';
import { SubjectSubscriber } from "rxjs/Subject";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'recipedetail',
    templateUrl: './recipedetail.html'
})
export class RecipeDetail implements OnInit {
    message:string = "Loading data..";
    listData:UserList[]=[];
    addForm: boolean = false;
    showLoader:boolean
    buttonTxt = "Add Recipe"
    private subscription: Subscription;

    constructor(private _service: ProductService) { }

    showForm(event) {
        this.addForm = !this.addForm
        if (this.addForm) {
            this.buttonTxt = "Close Recipe"
        } else {
            this.buttonTxt = "Add Recipe"
        }

    }

    response(data) {

        this.listData = data;      
        this.showLoader = true;


    }
    
    getProductData() {
      this.subscription = this._service.fetchProductData().subscribe(
            (data) => this.response(data)
          
            // , (error) => {
            //      throw error
            //  }
        )
    }


    ngOnInit() {
        this.getProductData();
    }
 
    ngOnDestroy(){
        this.subscription.unsubscribe();

    }
}